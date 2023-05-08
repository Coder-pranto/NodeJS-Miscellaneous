const Joi = require('joi');

exports.schemas = {
    registerSchema:Joi.object({
       name: Joi.string().min(3).max(25).required(),
       email: Joi.string().email().required(),
       password: Joi.string().min(6).max(10).required(),
       confirmPassword: Joi.ref("password"),
       age: Joi.number().required(),
       dob: Joi.date().greater(new Date('1990-01-01')).required(),
       languages: Joi.array().items(Joi.string()).required(),

    }),
    loginSchema:Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(10).required()
    })
}