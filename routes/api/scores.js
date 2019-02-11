const router = require("express").Router();
const scoresController = require("../../controllers/scoresController");

router.route("/")
  .get(scoresController.findAll)
  .post(scoresController.create);

router.route("/scores/:game")
  .get(scoresController.findAllByGame);

router.route("/:id")
  .get(scoresController.findById)
  .put(scoresController.update)
  .delete(scoresController.remove);

module.exports = router;
