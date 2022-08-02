const mongoose = require('mongoose')

const ContactModel = mongoose.Schema({
    
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