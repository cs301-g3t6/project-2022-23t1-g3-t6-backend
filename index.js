exports.handler = async event => {
  const response = {
      statusCode: 200,
      body: JSON.stringify("hello from your CS301 team"),
  };
  
  return response;
}