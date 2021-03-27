const router = require("express").Router();
const GoalsController = require("../../controllers/goalsController");

// Matches with "/api/Goals"
router.route("/")
  .get(GoalsController.findAll)
  .post(GoalsController.create);

// Matches with "/api/Goals/:id"
router.route("/:id")
  .get(GoalsController.findById)
  .put(GoalsController.update)
  .delete(GoalsController.remove);

router.route("/:id/step")
  .put(GoalsController.updateStep);

module.exports = router;
