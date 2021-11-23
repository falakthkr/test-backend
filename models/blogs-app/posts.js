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
}, {
    versionKey: false
})

module.exports = mongoose.model("Post", postSchema)