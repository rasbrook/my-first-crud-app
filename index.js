const express = require('express')

const mongoose = require('mongoose')

const Product = require('./models/products.model.js')

const ProductRou=require('./httpreq/product.route.js')



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))




const url = 'mongodb+srv://sayless:test123@cluster1.f4d0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'

const url1 = "mongodb://beshaneh:test@cluster1-shard-00-00.f4d0n.mongodb.net:27017,cluster1-shard-00-01.f4d0n.mongodb.net:27017,cluster1-shard-00-02.f4d0n.mongodb.net:27017/?ssl=true&replicaSet=atlas-bemd91-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster1"






app.use('/products', ProductRou)

app.get('/', (req, res) => {
    res.send('Hello world')


})





mongoose.connect(url1).then(() => {
    console.log('Connected to the database')
    app.listen(3000, () => {
        console.log('server is listining on port 3000')
    })
}).catch((error) => {
    console.log(error)

})