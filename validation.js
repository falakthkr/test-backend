const Joi = require("joi");

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

module.exports.loginValidation = loginValidation;