import React from 'react'
import { UBER_CAB_LOGO } from '../assets/constants'

const LookingForDriver = (props) => {
console.log(props);

  
  return (
    <div>  
        <h5 className='w-[93%] p-1 absolute top-0 text-center ' onClick={()=>props.setVehicleFound(false)} ><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
           <h3 className="text-2xl mt-8 font-semibold mb-5">Looking Your Rider</h3>
           <div className='flex gap-7 justify-between flex-col items-center'>
    
            <img className='h-32' src={UBER_CAB_LOGO}></img>
            <div className='w-full mt-5'>
              <div className='flex items-center gap-4 p-3 border-b-2'>
              <i className="ri-map-pin-user-fill"></i>
              <div >
                  <h3 className='text-lg font-medium'>562/11-A </h3>
                  <p className='text-sm -mt-1 text-gray-600'>Indira Nagar, Lucknow</p>
              </div>
              </div>
              <div className='flex items-center gap-4 p-3 border-b-2'>
              <i className="ri-map-pin-2-fill"></i>
              <div >
                  <h3 className='text-lg font-medium'>562/11-A </h3>
                  <p className='text-sm -mt-1 text-gray-600'>Indira Nagar, Lucknow</p>
              </div>
              </div>
              <div className='flex items-center gap-4 p-3 border-b-2'>
              <i class="ri-money-rupee-circle-fill"></i>
              <div >
                  <h3 className='text-lg font-medium'>Rs 193.20</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Cash, Cash</p>
              </div>
              </div>
              <div>
    
              </div>
            </div>
            
            </div>
        </div>
  )
}

export default LookingForDriver