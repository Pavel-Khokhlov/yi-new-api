require('dotenv').config();

const rateLimit = require('express-rate-limit');

const { PORT = 3000 } = process.env;
const { DB_MONGO = 'mongodb://localhost:27017/yidb' } = process.env;

module.exports = {
  PORT,
  DB_MONGO,
};

module.exports.Options = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports.Limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
