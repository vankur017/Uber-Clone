import React from 'react'
import { UBER_CAB_LOGO, UBER_MAP } from '../assets/constants'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen  '>
      <Link to={'/home'} className='fixed  right-2 top-2 h-5 w-10 bg-white flex items-center justify-center rounded-full'>
      <i className="text-lg font-medium ri-home-4-line"></i>
      </Link>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src={UBER_MAP} alt='No Rendered'/>
      </div>
       <div className='flex items-center justify-between '>
                <img className='h-24' src={UBER_CAB_LOGO}></img>
                <div className='text-right pr-4'>
                    <h2 className='text-lg font-medium'>Ankurr</h2>
                    <h4 className='text-xl -mt-1 -mb-1'>UP 33 Y 6053</h4>
                    <p className='text-sm'>Alto 800</p>
                </div>
             </div>

      <div className='h-1/2 p-4'>
      <div className='flex gap-7 justify-between flex-col items-center'>
            
               
            <div className='w-full mt-5'>
             
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
        <button className='w-full px-3 mt-5 py-2 bg-green-600 font-semibold text-white rounded-lg'>Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding