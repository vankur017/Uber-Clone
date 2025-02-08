const rideModel = require('../models/rides.model');
const mapService = require('./maps.service');
const crypto = require('crypto');
async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and Destination are required');
    }

    try {
        const distanceTime = await mapService.getDistanceTime(pickup, destination);
        console.log("Distance and Time:", distanceTime);

        const baseFare = { auto: 30, car: 50, bike: 20 };
        const perKmFare = { auto: 10, car: 15, bike: 8 };
        const perMinuteFare = { auto: 2, car: 3, bike: 1 };

        return {
            auto: baseFare.auto + ((distanceTime.distance.value / 1000) * perKmFare.auto) + ((distanceTime.duration.value / 60) * perMinuteFare.auto),
            car: baseFare.car + ((distanceTime.distance.value / 1000) * perKmFare.car) + ((distanceTime.duration.value / 60) * perMinuteFare.car),
            bike: baseFare.bike + ((distanceTime.distance.value / 1000) * perKmFare.bike) + ((distanceTime.duration.value / 60) * perMinuteFare.bike)
        };
    } catch (error) {
        console.error("Error in getFare:", error);
        throw new Error("Failed to calculate fare due to an internal error.");
    }
}


function getOtp(num) {
    function generateOtp(num) {
        try {
            return crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        } catch (error) {
            console.error("Error generating OTP:", error);
            return "000000"; // Fallback OTP
        }
    }
    return generateOtp(num);
}

module.exports.createRide = async ({ user, pickup, destination, vehicleType }) => {
    console.log("Received data:", { user, pickup, destination, vehicleType });

    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error("All fields are required");
    }

    try{
        const fare = await getFare(pickup, destination);

    if (!fare[vehicleType]) {
        throw new Error(`Invalid vehicle type: ${vehicleType}`);
    }

    console.log("Fare:", fare);

    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType]
    });

    console.log("Created ride:", ride);
    
    return {ride};
    }
    catch(error){
        console.error('Error creating ride:', error);
        throw error
    }
    

};
