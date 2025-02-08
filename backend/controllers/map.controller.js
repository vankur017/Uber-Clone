const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');


module.exports.getAddressCoordinate = async (req, res, next) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {address} = req.query;

    try{
        const coordinates = await mapService.getAddressCoordinate(address);
        return res.json(coordinates);
        // console.log('Google API Response:', JSON.stringify(coordinates, null, 2));
    }
    catch(error){
        return res.status(404).json({message: 'Unable to fetch coordinates'});
    }
}

module.exports.getDistanceTime = async (req, res, next) => {
    try{
        const {origin, destination} = req.query;
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        
        return res.status(200).json(distanceTime);
    }   
    catch(error){
        return res.status(404).json({message: 'Unable to fetch distance and time'});
    }
}

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})   
        }

        const {input} = req.query;
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        
       return res.status(200).json(suggestions);
    }   
    catch(error){
        return res.status(404).json({message: 'Unable to fetch suggestions'});
    }
}