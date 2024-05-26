const mongoose = require('mongoose');

const TenantsStatememtsSchema= new mongoose.Schema({
    property_name: {
        type: String,
        required: true
    },
    property_id: {
        type: String,
        required: true
    },
    hse_number: {
        type: String,
        required: true
    },
    tenant_name: {
        type: String,
        required: true
    },
    payment_date: {
        type: String,
        required: true
    },
    house_rate: {
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
    },
    contact: {
        type: String,
        required: true
    },
    months_rent_status: {
        type: String,
        required: true
    },
    tenant_id: {
        type: String,
        required: true
    }
    
});

const TenantsStatements = mongoose.model('tenants_statements', TenantsStatememtsSchema);

module.exports = TenantsStatements;
