const router = require("express").Router();
const passport = require("passport");
const scoreRoutes = require("./scores");
const userRoutes = require("./users");


router.use("/scores", scoreRoutes);
router.use("/users", userRoutes);

module.exports = router;
