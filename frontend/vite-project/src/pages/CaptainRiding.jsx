import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UBER_LOGO, UBER_MAP } from '../assets/constants'
import FinishRide from '../components/FinishRide'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CaptainRiding = (props) => {
  const reloadScreen = () => {
    window.location.reload();
  }
  
  const navigate = useNavigate()

  if(!localStorage.getItem('rideAccepted')){
    navigate('/captainhome')
  }
  
  const [finishRide, setFinishRide] = useState(false)
  const finishRidePanelRef = useRef(null)

  useGSAP(()=>{
    if(finishRide){
     
      gsap.to(finishRidePanelRef.current, {
        duration: 0.5,
        transform: 'translateY(0%)',
        height: '100%'
      })
    }
    else{
      gsap.to(finishRidePanelRef.current, {
        duration: 0.5,
        transform: 'translateY(100%)',
      })
    }
  }, [finishRide])


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
    
    >
      <i className="text-lg ri-logout-box-line"></i>
    </Link>


    <div className="h-4/5 relative">
      
      <img
        className="h-full w-full object-cover"
        src={UBER_MAP}
        alt="Map"
      />
    </div>
    <div onClick={()=> setFinishRide(true)}  className='bg-yellow-400 h-1/5 flex items-center justify-between relative px-12'>
      <h4 className='w-[90%] absolute top-0 p-1 text-center' ><i className="flex justify-center items-center text-2xl ri-arrow-up-wide-fill"></i></h4>
     
      
      
      
        <h4> 5 KMS Away</h4>
        <button onClick={()=>console.log('hello')} className='bg-green-600 rounded-lg text-white p-4 font-medium text-lg'>Complete Ride</button>
      
    </div>
    <div ref={finishRidePanelRef} className="w-full translate-y-full fixed bg-white z-10 bottom-0  p-3">
              
              <FinishRide  setFinishRide={setFinishRide} />
               
          </div>
  </div>
  )
}

export default CaptainRiding