const express = require("express");
const db = require("../models/index.js");

const router = express.Router();

// get last workout
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    // .then(({ _id }) =>
    //   db.Workout.findOneAndUpdate(
    //     { body },
    //     { $push: { exercise: _id } },
    //     { new: true }
    //   )
    // )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/workouts/:id", ({ body }, res) => {
  db.Workout.findOneAndUpdate(
    { body },
    { $push: { exercise: body } },
    { new: true }
  )

    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.get("/populated", (req, res) => {
//   db.Workout.find({})
//     .populate("workouts")
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;
