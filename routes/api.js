
// Dependencies
var express = require('express');
var router = express.Router();

// router.get('/',function(req,res){

// 	res.send("working");
// });

// Models
var Product = require('../models/product');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');



// Return router
module.exports = router;
