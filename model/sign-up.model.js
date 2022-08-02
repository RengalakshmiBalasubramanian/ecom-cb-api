const mongoose = require('mongoose')

const SignUpModel = mongoose.Schema({
    
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

    password:{
        type:String,
        required: true
    },
    
    confirmpassword:{
        type:String,
        required: true
    }

})
module.exports = mongoose.model('signup',SignUpModel)