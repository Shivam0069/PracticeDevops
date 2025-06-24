const express = require("express");

const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.post("/logout", authMiddleware.authUser, userController.logoutUser);

router.get("/profile", authMiddleware.authUser, (req, res, next) => {
  res.status(200).json(req.user);
});

module.exports = router;
