
const express = require('express')

express.json()

const Product = require('../models/products.model')









const get_all_Product = async (req, res) => {
    try {


        let pro = await Product.find({}, { "name": 1, "_id": 0 , "price":1});




        res.status(200).json(pro)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }

};


const get_product_by_id = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
};



const get_product_by_name = async (req, res) => {
    try {
        const { name } = req.params;
        console.log(name)
        const product = await Product.find({ "name": name })
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
};


const get_product_by_price = async (req, res) => {
    try {


        const price = req.params.price
        console.log(price)
        if (price === 0) {
            res.status(200).send('no such item with this price')

        }
        else {
            const product = await Product.find({ "price": price })
            res.status(200).json(product)
        }

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
};



const postProduct = async (req, res) => {
    try {
        const product = req.body
        if (!product) {
            res.status(400).send('please fill the form correctly')
        }
        else {
            const pro = await Product.create(req.body)
            res.status(201).json(pro)
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })

    }
};




const update_product_by_Id = async (req, res) => {
    try {

        const { id } = req.params

        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            res.status(404).send('product not found')
        }
        else {
            res.status(200).json(product)
        }

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}


const delete_product_by_id = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const product = await Product.findByIdAndDelete(id, req.body)
        if (!product) {
            res.status(404).send('No such product')
        }
        else {
            res.status(200).send('successfully deleted')
        }


    } catch (error) {
        res.status(500).json({ message: message.error })

    }

}


module.exports = {
    postProduct,
    get_all_Product,
    get_product_by_id,
    get_product_by_name,
    get_product_by_price,
    update_product_by_Id,
    delete_product_by_id
}