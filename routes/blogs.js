const express = require("express")
const router = express.Router()
const { getAllPosts, getPostDetails, createPost } = require("../controllers/blogs-app/posts")

router.get("/cards", getAllPosts);
router.get("/cards/:id", getPostDetails);
router.post("/cards", createPost);

module.exports = router;