const router = require("express").Router();
const path = require("path");

// router.get("/", function (req, res) {
//   res.send();
// });

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
// app.get("/tables", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/tables.html"));
// });

module.exports = router;
