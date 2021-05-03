const router = require("express").Router();
const Workout = require("../models/workout.js");

// Create the initial workout with new ID, no data yet.
router.post("/workouts", (req, res) => {
  Workout.create({})
    .then((body) => {
      res.json(body);
      console.log(body);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Get total exercise duration
router.get("/workouts/", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((dbWorkoutDuration) => {
      res.json(dbWorkoutDuration);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Get workout range for stats page
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//find by the id and update
router.put("/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {
      $push: { exercises: body },
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
