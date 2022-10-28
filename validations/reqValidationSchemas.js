const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "email should be a string",
    "string.empty": "email cannot be empty",
    "string.email": "email is not valid",
    "any.required": "email is a required field",
  }),
  password: Joi.string().min(8).max(35).required().messages({
    "string.base": "password should be a string",
    "string.empty": "password cannot be empty",
    "string.min": "password should have a minimum of 8 characters",
    "string.max": "password should have a maxinmum of 35 characters",
    "any.required": "password is a required field",
  }),
});

const signupSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "name should be a string",
    "string.empty": "name cannot be empty",
    "any.required": "name is a required field",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "email should be a string",
    "string.empty": "email cannot be empty",
    "string.email": "email is not valid",
    "any.required": "email is a required field",
  }),
  password: Joi.string().min(8).max(35).required().messages({
    "string.base": "password should be a string",
    "string.empty": "password cannot be empty",
    "string.min": "password should have a minimum of 8 characters",
    "string.max": "password should have a maxinmum of 35 characters",
    "any.required": "password is a required field",
  }),
  confirm_password: Joi.ref("password"),
});

const addNewPlayerSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "name should be a string",
    "string.empty": "name cannot be empty",
    "any.required": "name is a required field",
  }),
  age: Joi.number().integer().min(20).max(45).required().messages({
    "number.base": "age should be an integer",
    "number.empty": "age cannot be empty",
    "any.required": "age is a required field",
    "number.min": "Sorry minimum age is supposed to be 20",
    "number.max": "age cannot be more than 45",
  }),
  position: Joi.string().required().messages({
    "string.base": "position should be a string",
    "string.empty": "position cannot be empty",
    "any.required": "position is a required field",
  }),
});

const editPlayerSchema = Joi.object({
  name: Joi.string().messages({
    "string.base": "name should be a string",
    "string.empty": "name cannot be empty",
  }),
  age: Joi.number().integer().min(20).max(45).messages({
    "number.base": "age should be an integer",
    "number.empty": "age cannot be empty",
    "number.min": "Sorry minimum age is supposed to be 20",
    "number.max": "age cannot be more than 45",
  }),
  position: Joi.string().messages({
    "string.base": "position should be a string",
    "string.empty": "position cannot be empty",
  }),
});

module.exports = {
  loginSchema,
  signupSchema,
  addNewPlayerSchema,
  editPlayerSchema,
};
