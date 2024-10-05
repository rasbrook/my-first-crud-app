const express = require("express")
const route = express.Router()
const {Product} = require('../models/products.model')


const { get_all_Product, get_product_by_id, get_product_by_name, get_product_by_price, update_product_by_Id, delete_product_by_id , postProduct } = require('../controller/product.controller.js')





route.get('/', get_all_Product)

route.get('/id/:id', get_product_by_id)

route.get('/name/:name', get_product_by_name)

route.get('/price/:price', get_product_by_price)

route.post('/' , postProduct)

route.put("/id/:id", update_product_by_Id)

route.delete("/id/:id", delete_product_by_id)





module.exports=route