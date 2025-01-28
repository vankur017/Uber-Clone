import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UBER_LOGO, UBER_MAP } from '../assets/constants';
import CaptainDetails from '../components/CaptainDetails';
import RidePopup from '../components/RidePopup';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmRdePopUpPanelRef = useRef(null);

  

  useGSAP(()=>{
     if(ridePopUpPanel){
        gsap.to(ridePopUpPanelRef.current, {
          duration: 0.5,
           transform: 'translateY(0%)',
          }
        )
     }
     else{
       gsap.to(ridePopUpPanelRef.current, {
        duration: 0.5,
        transform: 'translateY(100%)',
       })
     }
  }, [ridePopUpPanel])

  useGSAP(()=>{
    if(confirmRidePopUpPanel){
     
      gsap.to(confirmRdePopUpPanelRef.current, {
        duration: 0.5,
        transform: 'translateY(0%)',
        height: '100%'
      })
    }
    else{
      gsap.to(confirmRdePopUpPanelRef.current, {
        duration: 0.5,
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePopUpPanel])

  const handleLogout = () => {
    localStorage.removeItem('token');
  }
  
   const reloadScreen = () => {
    window.location.reload();
  }

  return (
      <div className="h-screen flex flex-col relative">
    
        <img
          onClick={reloadScreen}
          className="absolute top-4 left-4 w-16 z-10"
          src={UBER_LOGO}
          alt="Uber Logo"
        />
        <Link
          to={'/captainlogin'}
          className="absolute top-4 right-4 h-10 w-10 bg-white flex items-center justify-center rounded-full z-10"
          onClick={handleLogout}
        >
          <i className="text-lg ri-logout-box-line"></i>
        </Link>
  
    
        <div className="h-3/5 relative">
        
          <img
            className="h-full w-full object-cover"
            src={UBER_MAP}
            alt="Map"
          />
        </div>
  
      
        <div className="h-2/5 p-2 ">
          <CaptainDetails/>
        </div>
        <div ref={ridePopUpPanelRef} className="w-full translate-y-full fixed bg-white z-10 bottom-0  p-3">
              
            <RidePopup setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
             
        </div>
        <div ref={confirmRdePopUpPanelRef} className="w-full translate-y-full fixed bg-white z-10 bottom-0  p-3">
              
              <ConfirmRidePopUp  confirmRidePopUpPanel={confirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
               
          </div>
      </div>
    );
  };
  
  export default CaptainHome;