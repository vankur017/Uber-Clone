import React, { useRef, useState, useEffect } from 'react';
import { UBER_LOGO,UBER_AUTO_SUGGESTIONS } from '../assets/constants';
import { UBER_MAP, UBER_CAB_LOGO, UBER_MOTO_LOGO, UBER_AUTO_LOGO } from '../assets/constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import { useNavigate } from 'react-router-dom';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/Confirmedride';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import Riding from './Riding';
import axios from 'axios';
import useDebounce from '../utils/useDebounce';

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState('');

  const [destination, setDestination] = useState('');

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const [activeField, setActiveField] = useState(null); 

  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);

  const vehiclePanelRef = useRef(null)

  const confirmedRidePanelRef = useRef(null)

  const logoRef = useRef(null)

  const panelClose = useRef(null);

  const [vehiclePanel, setVehiclePanel] = useState(false)

  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)

  const [vehiclefound, setVehicleFound] = useState(false)

  const vehiclefoundRef = useRef(null)

  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const watinfForDriverRef = useRef(null)

  const fetchPickupSuggestions = async (input) => {
    if (!input) return; 
    try {
      const response = await axios.get(`${UBER_AUTO_SUGGESTIONS}`, {
        params: { input },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return setPickupSuggestions(response.data.map((item) => item.description));
    } catch (error) {
      console.error(error);
      throw error
     
    }
  };
  
  const fetchDestinationSuggestions = async (input) => {
    if (!input) return; 
    try {
      const response = await axios.get(`${UBER_AUTO_SUGGESTIONS}`, {
        params: { input },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return setDestinationSuggestions(response.data.map((item) => item.description));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
 
  const debouncePickup = useDebounce(pickupLocation, 2000);
  const debounceDestination = useDebounce(destination, 2000);
  
 
  useEffect(() => {
    if (debouncePickup) {
      fetchPickupSuggestions(debouncePickup);
    }
  }, [debouncePickup]);
  
  useEffect(() => {
    if (debounceDestination) {
      fetchDestinationSuggestions(debounceDestination);
    }
  }, [debounceDestination]);
  

  const navigate = useNavigate()
  
  const checkIfActive =()=>{
    if(document.activeElement === pickupRef.current){
      setActiveField('pickup')
    }
    else{
      setActiveField('destination')
    }
  }

  const handleLogo = ()=>{
   window.location.reload(true)
  }



  useGSAP(() => {
    
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: '70%',
         // opacity: 1
         padding: 24
        })
        gsap.to(panelClose.current, {
          opacity: 1
        })
        gsap.to(logoRef.current, {
          zIndex: 0  
        });
      }
      else{
        gsap.to(panelRef.current, { 
          height: '0%' ,
          padding: 0
        //  opacity: 0
        })
        gsap.to(panelClose.current, {
          opacity: 0
        })
        gsap.to(logoRef.current, {
          zIndex: 10  
        });
      }
    
  }, [panelOpen]);


  useGSAP(()=>{
    if(confirmedRidePanel){
      gsap.to(confirmedRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    }
    else{
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  },[confirmedRidePanel])


  const submitHandler = (e) => {
    e.preventDefault();
  };
  
  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: '0%'  ,
        
        
      });
   
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: '100%' 
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (vehiclefound) {
      gsap.to(vehiclefoundRef.current, {
       transform: 'translateY(0)'
        
        
      });
   
    } else {
      gsap.to(vehiclefoundRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [vehiclefound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(watinfForDriverRef.current, {
       transform: 'translateY(0)'
        
        
      });
   
    } else {
      gsap.to(watinfForDriverRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [waitingForDriver]);
  
  
  const handleLogoClick = ()=>{
    navigate('/home')
  }

   return (
    <div className="h-screen relative overflow-hidden">
      <div onClick={handleLogoClick}><img ref={logoRef} onClick={handleLogo} className="w-24 absolute left-5 top-5 z-10 cursor-pointer" src={UBER_LOGO} alt="Not Rendered" /></div>
      <div className="h-screen w-screen">
        {/* For temporary use */}
        <img className="h-full w-full object-cover" src={UBER_MAP} alt="Map" />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-4 bg-white">
          <h5
            ref={panelClose}
            onClick={() => {
              setPanelOpen(!panelOpen);
            }}
            className="opacity-0 text-2xl font-semibold text-gray-500 flex items-center"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div
              className={`mt-7 my-2 absolute h-16 w-1 bg-black rounded-full transition-all ease-in-out ${
                panelOpen ? 'top-[88px]' : 'top-[80%]'
              } left-10`}
            ></div>
            <input
              onClick={() =>{
                 setPanelOpen(true)
                 setActiveField('pickup')}
                }
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
              onBlur={checkIfActive}
              onFocus={checkIfActive}
            />
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              value={destination}
              onChange={(e)=> setDestination(e.target.value)}
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a Drop location"
              onBlur={checkIfActive}
              onFocus={checkIfActive}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          {panelOpen && 
          <LocationSearchPanel 
          setPanelOpen={setPanelOpen}
          activeField={activeField}
          setActiveField={setActiveField} 
          pickupLocation={pickupLocation}
          setPickupLocation={setPickupLocation}
          destination={destination} 
          setDestination={setDestination}
          setVehiclePanel={setVehiclePanel}
          pickupSuggestions={pickupSuggestions}
          setPickupSuggestions={setPickupSuggestions}
          destinationSuggestions={destinationSuggestions}
          setDestinationSuggestions={setDestinationSuggestions}
          />}
        </div>
      </div>
      <div ref={vehiclePanelRef} className="w-full translate-y-full fixed bg-white z-10 bottom-0  p-3">
              <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel}/>

      
      
      </div>
      <div ref={confirmedRidePanelRef} className="w-full translate-y-full fixed bg-white z-10 bottom-0  p-3">
              

               <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound}/> 
      
      </div>
      <div ref={vehiclefoundRef} className="w-full translate-y-full fixed bg-white z-10 bottom-0  p-3">
              

              <LookingForDriver setVehicleFound={setVehicleFound}/> 
     
     </div>
     <div ref={watinfForDriverRef} className="w-full translate-y-full fixed bg-white  bottom-0  p-3">
              

              <WaitingForDriver waitingForDriver={waitingForDriver} setWaitingForDriver={setWaitingForDriver}  /> 
     
     </div>
     <div className="w-full translate-y-full fixed bg-white  bottom-0  p-3">
              

              <Riding  /> 
     
     </div>
    </div>
  );
}  

export default Home;