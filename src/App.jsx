//This will now be like my home page
import './App.css'
import Router from './components/Router'
import AuthContext from './context/AuthContext.jsx'
import { useEffect, useContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import Login from './components/Login.jsx'
import { Routes } from 'react-router-dom'



function App() {

  const [user, setUser] = useState()

  useEffect(() => {
    const userData = localStorage.getItem("jwt")
    if (userData) {
      login(userData)
    }
    else {
      logout()
    }
  }
)
   const login = (userData) => {
      localStorage.setItem("jwt", userData)
      const user = jwtDecode(userData)
      if (user) {
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user)
      }
   }
   const logout = () => {
      setUser(null);
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
    }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout}}>
      <Router />
    </AuthContext.Provider>
  )
}

export default App
