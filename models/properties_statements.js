const mongoose = require('mongoose');

const PropertiesStatementsSchema = new mongoose.Schema({
    property_id: {
        type: String,
        required: true
    },
    property_name: {
        type: String,
        required: true
    },
    total_rent_collected: {
        type: Number,
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
    payment_mode: {
        type: String,
        required: true
    },
    bank_name: {
        type: String,
        required: true
    },
    account_number: {
        type: String,
        required: true
    },
    kplc_meter: {
        type: String,
        required: true
    },
    kplc_units: {
        type: String,
        required: true
    },
    kplc_amount: {
        type: String,
        required: true
    },
    water_amount: {
        type: Number,
        required: true
    },
    water_meter: {
        type: Number,
        required: true
    },
    water_units: {
        type: Number,
        required: true
    },
    mri_kra_pin: {
        type: String,
        required: true
    },
    mri_itax_pass: {
        type: String,
        required: true
    },
    mri_units: {
        type: Number,
        required: true
    },
    mri_amount: {
        type: Number,
        required: true
    }
    
});

const PropertiesStatements = mongoose.model('properties_statements', PropertiesStatementsSchema);

module.exports = PropertiesStatements;
