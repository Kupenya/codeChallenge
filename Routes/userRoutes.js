const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create a new user
router.post("/", userController.createUser);

// Retrieve a list of users
router.get("/", userController.getUsers);

// Retrieve a user by ID
router.get("/:id", userController.getUserById);

// Update a user by ID
router.put("/:id", userController.updateUserById);

// Delete a user by ID
router.delete("/:id", userController.deleteUserById);

module.exports = router;
