import React from 'react'

const CaptainDetails = () => {
  return (
    <>
       
        <div className='mt-8 flex items-center justify-between'>
            <div className="flex items-center justify-start">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947"
                alt=""
              />
              <h4 className="text-lg font-medium px-3">Saxena Patel</h4>
            </div>
            <div className="flex flex-col items-center justify-start gap-2">
              <h4 className="text-xl font-semibold">₹295.2</h4>
              <p className="text-sm font-medium text-gray-600">Earned</p>
            
            </div>
        </div>
        
        
        <div className='mt-10'>
          <div className="flex justify-around items-start m-4 p-6  bg-yellow-300 rounded-xl">
            <div className="text-center">
              <i className="text-2xl font-extralight ri-timer-2-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours</p>
            </div>
            <div className="text-center">
              <i className="text-2xl font-extralight ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">150</h5>
              <p className="text-sm text-gray-600">kms</p>
            </div>
            <div className="text-center">
              <i className="text-2xl font-extralight ri-booklet-line"></i>
              <h5 className="text-lg font-medium">₹1500</h5>
              <p className="text-sm text-gray-600">Earned</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default CaptainDetails