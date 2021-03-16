const router = require("express").Router();
const goalRoutes = require("./goals");
const usersRoutes = require("./users");

// Goals routes
router.use("/goals", goalRoutes);
router.use("/register", usersRoutes);

module.exports = router;
