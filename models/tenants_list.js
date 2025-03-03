const mongoose = require('mongoose');

const TenantListSchema = new mongoose.Schema({
    property_id: {
        type: String,
        required: true
    },
    house_id:{
        type: String,
        required: true
    },
    house_number:{
        type: String,
        required: true
    },
    rent_rate: {
        type: String,
        required: true
    },
    tenant_name: {
        type: String,
        required: true
    },
    tenant_id:{
        type: String,
        required: true
    },
    tenant_contact: {
        type: String,
        required: true
    },
    alternative_tenant_contact: {
        type: String,
        required: true
    },
    tenant_deposit: {
        type: String,
        required: true
    },
    tenant_status: {
        type: String,
        required: true
    },
    tenant_date_created:{
        type: String
    },
    tenant_date_terminated:{
        type: String
    },

});

const TenantsList = mongoose.model('tenants_list', TenantListSchema);

module.exports = TenantsList ;
