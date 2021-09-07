const router = require('express').Router();

const {
  createSubscriber,
} = require('../controllers/subscribers');

const { validateCreateSubscriber } = require('../middlewares/validations');

router.post('/', validateCreateSubscriber, createSubscriber);

module.exports = router;
