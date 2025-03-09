const { Schema, model } = require('../connection');

const mySchema = new Schema({
    P_name: String,
    P_model: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('product', mySchema);