const express = require("express")
const router = express.Router()
const { getAllPosts, getPostDetails, createPost, updatePost, deletePost } = require("../controllers/blogs-app/posts")

router.get("/cards", getAllPosts);
router.get("/cards/:id", getPostDetails);
router.post("/cards", createPost);
router.patch("/cards/:id", updatePost);
router.delete("/cards/:id", deletePost);

module.exports = router;