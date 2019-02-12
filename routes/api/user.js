const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/login")
  .get(usersController.findAll)
  .post(usersController.create);
