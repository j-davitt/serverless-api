const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
});

const friendModel = dynamoose.model('lab', schema);

exports.handler = async(event) => {
  let id = event?.pathParameters?.id

  const response = {statusCode: null}
  try{

    await friendModel.delete(id);

    response.statusCode = 200;

  }catch(e){
    console.log(e.message)
    response.statusCode = 500;
  }

  // TODO implement

  return response;
};