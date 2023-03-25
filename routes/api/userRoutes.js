const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createNewUser,
  updateUser
} = require("../../controllers/userController");

router
  .route("/")
  .get(getUsers)
  .post(createNewUser);

router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)

module.exports = router;
