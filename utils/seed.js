const connection = require("../config/connection");
const User = require("../models/User");
const Thought = require("../models/Thought");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.collection.insertOne({
    username: "terin",
    email: "terin@gmail.com",
  });

  await Thought.collection.insertOne({
    thoughtText: "These are my thoughts...",
    username: "tmaureen",
  });
  console.log("Successful thoughts");
});
