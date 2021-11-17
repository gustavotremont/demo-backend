const routes = require('express').Router();
const productApi = require('../controllers/productApi');
const hasApiKey = require('../middlewares/hasApiKey');
//////////////////////////////// RUTAS PARA LA WEB

routes.get('/products/:id?', productApi.getProduct);
routes.post('/products', hasApiKey, productApi.createProduct);

module.exports = routes;