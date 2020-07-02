var express = require('express');
const bodyparser = require('body-parser');
var router = express.Router();
var Buyers = require('../models/buyerSchema');

router.use(bodyparser.json());

/* GET users listing. */
router.get('/', (req, res, next) => {
    Buyers.find({})
        .then((buyers) => {
            res.statusCode = 200;
            res.setHeader('content-type', 'applicatio/json');
            res.json(buyers);
        });
});

router.post('/login', (req, res, next) => {
    Buyers.findOne({ email: req.body.email })
        .then((buyer) => {
            console.log(buyer);
            if (buyer) {
                res.statusCode = 200;
                res.setHeader('content-type', 'applicatio/json');
                res.json({ status: 'You are logged in!' });
                return;
            } else {
                Buyers.create(req.body)
                    .then((buyer) => {
                        console.log('buyer created');
                        res.statusCode = 200;
                        res.setHeader('content-type', 'application/json');
                        res.json(buyer);
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