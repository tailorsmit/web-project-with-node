const mongoose = require('mongoose');
const schema = mongoose.Schema;

var SellerSchema = new schema({
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
        required: true,
        unique: true
    }

});

module.exports = mongoose.model('seller', SellerSchema);