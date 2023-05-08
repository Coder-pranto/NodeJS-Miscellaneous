const express = require('express');
const { userLogin, userRegistration } = require('../controller/controllerFns');
const { runValidation } = require('../validator/runner');
const { schemas } = require('../validator/schemas');
const router = express.Router();


router.post('/register',runValidation(schemas.registerSchema), userRegistration);


router.post('/login' ,runValidation(schemas.loginSchema), userLogin)

module.exports = router;