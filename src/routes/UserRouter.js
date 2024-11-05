const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const { autMiddleware } = require("../middleware/authMiddleWare");

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id", autMiddleware, userController.deleteUser);
router.get("/getAllUsers", autMiddleware, userController.getAllUsers);
router.get("/detailUser/:id", userController.getDetailUser);
module.exports = router;
