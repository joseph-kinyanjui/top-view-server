const mongoose = require('mongoose');

const OtherPropertyStatementsSchema = new mongoose.Schema({
    property_id: {
        type: String,
        required: true
    },
    property_name: {
        type: String,
        required: true
    },
    total_rent_collected_per_property: {
        type: Number,
        required: true
    },
    total_arrears_per_property: {      
        type:Number,                                        
        required: true
    },
    commision: {
        type: Number,
        required: true
    },
    payment_date: {
        type: String,
        required: true
    },
    deposit_date: {
        type: String
    },
    income_list: {
        type: Array
    },
    Expense_list: {
        type: Array
    }
    
});

const OtherPropertyStatements = mongoose.model('other_property_statements', OtherPropertyStatementsSchema);

module.exports = OtherPropertyStatements;
