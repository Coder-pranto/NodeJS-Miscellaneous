const { check } = require('express-validator');

exports.inputRegistrationValidator = [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('Name is empty')
    .isLength({ min: 4 })
    .withMessage('must be at least 4 chars long')
    .isLength({ max: 20 })
    .withMessage('name can have maximum 20 characters'),
  check('email')
    .trim()
    .notEmpty()
    .withMessage('Email is empty')
    .isEmail()
    .withMessage('Invalid Email!'),
  check('password')
    .trim()
    .notEmpty()
    .withMessage('password field is empty')
    .isLength({ min: 5 })
    .withMessage('must be at least 5 chars long')
    .isLength({ max: 20 })
    .withMessage('password can have maximum 20 characters'),
  check('dob')
    .trim()
    .notEmpty()
    .withMessage('date of birth is missing')
    .isISO8601()
    .isDate()
    .withMessage('Not a valid Date of Birth'),
];

exports.inputLoginValidator = [
  check('email')
    .trim()
    .notEmpty()
    .withMessage('Email is empty')
    .isEmail()
    .withMessage('Invalid Email!'),
  check('password')
    .trim()
    .notEmpty()
    .withMessage('password field is empty')
    .isLength({ min: 5 })
    .withMessage('must be at least 5 chars long')
    .isLength({ max: 20 })
    .withMessage('password can have maximum 20 characters'),
];
