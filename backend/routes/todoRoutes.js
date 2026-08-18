const express = require("express");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/todos", protect, (req, res) => {
  res.json([
    { id: 1, task: "Learn React", userId: req.user.id },
    { id: 2, task: "Build MERN project", userId: req.user.id }
  ]);
});

module.exports = router;
