const express = require("express");
const router = express.Router();
const { userList, findUser } = require("../controllers/userController");

router.route("/").get(userList);
router.route("/:name").get(findUser);

module.exports = router;
