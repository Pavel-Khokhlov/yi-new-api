const mongoose = require('mongoose');

const {
  IncorrectEmailError,
} = require('../utils/Errors');

const SubscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'E-mail is required'],
  },
});

SubscriberSchema.statics.findSubscriberByCredentials = function (email) {
  return this.findOne({ email })
    .then((subscriber) => {
      if (!subscriber) {
        throw IncorrectEmailError();
      }
      return subscriber;
    });
};

module.exports = mongoose.model('subscriber', SubscriberSchema);
