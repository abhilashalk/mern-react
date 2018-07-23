const router = require("express").Router();
const articleRoutes = require("./Article");

// Book routes
router.use("/article", articleRoutes);

module.exports = router;
