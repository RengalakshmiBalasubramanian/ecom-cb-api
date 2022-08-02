const mongoose = require('mongoose')

const SignInModel = mongoose.Schema({
        
    email:{
        type:String,
        required: true,
        unique: true
    },

    password:{
        type:String,
        required: true
    },
    
    
})
module.exports = mongoose.model('signin',SignInModel)