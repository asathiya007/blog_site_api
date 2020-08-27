const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    }, 
    body: {
        type: String
    }
}); 

module.exports = Post = mongoose.model('post', PostSchema);