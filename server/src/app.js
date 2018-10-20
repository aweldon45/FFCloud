const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const AWS = require('aws-sdk')

const app = express()

// DynamoDB config
AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'SampleMovies',
  KeySchema: [
    { AttributeName: 'year', KeyType: 'HASH'}, //Partition Key
    { AttributeName: 'title', KeyType: 'RANGE'} //Sort Key
  ],
  AttributeDefinitions: [
    { AttributeName: 'year', AttributeType: 'N'},
    { AttributeName: 'title', AttributeType: 'S'},
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err) {
    console.error('Unable to crate table. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
  }
}
);

//middleware morgan & bodyparser & cors
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.listen(process.env.PORT || 8081)
