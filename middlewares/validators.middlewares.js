const { body, validationResult } = require('express-validator');

const { AppError } = require('../utils/appError');

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Array has errors
    const errorMsgs = errors.array().map(err => err.msg);

    const message = errorMsgs.join('. ');

    return next(new AppError(message, 400));
  }

  next();
};

const createClientValidators = [
  body('fname').notEmpty().withMessage('FName cannot be empty'),
  body('lname').notEmpty().withMessage('LName cannot be empty'),
  body('address').notEmpty().withMessage('Address cannot be empty'),
  body('birthdate')
    .notEmpty()
    .withMessage('Birthdate cannot be empty')
    .isDate()
    .withMessage('Must provide a valid date'),
  checkResult,
];

module.exports = {
  createClientValidators,
};
