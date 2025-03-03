require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const propertiesStatementsRoutes = require('./routes/propertiesStatementsRoutes');
const propertyHousesRoutes = require('./routes/propertyHousesRoutes');
const propertiesRoutes = require('./routes/propertiesRoutes');
const tenantsStatementsRoutes = require('./routes/tenantsStatementsRoutes');
const newTenantsStatements = require('./routes/newTenantsStatementsRoutes');
const tenantsRoutes = require('./routes/tenantsRoutes');
const tenantsListRoutes = require('./routes/tenantsListRoutes');
const terminatedTenantsRoutes = require('./routes/terminatedTenantsRoutes');
const otherPropertyStatementsRoutes = require('./routes/otherPropertyStatementsRoutes')
const extraPropertyStatementsRoutes = require('./routes/extraPropertyStatementsRoutes')
const otherPropertyIncomesRoutes = require('./routes/otherPropertyIncomes')
const propertyIncomeDeductionsRoutes = require('./routes/propertyIncomeDeductionsRoutes')

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
app.use('/api/properties/houses', propertyHousesRoutes);
app.use('/api/properties', propertiesRoutes);
app.use('/api/tenants/statements', tenantsStatementsRoutes);
app.use('/api/new_tenants_statements', newTenantsStatements)
app.use('/api/tenants', tenantsRoutes);
app.use('/api/tenants_list', tenantsListRoutes)
app.use('/api/terminated_tenants', terminatedTenantsRoutes);
app.use('/api/properties/other_statements', otherPropertyStatementsRoutes);
app.use('/api/property/extra_statements', extraPropertyStatementsRoutes);
app.use('/api/other_property_incomes', otherPropertyIncomesRoutes)
app.use('/api/property_income_deductions', propertyIncomeDeductionsRoutes)


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
