const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  string: {
    type: String,
    trim: true,
    required: "String is Required",
  },

  // string: {
  //   type: String,
  //   trim: true,
  //   required: "String is Required",
  // },

  // number: {
  //   type: Number,
  //   unique: true,
  //   required: true,
  // },

  // number: {
  //   type: Number,
  //   unique: true,
  //   required: true,
  // },

  // number: {
  //   type: Number,
  //   unique: true,
  //   required: true,
  // },

  // number: {
  //   type: Number,
  //   unique: true,
  //   required: true,
  // },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
