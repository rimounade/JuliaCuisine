const { body, validationResult } = require('express-validator')

exports.validSignUp = [
    body('email','Enter a valid email').isEmail(),
    body('password', 'enter min 6 char').isLength({min : 6})
]

exports.validSignIn = [
    body('email', 'enter a valid Email ').isEmail()
]

exports.validation =(req,res,next)=>{
    const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() })
  }

  next()
}