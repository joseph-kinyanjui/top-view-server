const mongoose = require('mongoose');

const PropertyDeductionsIncomesSchema = new mongoose.Schema({
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
    expense_name: {
        type: String,
        required: true
    },
    expense_amount: {
        type: Number,
        required: true
    }
    
});

const PropertyIncomeDeductions = mongoose.model('property_income_deductions', PropertyDeductionsIncomesSchema);

module.exports = PropertyIncomeDeductions;
