const AWS = require('aws-sdk');
const config = require('../config/config.js');

module.exports = (app) => {
  //get allfilms
  app.get('/allfilms', function (req, res) {
  AWS.config.update(config.aws_local_config)

  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
      TableName: config.aws_table_name
    };

    docClient.scan(params, function(err, data) {
      if (err) {
          console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          res.send(data)
          console.log('Query succeeded.');
          data.Items.forEach(function(item) {
            console.log(` -${item.title}: ${item.festival}`);
          })};
        }
      );
    }); //end of get allfilms

//get a single film by name
    app.get( '/film', function (req, res) {
      AWS.config.update(config.aws_local_config)

      const docClient = new AWS.DynamoDB.DocumentClient();

      let queryFilm = decodeURIComponent(req.url.slice(12));
      console.log(req.url)
      console.log(queryFilm)

     const params = {
        TableName: 'FestivalFilms',
        KeyConditionExpression: '#ttl = :ttl',
        ExpressionAttributeNames: {
          "#ttl": 'title'
        },
        ExpressionAttributeValues: {
          ":ttl": queryFilm
        }
      };

      docClient.query(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            res.send(data)
            console.log('Query succeeded.');
            data.Items.forEach(function(item) {
              console.log(` -${item.title}: ${item.festival}`);
            });
        }
      });
    }
  ); //end of get a single film by name

  //add a film
  app.post('/newfilm', function (req, res) {
    AWS.config.update(config.aws_local_config)

    const {title, festival} = req.body;

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
     TableName: config.aws_table_name,
     Item: {
       'title': title,
       'festival': festival,
       'info': {
         'screening date': 'Nov 4, 2018',
         'screening time': '3:30 PM',
         'directors': ['Aubrey Chamberlain, Tony Weldon'],
         'logline': 'A trip to Montreal',
         'genre': 'Romnace',
         'image_url': 'N/A',
         'screening_url': 'N/A'
       }
     }
   };

   console.log('Adding a new item...');
   docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("Added item:", JSON.stringify(data, null, 2));
       }
   });
 }); // End of addfilm
};
