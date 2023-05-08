const { validationResult } = require('express-validator');

exports.runInputValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array().map(err => err.msg);
      return res.status(400).json({ errors: errorMessage });
    }
    next();
  }
