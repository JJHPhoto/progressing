const router = require("express").Router();
const GoalsController = require("../../controllers/goalsController");

// Matches with "/api/Goalss"
router.route("/")
  .get(GoalsController.findAll)
  .post(GoalsController.create);

// Matches with "/api/Goalss/:id"
router
  .route("/:id")
  .get(GoalsController.findById)
  .put(GoalsController.update)
  .delete(GoalsController.remove);

module.exports = router;
