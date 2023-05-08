const express = require('express');
const router = express.Router();
const {inputRegistrationValidator, inputLoginValidator,} = require('../validation/rules');
const { runInputValidation } = require('../validation/runner');
const { userRegistration, userLogin } = require('../controller/controllerfns');

router.post(
  '/register',
  //input validation
  inputRegistrationValidator,
  runInputValidation,
  userRegistration
);

router.post(
  '/login',
  //input validation
  inputLoginValidator,
  runInputValidation,
  userLogin
);

module.exports = router;
