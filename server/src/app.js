const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const AWS = require('aws-sdk')

const app = express()

//middleware morgan & bodyparser & cors
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.listen(process.env.PORT || 8081)

// DynamoDB API
AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
});

const docClient = new AWS.DynamoDB.DocumentClient();

app.get( '/movies', function (req, res) {

  let queryYear = parseInt(req.url.slice(13));
  console.log(req.url)
  console.log(queryYear)

 const params = {
    TableName: 'SampleMovies',
    KeyConditionExpression: '#yr = :yyyy',
    ExpressionAttributeNames: {
      "#yr": 'year'
    },
    ExpressionAttributeValues: {
      ":yyyy": queryYear
    }
  };

  docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        res.send(data)
        console.log('Query succeeded.');
        data.Items.forEach(function(item) {
          console.log(` -${item.year}: ${item.title}`);
        });
    }
  })
}
);
