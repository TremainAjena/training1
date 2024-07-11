import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Login from './Login.jsx';
import Counts from './Counts.jsx';

function Router() {
    return (
      <>
          <Routes>
    
            <Route path="/test" element={<>Goodbye there</>} />
            <Route path="/login" element={<Login />} />
            <Route path="/counts" element={<Counts />} />


            <Route path="*" element={<Login />} />
        
        </Routes>
      </>
    )
  }

export default Router