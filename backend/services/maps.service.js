const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        console.log('Google API Response:', JSON.stringify(data, null, 2)); 

        if (data.status === 'OK') {
            const location = data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        
        console.error('API Error:', error);
        throw error
    }
}


module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || !destination){
        throw new Error('Origin and Destination are required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        const data = response.data;

        if(data.status === 'OK'){
            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No rotues found');
            }
            
            return data.rows[0].elements[0]
                
            
          
    }
    else{
        throw new Error('Unable to fetch distance and time');
    }
    }
    catch(error){
        console.error('API Error:', error);
        throw error;
    }
    
  

   
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        const data = response.data;

        if(data.status === 'OK'){
            return data.predictions;
        }
        else{
            throw new Error('Unable to fetch suggestions');
        }
    }
    catch(error){
        console.error('API Error:', error);
        throw error;
    }


}