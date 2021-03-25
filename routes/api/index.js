const router = require("express").Router();
const goalRoutes = require("./goals");
const usersRoutes = require("./users");
const authRoutes = require("../authentication")

// Goals routes
router.use("/api/goals", goalRoutes);
router.use("/api/user", usersRoutes);
router.use("/auth", authRoutes);

module.exports = router;
