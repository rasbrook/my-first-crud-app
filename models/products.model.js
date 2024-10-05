const mongoose = require('mongoose')


const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter a product"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0

        },
        price: {
            type: Number,
            required: true,
            default: 0

        },
        image: {
            type: String,
            required: false
        },
        created_on:{
            type:String,
            required:true,
            default:new Date()
        }

    },
    {
        Timestamps: true
    }
)

const Product =mongoose.model('Product', ProductSchema)

module.exports=Product