const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    address: String,
    amount: Number,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Token', tokenSchema);
