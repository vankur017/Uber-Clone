import React from 'react'
import {  UBER_CAB_LOGO, UBER_MOTO_LOGO, UBER_AUTO_LOGO } from '../assets/constants';

const VehiclePanel = (props) => {
  console.log(props);
  
  return (
    <div>
         <h5 className='w-[93%] p-1 absolute top-0 text-center ' onClick={()=>props.setVehiclePanel(false)}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
        <h3 className="text-2xl mt-8 font-semibold mb-5">Choose a Vehicle</h3>
        <div onClick={()=>{
          props.setConfirmedRidePanel(true)
          props.setVehiclePanel(false)      
        }} className="border-2 cursor-pointer border-[#eee] mb-2 rounded-2xl w-full flex items-center justify-between p-3">
          <img className="h-18 w-32" src={UBER_CAB_LOGO} alt="Not Rendered" />
          <div className="w-1/2">
            <h4 className="font-medium text-md">UberGo</h4>
            <span className="ri-user-fill">4</span>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-500">Affordable, Compact Rides</p>
          </div>
          <h2 className="text-xl font-semibold">Rs 193.20</h2>
        </div>
        <div  onClick={()=>{
          props.setConfirmedRidePanel(true)
          props.setVehiclePanel(false)      
        }} className="border-2 cursor-pointer border-[#eee]  mb-2 rounded-2xl w-full flex items-center justify-between p-3">
          <img className="h-16 w-24 " src={UBER_AUTO_LOGO} alt="Not Rendered" />
          <div className="px-5 w-1/2">
            <h4 className="font-medium text-md">Auto</h4>
            <span className="ri-user-fill">4</span>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-500">Affordable, Auto Rides</p>
          </div>
          <h2 className="text-xl font-semibold">Rs 103.20</h2>
        </div>
        <div  onClick={()=>{
          props.setConfirmedRidePanel(true)
          props.setVehiclePanel(false)      
        }} className="border-2 cursor-pointer border-[#eee]  mb-2 rounded-2xl w-full flex items-center justify-between p-3">
          <img className="h-16 w-24" src={UBER_MOTO_LOGO} alt="Not Rendered" />
          <div className="px-5 w-1/2">
            <h4 className="font-medium text-md">Bike</h4>
            <span className="ri-user-fill">4</span>
            <h5 className="font-medium text-sm">5 mins away</h5>
            <p className="font-normal text-xs text-gray-500">Affordable, Bike Rides</p>
          </div>
          <h2 className="text-xl font-semibold">Rs 93.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel