const mongoose = require('mongoose');

const ExtraPropertyStatementsSchema = new mongoose.Schema({
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
    income_name:{
        type: String
    },
    income_amount:{
        type: String
    },
    income_id:{
        type: String
    },
    income_list: {
        type: Array
    },
    Expense_list: {
        type: Array
    }
    
});

const ExtraPropertiesStatements = mongoose.model('extra_property_statements', ExtraPropertyStatementsSchema);

module.exports = ExtraPropertiesStatements;
