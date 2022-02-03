const Users = require('../models/users');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils');
const _ = require('lodash');

exports.signUp = async (req, res) => {
  // #swagger.tags = ['Auth']
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Login params',
        required: true,
        type: 'obj',
        schema: { $ref: '#/definitions/SIGN_UP' }
} */
  /* #swagger.responses[200] = {
          description: 'Response body',
          schema: {$ref: '#/definitions/AUTH_RESPONSE'}
  } */
  /* #swagger.responses[400] = {
          description: 'Something went wrong or Error object',
         schema: {
            success: false,
            msg: 'Email or password is wrong'
        }
  } */

  let { error } = validate(req.body);
  if (error) return res.status(400).json({ success: false, msg: error.message });
  try {
    const hash = await bcrypt.hash(req.body.password, 8);
    let user = await Users.create({ ...req.body, password: hash });
    let token = createToken({ userId: user._id });
    const { password, ...docs } = user._doc
    res.status(201).json({ token, user: docs, success: true });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message })
  }
}

exports.login = async (req, res) => {
  // #swagger.tags = ['Auth']
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Login params',
        required: true,
        type: 'obj',
        schema: { $ref: '#/definitions/LOG_IN' }
} */
  /* #swagger.responses[200] = {
          description: 'Response body',
          schema: {$ref: '#/definitions/AUTH_RESPONSE'}
  } */
  /* #swagger.responses[400] = {
          description: 'Password or Email is wrong',
         schema: {
            success: false,
            msg: 'Email or password is wrong'
        }
  } */

  let { email, password } = req.body;
  let { error } = validate(req.body);
  if (error) return res.status(400).json({ success: false, msg: error.message });
  try {
    let user = await Users.findOne({ email })
    if (!user) {
      return res.status(400).json({ success: false, msg: 'Email or password is incorrect' })
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      let token = createToken({ userId: user._id });
      let { password, ...docs } = user._doc;
      return res.status(200).json({ token, user: docs, success: true })
    }
    res.status(400).json({ success: false, msg: 'Email or password is incorrect' })

  } catch (err) {
    res.json({ success: false, msg: err.message })
  }
}

function validate(formData) {
  console.log(formData);
  const orderSchema = Joi.object({
    firstName: Joi.string().min(3),
    lastName: Joi.string().min(3),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().regex(/^\+?\d{9,12}$/),
    lang: Joi.string(),
    image: Joi.string(),
  })

  return orderSchema.validate(formData);
}