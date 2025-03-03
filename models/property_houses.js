const mongoose = require('mongoose');

const PropertyHousesSchema = new mongoose.Schema({
    property_id: {
        type: String,
        required: true
    },
    house_number: {
        type: String,
        required: true
    },
    rent_rate: {
        type: Number,
        required: true
    },
    vacancy_status: {
        type: String,
        required: true
    }
});

const PropertiesHouses = mongoose.model('property_houses', PropertyHousesSchema);

module.exports = PropertiesHouses;
