const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

// Start server only if DB is available
if (sequelize) {
  sequelize.sync()
    .then(() => {
      app.listen(PORT, () => console.log(`Auth Service live on port ${PORT}`));
    })
    .catch(err => console.error('Database sync failed:', err));
} else {
  console.warn('Database not configured; starting without DB.');
  app.listen(PORT, () => console.log(`Auth Service (no DB) on port ${PORT}`));
}