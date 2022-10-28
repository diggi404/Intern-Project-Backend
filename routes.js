const express = require("express");
const router = express.Router();
const { signupController } = require("./RouteControllers/signupControler");
const { loginController } = require("./RouteControllers/loginController");
const {
  addNewPlayer,
  getAllPlayers,
  editPlayer,
  deletePlayer,
} = require("./RouteControllers/PlayersController");
const { verifyToken } = require("./middleware/verifyToken");
const { logout } = require("./RouteControllers/logoutController");

router.route("/signup").post(signupController);

router.route("/login").post(loginController);

router.route("/logout").post(verifyToken, logout);

router.route("/add-new-player").post(verifyToken, addNewPlayer);

router.route("/get-players").get(verifyToken, getAllPlayers);

router.route("/edit-player/:id").put(verifyToken, editPlayer);

router.route("/delete-player/:id").put(verifyToken, deletePlayer);

module.exports = router;
