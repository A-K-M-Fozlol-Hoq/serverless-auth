"use strict";
const mongoose = require("mongoose");
const {MONGO_CONNECTION_STRING}= require('./config')


module.exports.hello = async (event) => {
  const mongoose = require("mongoose");
  mongoose.connect(MONGO_CONNECTION_STRING, {  useNewUrlParser: true, useUnifiedTopology: true,});
// model = table structure
  const Cat = mongoose.model("Cat", { name: String });
//  create a new object
  const kitty = new Cat({ name: "kitty-two" });
 await  kitty.save();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        kitty
      },
      null,
      2
    ),
  };
};
