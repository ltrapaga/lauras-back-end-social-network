const connection = require("../config/connection");
const User = require("../models/User");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.collection.insertOne({
    username: "tmaureen",
    email: "tmaureen@gmail.com",
  });
  console.log("Success");
});
