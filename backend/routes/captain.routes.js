const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
        body('email').isEmail().withMessage('Invalid Email'),
        body('fullname').isLength({min:3}).withMessage('full name must be at least 3 characters'),
        body('password').isLength({min:6}).withMessage('password must be at least 3 characters'),
        body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters'),
        body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 characters'),
        body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be at least 1 characters'),
        body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Invalid Vehicle Type')
],
    captainController.registerCaptain
)
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters')
],
    captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)

module.exports = router