const express = require("express");
const router = express.Router();
const suggestionController = require("../controllers/suggestionController");

// Route for auto-complete suggestions
router.get("/suggestions", suggestionController.getSuggestions);

module.exports = router;
