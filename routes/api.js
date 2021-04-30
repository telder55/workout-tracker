const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((body) => {
      res.json(body);
      console.log(body);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/workouts", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
