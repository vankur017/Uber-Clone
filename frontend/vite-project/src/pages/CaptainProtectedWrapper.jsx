import React, {useEffect, useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import  { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainProtectedWrapper = ({children}) => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    // console.log(token);
    const { capData, setCapData } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        if(!token){
            navigate('/captainlogin')
        }
    

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers :{
            Authorization : `Bearer ${token}`
        }
    }).then(response =>{
        if(response.status === 200){
            console.log(response.data);
            
            setCapData(response.data.captain)
            setIsLoading(false)
        }

    }).catch(err =>{
        // console.log(err);
        localStorage.removeItem('token')
        navigate('/captainlogin')
    })
}, [token])
    if(isLoading){
        return ( <div>Loading...</div>)
    }

  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectedWrapper