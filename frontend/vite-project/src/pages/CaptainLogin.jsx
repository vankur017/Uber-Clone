import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UBER_BACKEND_URL } from '../assets/constants'

const CaptainLogin = () => {
  const [capemail, setCapEmail] = useState('')
  const [cappassword, setCapPassword] = useState('')
  const [capData, setCapData] = useState({})
  const navigate = useNavigate()
  
  const submitHandler = async(e)=>{
    e.preventDefault()
    //console.log(capemail, cappassword);

    const response = await axios.post(`${UBER_BACKEND_URL}/captains/captainlogin`, {
      email: capemail,
      password: cappassword
    }, 
    
  )
    //console.log(response.data);
    
    
    if(response.status === 200){
      //console.log('Login Success');
      setCapData(response.data.captain)
      localStorage.setItem('token', response.data.token)
      navigate('/captainhome')

      setCapEmail('')
      setCapPassword('')
    }
  
    
  }

  return (
    <div className='p-7 flex flex-col justify-between'> 
    <div>
    <img className='w-24 mb-5' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='Not Rendered'/>
     <form onSubmit={(e)=>submitHandler(e)}>
       <h3 className='text-xl font-medium mb-2 '>What's your email?</h3>
       <input
        value={capemail}
        required
        onChange={(e)=>setCapEmail(e.target.value)}
        className='bg-[#eeeeee] mb-7 border-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        type='email'
        placeholder='email@example.com'
    
        />
       <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
       <input
        required
        value={cappassword}
        onChange={(e)=> setCapPassword(e.target.value)}
        className='bg-[#eeeeee] mb-7 border-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'
         type='password'
         placeholder='password'
         />
       <button className='bg-[#111] text-white font-semibold mb-7 border-2 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
          
         
     </form>

     <p className='text-center mb-3'>
           Register as Captain?
            <Link to={'/captainsignup'} className='mb-3 text-blue-600 '> Create New Account</Link>
     </p>



  </div>
      <div>
      <Link to="/login" className="bg-[#a99062] block text-center text-white font-semibold mb-7 border-2 rounded-lg py-2 w-full text-lg placeholder:text-base">
        Sign in as User
    </Link>
      </div>
  </div>
  )
}

export default CaptainLogin