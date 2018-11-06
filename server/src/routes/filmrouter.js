//const filmcontroller = require('../controllers/filmcontroller')
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient();

/* module.exports = (app) => {
  app.get( '/films', filmcontroller.queryonefilm)}; */

module.exports = (app) => {
  app.get( '/films', function (req, res) {

    let queryFilm = decodeURIComponent(req.url.slice(13));
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
    })
  }
)
}
