const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
});

const friendModel = dynamoose.model('lab', schema);

exports.handler = async(event) => {
  console.log('BODY ----->', event.body)
  
  const response = {statusCode: null, body: null};
  try{
    let results = await friendModel.scan().exec();
    console.log(results);
    response.body = JSON.stringify(results);
    response.statusCode = 200;
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }
 
  
  return response;
};
