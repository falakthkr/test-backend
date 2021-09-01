const express = require("express")
const router = express.Router()
const { getUsers, addUser, deleteUser, updateUser, getUserDetails } = require("../controllers/users")

router.get("/", getUsers);
router.get("/:id", getUserDetails);
router.post("/add", addUser);
router.delete("/delete/:id", deleteUser);
router.patch("/update/:id", updateUser);

module.exports = router;