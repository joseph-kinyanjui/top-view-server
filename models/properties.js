const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    landlord_name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    property_name: {
        type: String,
        required: true
    },
    property_location: {
        type: String,
        required: true
    },
    payment_mode: {
        type: String,
        required: true
    },
    payment_date: {
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
        type: Number,
        required: true
    },
    water_meter: {
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
    property_commission_rate: {
        type: Number,
        required: true
    }
    
});

const Properties = mongoose.model('properties', PropertySchema);

module.exports = Properties;
