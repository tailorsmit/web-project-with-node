const mongoose = require('mongoose');
const schema = mongoose.Schema;

var BuyerSchema = new schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('buyer', BuyerSchema);