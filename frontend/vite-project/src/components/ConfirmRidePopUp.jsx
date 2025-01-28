import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

  const [otp, setOtp] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }
  
  const navigate = useNavigate()

  const handleConfirmRide = () => {
    navigate('/captain-riding')
  }
  return (
    <div className='mt-4 p-4'>
            <h5 onClick={()=>props.setConfirmRidePopUpPanel(false)} className='w-[93%] p-1 absolute top-0 text-center ' ><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>   
               <h3 className="text-2xl mt-8 font-semibold mb-5">Confrim this Ride to start </h3>
               <div className='flex items-center justify-between bg-yellow-400 rounded-2xl p-4 '>
                  <div className='flex items-center gap-4'>
                    <img className='h-10 w-10 rounded-full' src='https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947' alt='Not Rendered'/>
                    <h2>Harsh Singh</h2>

                  </div>
                  <h5>2.5 km away</h5>
               </div>
               <div className='flex gap-7 justify-between flex-col items-center'>
        
             
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
                  
                </div>
                <div className='w-full'>
                  <form onSubmit={(e)=>submitHandler(e)}>
                    <input value={otp} onChange={()=> e.target.value}  className="bg-[#eeeeee] px-3 py-3 font-mono text-base rounded-lg w-full mt-5" type='text' placeholder='Enter Otp'/>
                    <div className='w-full flex justify-between items-center gap-5'>
                        <button
                        onClick={()=>{
                          props.setConfirmRidePopUpPanel(false)
                          props.setRidePopUpPanel(false)
                          localStorage.setItem('rideAccepted', 'false')
                  
                        }}
                        className='w-full px-3 mt-5 py-2 bg-red-600 font-semibold text-white rounded-lg'
                        >
                          Cancel
                        </button>
                          <button
                           onClick={()=>{
                              handleConfirmRide()
                              localStorage.setItem('rideAccepted', 'true')
                          }}
                            className='w-full px-3 mt-5 py-2 bg-green-600 font-semibold text-white rounded-lg'
                            >
                              Confirm
                            </button>
                    </div>
                  </form>
                </div>
               
                </div>
    </div>
  )
}

export default ConfirmRidePopUp