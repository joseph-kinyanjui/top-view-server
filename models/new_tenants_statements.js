const mongoose = require('mongoose');

const  NewTenantsStatememtsSchema = new mongoose.Schema({
    property_name: {
        type: String,
        required: true
    },
    property_id: {
        type: String,
        required: true
    },
    tenant_name: {
        type: String,
        required: true
    },
    tenant_id: {
        type: String,
        required: true
    },
    tenant_status:{
        type: String,
        required: true
    },
    house_number: {
        type: String,
        required: true
    },
    payment_month: {
        type: String,
        required: true
    },
    month_number:{
        type: Number,
        required: true
    },
    rent_rate: {
        type: Number,
        required: true
    },
    rent_paid: {
        type: Number,
        required: true
    },
    arrears: {
        type: Number,
        required: true
    },
    arrears_bf: {
        type: Number,
        required: true
    },
    arrears_cf: {
        type: Number,
        required: true
    }

    
});

const NewTenantsStatements = mongoose.model('new_tenants_statements', NewTenantsStatememtsSchema);

module.exports = NewTenantsStatements;
