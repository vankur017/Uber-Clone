import React, { useEffect, useState } from 'react';
import Shimmer from '../utils/Shimmer';

const LocationSearchPanel = (props) => {
  const [focus, setFocus] = useState(null)
   
  const {pickupSuggestions, destinationSuggestions, activeField, setActiveField} = props;

  // const locations = [
  //   '26/10, Vikas nagar, Lucknow',
  //   '26/36, Chdai nagar, Kanpur',
  //   '22/16, Indira nagar, Amoasu',
  //   '26/16, Gomit nagar, Raebareli',
  //   '26/16, fuxkc nagar, Raebareli',
  // ];

  const pickupData = pickupSuggestions
  const destinationData = destinationSuggestions

  const focusfield = ()=>{
    if(activeField === 'pickup'){
      setFocus('pickup')
    }
    else{
      setFocus('destination')
    }
  }
  console.log(activeField);

  useEffect(() => {
    focusfield()
  }, [activeField]);

  return <div className="mt-[-38px]">
      {
      focus === 'pickup' && 
      pickupData.map((loc, index) => (
        <div
          key={index}
          className="flex items-center justify-start p-3 mb-2 active:border-2 border-black rounded-md"
        >
          <div
            className="flex items-center justify-start"
            onClick={() => {
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }}
          >
            <h2 className="bg-[#eeeeee] h-8 w-10 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium px-2">{loc}</h4>
          </div>
        </div>
      ))}
 {
      focus === 'destination' && 
      destinationData.map((loc, index) => (
        <li
      key={index}
      className="flex items-center justify-start p-3 mb-2 border-2 border-transparent hover:border-black rounded-md cursor-pointer"
      onClick={() => {
        props.setVehiclePanel(true);
        props.setPanelOpen(false);
      }}
    >
      <div className="flex items-center justify-start">
        <h2 className="bg-[#eeeeee] h-8 w-10 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-line"></i>
        </h2>
        <h4 className="font-medium px-2">{loc}</h4>
      </div>
    </li>
      ))}
    </div>
  
  
};

export default LocationSearchPanel;
