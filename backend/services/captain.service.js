const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    fullname, email, password,
    color, plate, capacity, vehicleType
}) => {
   
    console.log("Received data:", { fullname, email, password, color, plate, capacity, vehicleType });

    if (!fullname || !email || !password || !vehicleType || !color || !plate || !capacity) {
        throw new Error('All fields are required');
    }
    
  
    if (!fullname.firstname || !fullname.lastname) {
        throw new Error('Full name is incomplete');
    }

  
    const captain = await captainModel.create({
        fullname: {
            firstname: fullname.firstname,  
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,  
            vehicleType
        },
    });

    console.log("Created captain:", captain);

    return captain;
}
