const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const rideController = require('../controllers/rides.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create', authMiddleware.authUser, [
    body('userId').isString().isLength({ min: 24, max: 24 }).withMessage('Invalid User Id'),
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid Pickup Address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid Destination Address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'bike']).withMessage('Invalid Vehicle Type')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    rideController.createRide(req, res);
});
module.exports = router;