const express = require('express')
const product = require('./controllers/product')

const app = express()
const port = 3000

//Para habilitar envio de JSON al servidor
app.use(express.json()); 

// app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', (req, res) => {
  res.send('Mi home de productos')
})

// app.get('/things/:name/:id', (req, res) => {
//     console.log('*********************');
//     console.log(req.params);
//     res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
//  });

app.get('/products/:id?', product.getProduct);
app.post('/products', product.createProduct);

app.get('/first_template', (req, res) => {
    const number =  Math.floor(Math.random() * (7 - 1) + 1);
    res.render('first_view', {name: 'gustavo', number});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})