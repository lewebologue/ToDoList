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
    isDone:{
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('List', ListModel);