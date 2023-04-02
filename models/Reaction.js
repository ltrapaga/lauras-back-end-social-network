const { Schema, Types } = require("mongoose");
const dateFormat = require("date-and-time");

// Create subdocument schema to be used in Thought model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (v) => dateFormat.format(v, "MMM DD YYYY [at] HH:mm"),
    },
  },
  {
    toJSON: {
      // Set getters to true so they will be included with response, overriding the default behavior
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
