const router = require("express").Router();
const goalRoutes = require("./goals");

// Goals routes
router.use("/goals", goalRoutes);

module.exports = router;