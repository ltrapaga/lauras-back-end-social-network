const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser
} = require("../../controllers/userController");

// /api/users
router
  .route("/")
  .get(getUsers)
  .post(createNewUser);

// /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
