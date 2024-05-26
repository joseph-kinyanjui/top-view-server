require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const propertiesStatementsRoutes = require('./routes/propertiesStatementsRoutes');
const propertiesRoutes = require('./routes/propertiesRoutes');
const tenantsStatementsRoutes = require('./routes/tenantsStatementsRoutes');
const tenantsRoutes = require('./routes/tenantsRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/properties/statements', propertiesStatementsRoutes);
app.use('/api/properties', propertiesRoutes);
app.use('/api/tenants/statements', tenantsStatementsRoutes);
app.use('/api/tenants', tenantsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});