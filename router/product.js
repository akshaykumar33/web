const router = require('express').Router();
const ErrorHandler = require('../error/ErrorHandler');
let products = require('../productData');
const middlewares=require('../middlewares/apiKey');

// GET all products
router.get('/product',middlewares, (req, res) => {
    res.json(products);
});

// POST a new product
router.post('/product', (req, res,next) => {
    const { name, price } = req.body;
    if (!name || !price) {
       // return res.status(422).json({ error: "All fields are required" });
       next(ErrorHandler.validationError());
    }
    const product = {
        _id: new Date().getTime().toString(),
        name,
        price
    };
    products.push(product);
    res.json(product);
});

// PUT (update) a product
router.put('/product/:productId', (req, res,next) => {
    const { name, price } = req.body;
    if (!name || !price) {
        // return res.status(422).json({ error: "All fields are required" });
        next(ErrorHandler.validationError());
    }
    const productId = req.params.productId;
    const index = products.findIndex(product => product._id === productId);
    if (index !== -1) {
        products[index] = { ...products[index], name, price };
        return res.json({ status: 'OK' });
    }
    //return res.status(404).json({ error: 'Product not found' });
    next(ErrorHandler.notFoundError('Product not found'));
});

// PATCH (partially update) a product
router.patch('/product/:productId', (req, res) => {
    const { name } = req.body;
    if (!name) {
        //return res.status(422).json({ error: "Field Missing" });
        next(ErrorHandler.notFoundError('Field Missing'));
    }
    const productId = req.params.productId;
    const index = products.findIndex(product => product._id === productId);
    if (index !== -1) {
        products[index].name = name;
        return res.json({ status: 'OK' });
    }
    //return res.status(404).json({ error: 'Product not found' });
    next(ErrorHandler.notFoundError('Product not found'));

});

// DELETE a product
router.delete('/product/:productId', (req, res) => {
    const productId = req.params.productId;
    products = products.filter(product => product._id !== productId);
    res.json({ status: 'OK' });
});

module.exports = router;
