const mongoose = require('mongoose');

const TerminatedTenantSchema = new mongoose.Schema({
    property_name: {
        type: String,
        required: true
    },
    property_id:{
        type: String,
        required: true
    },
    tenant_id:{
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
    house_rate: {
        type: Number,
        required: true
    },
    rent_paid_for_current_month: {
        type: Boolean,
        required: true
    },
    deposit_held: {
        type: Number,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    alternative_contact: {
        type: String,
        required: true
    },
    id_number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
    
});

const TerminatedTenants = mongoose.model('terminated_tenants', TerminatedTenantSchema);

module.exports = TerminatedTenants ;
