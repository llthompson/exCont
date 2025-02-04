const express = require("express");
const bodyParser = require("body-parser");

// let { contacts } = require('./data/contacts');
// let { products } = require('./data/products');
// let { vehicles } = require('./data/vehicles');

const commentRouter = require('./routers/comments')
const contactRouter = require('./routers/contacts')
const productRouter = require('./routers/products')
const vehicleRouter = require('./routers/vehicles')
const app = express();

const port = process.env.PORT || 4001;


app.use(express.json());
app.use(express.static('public'))
.use('/comments', commentRouter)
.use('/contacts', contactRouter)
.use('/products', productRouter)
.use('/vehicles', vehicleRouter)


app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});
