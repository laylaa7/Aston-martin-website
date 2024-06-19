const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const dataSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    snippet:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required: true
    }
}, {timestamps: true});

const User= mongoose.model('User', dataSchema);
module.exports= User;

