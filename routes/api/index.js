const router = require("express").Router();
const scoreRoutes = require("./scores");
const userRoutes = require("./user");

router.use("/scores", scoreRoutes);
router.use("/user", userRoutes);

module.exports = router;
