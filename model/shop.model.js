const mongoose = require('mongoose')

const ShopDataModel = mongoose.Schema(
    {
        id:{
            type:String,
            required: true
        },
        title:{
            type:String,
            required: true
        },
        routeName:{
            type:String,
            required: true
        },
          
        items:{
            type:Array,
            required: true
},
    }
         
);
    
module.exports = mongoose.model('shop',ShopDataModel)
    