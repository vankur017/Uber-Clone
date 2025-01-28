import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captainlogin' element={<CaptainLogin/>}/>
        <Route path='/captainsignup' element={<CaptainSignup/>}/>
        <Route path='/riding' element={<Riding/>}/>
        <Route path='/captain-riding' element={<CaptainRiding/>}></Route>
       
          <Route path='/home' element={
              <UserProtectedWrapper>  
                  <Home/>
              </UserProtectedWrapper>  
            }/>
        
        
       
        <Route path='/captainhome' element={
            <CaptainProtectedWrapper>
              <CaptainHome/>
            </CaptainProtectedWrapper>
           
        }/>
          
        
      </Routes>
    </div>
  )
}

export default App