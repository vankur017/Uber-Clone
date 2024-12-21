const express = require('express');
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname').isLength({min:3}).withMessage('First name must be at least 3 characters'),
    body('password').isLength({min:3}).withMessage('Last name must be at least 3 characters')
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:3}).withMessage('Password must be at least 3 characters')
],
    userController.loginUser
    
)

module.exports = router