const mongoose = require('mongoose');

const ListModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('List', ListModel);