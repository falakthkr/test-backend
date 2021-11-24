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
    const { title, postBody, image, authorName, authorId } = req.body;
    const newPost = new Post({ title, postBody, image, authorName, authorId })

    newPost
        .save()
        .then(() => res.json("Post created Successfully!"))
        .catch((err) => res.status(400).json("Error:" + err))
}

const updatePost = (req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
            if (req.body.postBody) {
                post.postBody = req.body.postBody;
            }
            if (req.body.title) {
                post.title = req.body.title;
            }
            if (req.body.image) {
                post.image = req.body.image;
            }
            if (req.body.authorName) {
                post.authorName = req.body.authorName;
            }
            if (req.body.authorId) {
                post.authorId = req.body.authorId;
            }
            post
                .save()
                .then(() => res.json("Post updated Successfully"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + res));
}

const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json("Post Deleted Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
}

module.exports = { getAllPosts, getPostDetails, createPost, updatePost, deletePost }