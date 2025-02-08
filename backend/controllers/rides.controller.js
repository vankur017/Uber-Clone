const rideService = require('../services/rides.service.js');

const { validationResult } = require('express-validator');


module.exports.createRide = async (req, res) => {
    console.log("Received request:", req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
    }

    const { pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({
            user: req.user ? req.user._id : null, 
            pickup, 
            destination, 
            vehicleType
        });

        console.log("Ride created successfully:", ride);
        return res.status(201).json(ride);
    } catch (error) {
        console.error("Error creating ride:", error);
        throw error;
    }
};
