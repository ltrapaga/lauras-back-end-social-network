const { Schema, model, Types} = require("mongoose");
// const reactionSchema = require("./Reaction");
const dateFormat = require("date-and-time");

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
// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (v) => dateFormat.format(v, "MMM DD YYYY [at] HH:mm"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject
    toJSON: {
      // Set virtuals and getters to true so they will be included with response, overriding the default behavior
      virtuals: true,
      getters: true,
      versionKey: false,
    },
    id: false,
  }
);

// Virtual property "reactionCount" that retrieves the length of the thought's `reactions` array field on query
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
