const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/login")
  .get(usersController.findAll);

router.route("/signup")
  .post(usersController.create);
