// requiring external packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// making the model to create the data base
const WorkoutSchema = new Schema({
  day: { type: Date, default: new Date() },
  exercises: [
    {
      type: { type: String, required: true },
      name: { type: String, required: true },
      duration: { type: Number, required: true },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
});

// converting the model to a mongoose model
const Workout = mongoose.model("Workout", WorkoutSchema);

// exporting the function
module.exports = Workout;
