const routes = require('express').Router();
const product = require('../controllers/product');
const hasApiKey = require('../middlewares/hasApiKey');
//////////////////////////////// RUTAS PARA LA WEB

routes.get('/products/:id?', product.getProduct);
routes.post('/products', hasApiKey, product.createProduct);

module.exports = routes;