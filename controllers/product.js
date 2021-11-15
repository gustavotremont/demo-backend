const data = require('../models/product') // Leer datos
// console.log(data) //lee el array de datos

const getProduct = (req, res) => {
    console.log('**********************');
    console.log(req.params);

    // Consulta
    // Los datos
    // del producto correspondiente
    // ...
    // ...
    
    if (req.params.id) {
        res.status(200).render('product', {products:[data[req.params.id]]})
    } else {
        res.status(200).render('product',{products:data})
    }
}

createProduct = (req, res) => {
    console.log('**********************');
    console.log(req.body);
    res.status(201).send('nuevo producto creado')
}

const product = {
    getProduct,
    createProduct
}

module.exports = product;