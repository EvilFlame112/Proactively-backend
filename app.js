const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const swaggerSetup = require('./config/swagger');

const authRoutes = require('./routes/authRoutes');
const speakerRoutes = require('./routes/speakerRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

swaggerSetup(app);

app.use('/auth', authRoutes);
app.use('/speakers', speakerRoutes);
app.use('/bookings', bookingRoutes);

sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.error('Failed to sync database:', err));

module.exports = app;
