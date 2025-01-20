import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const UserLogout = async() => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    
    if(response.status === 200){
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout