const mongoose = require('mongoose');
const schema = mongoose.Schema;



var ProductSchema = new schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        min: 0
    },
    specification: {
        type: String,
        required: true
    },
    sellername: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('product', ProductSchema);