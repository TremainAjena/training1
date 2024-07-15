import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useContext } from 'react'
import Login from './Login.jsx';
import Counts from './Counts.jsx';
import AuthContext from '../context/AuthContext.jsx'


function Router() {

    const { user } = useContext(AuthContext);
    const authenticatedRoutes = () => {
        return (
        <>
            <Routes>
    
                <Route path="/test" element={<>Goodbye there</>} />
                <Route path="/counts" element={<Counts />} />

                <Route path="*" element={<Navigate to="/counts" />} />
        
            </Routes>
        </>

        )
    }

    const unAuthenticatedRoutes = () => {
        return (
        <>
            <Routes>
    
               
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
        
            </Routes>
        </>

        )
    }


    return (
        <>
        {user ? authenticatedRoutes() : unAuthenticatedRoutes()}
      </>
     
    )
  }

export default Router