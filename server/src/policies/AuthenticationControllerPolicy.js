const Joi = require('joi');

module.exports = {

  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-z0-9]{8,32}$')),
    }
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email': {
          res.status(400).send({ success: false, error: 'You must provide a valid email address' });
          break;
        }
        case 'password': {
          let error = 'The password provided failed to match the following rules.';
          error = error + ' It must only contain the following characters: lower case, upper case, numerics.';
          error = error + ' It must be between a range of 8 to 32 characters.';
          res.status(400).send({ success: false, error });
          break;
        }
        default: {
          res.status(400).send({ success: false, error: 'Invalid registration information' });
        }
      }
    } else {
      next();
    }
  }

}