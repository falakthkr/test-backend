const Post = require("../../models/blogs-app/posts")

const getAllPosts = (req, res) => {
    Post.find()
        .then((posts => res.json(posts)))
        .catch((err) => res.status(400).json("Error:" + err))
}

const getPostDetails = (req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
            res.json(post);
        })
        .then(() => res.json("Fetched Post Data Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
}

const createPost = (req, res) => {
    const { title, postBody } = req.body;
    const newPost = new Post({ title, postBody })

    newPost
        .save()
        .then(() => res.json("Post created Successfully!"))
        .catch((err) => res.status(400).json("Error:" + err))
}

module.exports = { getAllPosts, getPostDetails, createPost }