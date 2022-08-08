const mongoose = require('mongoose')

const Products = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        imageUrl: {
            type: String,
            required: true
        },

        id: {
            type: String,
            required: true
        },
        linkUrl: {
            type: String,
            required: true
        }
    })


module.exports = mongoose.model('product', Products)

