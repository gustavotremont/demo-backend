// const data = require('../models/product') // Leer datos
const dataProduct = require('../utils/product')

const getProduct = async (req, res) => {
    let data;    
    if (req.params.id) {
        data = await dataProduct.getProductById(req.params.id)
        res.status(200).json(data)
    } else {
        data = await dataProduct.getAllProducts()
        res.status(200).json({products:data})
    }
}

createProduct = async (req, res) => {
    const result = await dataProduct.createProduct(req.body)
    console.log('NUevo producto!!!!!!!!!!!!!!!!!!!!!!!!!!******');
    console.log(result);
    res.status(201).send('nuevo producto creado')
}

const product = {
    getProduct,
    createProduct
}

module.exports = product;