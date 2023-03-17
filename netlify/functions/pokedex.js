const fetch = require("node-fetch");

exports.handler = async function () {
  const POKE_API = "https://pokeapi.co/api/v2/pokemon";

  try {
    const response = await fetch(POKE_API);
    const data = await response.json();
    const json = JSON.stringify(data);

    return {
      statusCode: 200,
      body: json,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
