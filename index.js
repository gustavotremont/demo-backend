const express = require('express');

const productRouter = require('./routes/product');
const productApiRouter = require('./routes/productApi');
const errors = require('./middlewares/errors');

const app = express();
const port = 3000;

//Para habilitar envio de JSON al servidor
app.use(express.json());
app.use(express.static('public'));

// app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', (req, res) => {
  res.send('Mi home de productos')
})

app.use('/', productRouter);
app.use('/api', productApiRouter);

//Capture All 404 errors
app.use(errors.error404);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})