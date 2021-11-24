const { any } = require("joi")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    authorName: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.ObjectId,
        required: true
    },
    lastChanged: {
        type: Date,
        default: Date.now,
    }
}, {
    versionKey: false
})

module.exports = mongoose.model("Post", postSchema)