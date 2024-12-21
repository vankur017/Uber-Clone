const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    fullname, email, password,
    color, plate, capacity, vehicleType
}) => {
    // Debugging: log the received parameters
    console.log("Received data:", { fullname, email, password, color, plate, capacity, vehicleType });

    if (!fullname || !email || !password || !vehicleType || !color || !plate || !capacity) {
        throw new Error('All fields are required');
    }
    
    // Check if fullname is properly destructured
    if (!fullname.firstname || !fullname.lastname) {
        throw new Error('Full name is incomplete');
    }

    // Create a new captain instance
    const captain = await captainModel.create({
        fullname: {
            firstname: fullname.firstname,  // Ensure fullname is an object containing firstname and lastname
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,  // Correct spelling of capacity
            vehicleType
        },
    });

    console.log("Created captain:", captain);

    return captain;
}
