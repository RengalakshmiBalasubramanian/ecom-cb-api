const mongoose = require('mongoose')

const ContactModel = mongoose.Schema({
    
    name:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    message:{
        type:String,
        required: true,
        unique: true
    }
})
module.exports = mongoose.model('contact',ContactModel)