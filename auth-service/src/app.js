const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

const PORT = 5000;

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Auth Service is live on port ${PORT}`));
}).catch(err => {
  console.error('Database connection failed:', err);
});