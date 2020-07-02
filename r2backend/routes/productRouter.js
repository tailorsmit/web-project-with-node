const express = require('express');
const bodyparser = require('body-parser');
const ProductRouter = express.Router();
const mongoose = require('mongoose');
const Products = require('../models//productSchema');

ProductRouter.use(bodyparser.json());

ProductRouter.route('/')
    .get((req, res, next) => {
        Products.find({})
            .then((productlist) => {
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json(productlist);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Products.create(req.body)
            .then((product) => {
                console.log('product created');
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json(product);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        Products.find(req.body)
            .then((productlist) => {
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json(productlist);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Products.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


ProductRouter.route('/:productId')
    .get((req, res, next) => {
        Products.findById(req.params.productId)
            .then((product) => {
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json(product);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("post operstion not supported");

    })
    .put((req, res, next) => {
        Products.findByIdAndUpdate(req.params.productId, {
                $set: req.body
            }, { new: true })
            .then((productlist) => {
                console.log(req.body);
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json(productlist);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Products.findByIdAndRemove(req.params.productId)
            .then((productlist) => {
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json(productlist);
            }, (err) => next(err))
            .catch((err) => next(err));
    });



module.exports = ProductRouter;