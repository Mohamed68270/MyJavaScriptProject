const joi = require("joi");

const userValidation = (body) => {
  const userValidationShema = joi.object({
    firstname: joi.string().min(2).max(30).trim().required(),
    lastname: joi.string().min(2).max(30).trim().required(),
    email: joi.string().email().trim().required(),
    password: joi.string().min(8).max(30).required(),
  });

  return userValidationShema.validate(body);
};

module.exports = userValidation;
