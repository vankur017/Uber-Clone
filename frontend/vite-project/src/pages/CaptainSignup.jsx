import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserSignup = () => {

  const [capemail, setCapEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setlastName] = useState('')
  const [userData, setUserData] = useState({})


  const submitHandler = (e)=>{
      e.preventDefault()
      setUserData({
        fullname:{
          fname: firstname,
          lname : lastname
        },
        
        mail : capemail,
        password: password
      })

      console.log(userData);

      setCapEmail('')
      setFirstName('')
      setlastName('')
      setPassword('')
      
      

  }


  return (
    <div className='p-4 flex flex-col justify-between'>
      <div>
    <img className='w-24 mb-5' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='Not Rendered'/>
     <form >
      <h3 className='text-base font-medium mb-2 '>What's your name?</h3>
         <div className='flex gap-3 mb-5'>

           <input
            required
            className='bg-[#eeeeee] w-1/2 mb-7 border-2 rounded px-4 py-2 text-lg placeholder:text-base'
            type='text'
            placeholder='firstname'
            onChange={(e)=>setFirstName(e.target.value)}
            value={firstname}
            />

            <input
            required
            className='bg-[#eeeeee] w-1/2 mb-7 border-2 rounded px-4 py-2 text-lg placeholder:text-base'
            type='text'
            placeholder='lastname'
            value={lastname}
            onChange={(e)=>setlastName(e.target.value)}
            />
         </div>
       <h3 className='text-base font-medium mb-2 '>What's your email?</h3>
       <input
        required
        className='bg-[#eeeeee] mb-7 border-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        type='email'
        placeholder='email@example.com'
        value={capemail}
        onChange={(e)=>setCapEmail(e.target.value)}
    
        />
       <h3 className='text-base font-medium mb-2'>Enter Password</h3>
       <input
        required
        className='bg-[#eeeeee] mb-7 border-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'
         type='password'
         placeholder='password'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
       <button onClick={submitHandler} className='bg-[#111] text-white font-semibold mb-7 border-2 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign Up</button>
          
         
     </form>
      
        <p className='text-center mb-3'>
                      Already have Captain account?
                       <Link to={'/login'} className='mb-3 text-blue-600 '>Login here</Link>
        </p>
      
      
      </div>
          
           
      <div>
        <p className='text-[12px] leading-tight'>
        Welcome to Uber! Your privacy is important to us. Please take a moment to review our Privacy Policy, which explains how we collect, use, and protect your personal information. By signing up, you agree to the terms of this policy.
        </p>
      </div>
    
    </div>
  )
}

export default UserSignup