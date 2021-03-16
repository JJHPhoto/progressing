const router = require("express").Router();
const RegistrationController = require("../../controllers/registrationController");

// Matches with "/api/Users"
router
  .route("/")
  .get(RegistrationController.findAll)
  .post(RegistrationController.create);

// Matches with "/api/Users/:id"
router
  .route("/:id")
  .get(RegistrationController.findById)
  .put(RegistrationController.update)
  .delete(RegistrationController.remove);

module.exports = router;
