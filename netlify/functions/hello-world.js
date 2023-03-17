exports.handler = async function () {
  const json = JSON.stringify("Hello, World");

  return {
    statusCode: 200,
    body: json,
  };
};
