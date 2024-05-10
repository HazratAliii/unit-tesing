const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  isDone: {
    type: Boolean,
  },
});

const Todo = new model("Todo", todoSchema);
module.exports = Todo;
