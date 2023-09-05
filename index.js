const express = require("express");
const bodyParser = require("body-parser");

// let { contacts } = require('./data/contacts');
// let { products } = require('./data/products');
// let { vehicles } = require('./data/vehicles');

const commentRouter = require('./routers/comments')
const app = express();

const port = process.env.PORT || 4001;



app.use(express.static('public'))
.use('/comments', commentRouter)


app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});
