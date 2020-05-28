const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    subject:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Post', PostSchema);