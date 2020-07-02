var express = require('express');
const bodyparser = require('body-parser');
var router = express.Router();
var Sellers = require('../models/sellerSchema');

router.use(bodyparser.json());

/* GET users listing. */
router.get('/', (req, res, next) => {
    Sellers.find({})
        .then((sellers) => {
            res.statusCode = 200;
            res.setHeader('content-type', 'applicatio/json');
            res.json(sellers);
        });
});

router.post('/login', (req, res, next) => {
    Sellers.findOne({ email: req.body.email })
        .then((seller) => {
            console.log('seller ' + seller);
            if (seller) {
                res.statusCode = 200;
                res.setHeader('content-type', 'applicatio/json');
                res.json({ status: 'You are logged in!' });
                return;
            } else {
                Sellers.create(req.body)
                    .then((seller) => {
                        console.log('seller created');
                        res.statusCode = 200;
                        res.setHeader('content-type', 'application/json');
                        res.json(seller);
                    }, (err) => next(err))
                    .catch((err) => next(err));
            }
            return;
        }).catch((err) => next(err));
});

router.get('/logout', (req, res) => {
    if (!err) {
        res.statusCode = 200;
        res.setHeader('content-type', 'applicatio/json');
        res.json({ status: 'logged out' });
    } else {
        var err = new Error('you are not logged in');
        err.status = 403;
        next(err);
    }
});
module.exports = router;