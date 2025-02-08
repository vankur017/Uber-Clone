import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import { UBER_BACKEND_URL } from '../assets/constants'

const UserLogin = () => {

  const [email, setEmail] =useState('')
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const { user, setUser } = useContext(UserDataContext);


  const submitHandler =async(e)=>{
    e.preventDefault()
   // console.log(email, password);
    
    const userData = {
      email: email,
      password: password
    }

    const response =await axios.post(`${UBER_BACKEND_URL}/users/login`, userData)

  
    if (response.status === 200) {
      setUser(response.data.user);
      
      localStorage.setItem('token', response.data.token);
     
      navigate('/home');
    }
  //  console.log(userData);
    
    

 
  }

  return (
    <div className='p-7 flex flex-col justify-between'>
       <div>
         <img className='w-24 mb-5' src='https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_-512x512.png' alt='Not Rendered'/>
          <form onSubmit={(e)=>submitHandler(e)}>
            <h3 className='text-xl font-medium mb-2 '>What's your email?</h3>
            <input
             value={email}
             required
             onChange={(e)=>setEmail(e.target.value)}
             className='bg-[#eeeeee] mb-7 border-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'
             type='email'
             placeholder='email@example.com'
         
             />
            <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
            <input
             required
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             className='bg-[#eeeeee] mb-7 border-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'
              type='password'
              placeholder='password'
              />
            <button className='bg-[#111] text-white font-semibold mb-7 border-2 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
               
              
          </form>

          <p className='text-center mb-3'>
                Register as User?
                 <Link to={'/signup'} className='mb-3 text-blue-600 '> Create New Account</Link>
          </p>



       </div>
     
          <div>
             <Link to={'/captainlogin'} className='bg-[#a99062] block text-center text-white font-semibold mb-7 border-2 rounded-lg py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link> 
          </div>
      
    </div>
  )
}

export default UserLogin