import React from 'react'
import UserProvider from './context/UserProvider'
import { Routes ,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import EventDetails from './pages/EventDetails'
import MyEvents from './pages/MyEvents'

const App = () => {
  return (
    <>
   <UserProvider>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events/:id" element={<EventDetails />}/>
           <Route path="/my-events" element={<MyEvents/>}/>
        </Routes>
     </UserProvider>
    </>
  )
}

export default App
