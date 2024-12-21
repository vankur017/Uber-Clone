const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');




module.exports.registerCaptain = async(req, res)=>{
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    
    const {fullname, email, password, vehicle} = req.body

    const isCaptainAlreadyExists = await captainModel.findOne({email})

    if(isCaptainAlreadyExists){
        return res.status(400).json({message: 'Captain already exists'})
    }

    const hashPassword = await captainModel.hashPassword(password)
    
    
    const captain = await captainService.createCaptain({
        fullname:fullname,
        email,
        password:hashPassword,
        capacity:vehicle.capacity,
        color:vehicle.color,
        plate:vehicle.plate,
        vehicleType:vehicle.vehicleType,
    })

    const token = captain.generateAuthToken()

    res.status(201).json({token, captain})
}
