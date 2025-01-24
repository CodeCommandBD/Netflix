import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log('login')
        navigate('/')
      }else{
        console.log('logout');
        navigate('/login')
      } 
    })
  },[])
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/player/:id' element={<Player></Player>}/>
      </Routes> 
    </div>
  )
}

export default App