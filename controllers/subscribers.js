const Subscriber = require('../models/subscriber');

const {
  EmailExistsError,
} = require('../utils/Errors');

module.exports.createSubscriber = (req, res, next) => {
  const { name, email } = req.body;
  Subscriber.findOne({ email })
    .then((subscriber) => {
      if (subscriber) {
        throw EmailExistsError(email);
      }
    })
    .then(() => Subscriber.create({
      name,
      email,
    }))
    .then((subscriber) => {
      res.send(subscriber);
    })
    .catch(next);
};
