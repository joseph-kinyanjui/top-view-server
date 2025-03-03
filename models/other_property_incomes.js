const mongoose = require('mongoose');

const OtherPropertyIncomesSchema = new mongoose.Schema({
    property_id: {
        type: String,
        required: true
    },
    property_name: {
        type: String,
        required: true
    },
    payment_date: {
        type: String,
        required: true
    },
    income_name: {
        type: String,
        required: true
    },
    income_amount: {
        type: Number,
        required: true
    }
    
});

const OtherPropertyIncomes = mongoose.model('other_property_incomes', OtherPropertyIncomesSchema);

module.exports = OtherPropertyIncomes;
