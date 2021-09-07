const router = require('express').Router();
const auth = require('../middlewares/auth');

// const { validateCreateUser, validateUser } = require('../middlewares/validations');

/* const {
  createUser,
  login,
} = require('../controllers/users'); */

const subscriberRouter = require('./subscribers');
// const userRouter = require('./users');
// const itemRouter = require('./items');

router.use('/', subscriberRouter);
// router.post('/signup', validateCreateUser, createUser);
// router.post('/signin', validateUser, login);

router.use(auth);

// router.use('/users', userRouter);
// router.use('/items', itemRouter);

module.exports = router;
