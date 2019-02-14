const router = require("express").Router();
const passport = require("passport");
const usersController = require("../../controllers/usersController");

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.redirect(200, "/home");
});

router.route("/createUser")
  .post(usersController.createUser);

module.exports = router;