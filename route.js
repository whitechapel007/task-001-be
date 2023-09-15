const express = require("express");

const router = express.Router();

const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("./controllers");

router.route("/").post(createUser);

router.route("/:user_id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
