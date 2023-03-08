const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
});

const friendModel = dynamoose.model('lab', schema);

exports.handler = async(event) => {
  console.log('PATH PARAMS ----->', event.pathParameters);
  let id = event?.pathParameters?.id;
  let parsedData = JSON.parse(event.body);
  let updatedName = parsedData.name;
  
  const response = {statusCode: null, body: null};
  try{
      let results = await friendModel.update({"id": id, "name": updatedName});
      console.log(results);
      response.body = JSON.stringify(results);
      response.statusCode = 200;
    
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }
 
  
  return response;
};