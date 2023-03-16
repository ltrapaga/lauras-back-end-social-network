const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        // Regular expression to validate email format
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject
    toJSON: {
        // Set virtuals to true so they will be included with response, overriding the default behavior
      virtuals: true,
    },
    id: false,
  }
);

// Virtual property "friendCount" that retrieves the length of the user's `friends` array field on query
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize User model
const User = model("user", userSchema);

module.exports = User;
