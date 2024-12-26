import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-6 pl h-screen w-full flex justify-between flex-col bg-red-400' >
      <img className='w-24 p-4' src='https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_-512x512.png' alt='Not Rendered'/>
        <div className='bg-white pb-7 px-4 py-4'>
      
          <h2 className='mt-1 px-7 text-2xl font-bold'>Get Started with Uber</h2>
          <Link to={'/login'} className=' mt-2 flex justify-center text-lg w-full bg-black text-white py-4 px-2 rounded-lg '>Continue</Link>
        </div>
      
      </div>
    </div>
  )
}

export default Start