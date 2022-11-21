"use strict";

const { setTimeout } = require("timers/promises");

module.exports.hello = async (event) => {
  await setTimeout(5000);
  return {
    statusCode: 200,
    body: JSON.stringify({ result: "Response from lambda completed" }, null, 2),
  };
};
