let products = require('../data/products');

const list = (req, res) => {
    console.log('test', products)
    res.send(products);
}

const show = (req, res) => {
    const product = products.find((product) => product._id === parseInt(req.params._id));
    res.send(product)
}

const create = (req, res) => {
    console.log('where da body', req.body)
    const newProduct = {
        ...req.body,
        _id: products.length + 1,
    };
    products.push(newProduct);
    res.json(newProduct)
}


module.exports = {list, show, create}
