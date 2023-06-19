import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import { getFromStorage, setInStorage } from './utils/api/storage'
import { userVerify } from './utils/api/calls/users'

import { LandingPage, AboutPage } from "./pages";

export default function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const obj = getFromStorage("ptrgv2-tok")
      // if (obj && obj.token) {
      //   let response = await verifyToken(obj.token);
      //   if (response.success) {
      //     setToken(obj.token);
      //     setUser(response.user);
      //     setLoading(false);
      //   } else {
      //     setLoading(false);
      //   }
      // } else {
      //   setLoading(false);
      // }
    }
    
    loadUser();
  })

  if (loading) {
    // return <Loading />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <LandingPage 
            user={user}
            token={token}
            setUser={setUser}
            setToken={setToken}
            />
        }
        />

        <Route path="/about" element={
          <AboutPage 
            user={user}
            token={token}
            setUser={setUser}
            setToken={setToken}
          />
        }
        />

        

        {/* 404 route */}
        <Route path="*" element={
          <Navigate to="/" />
        }/>

        </Routes>
        </Router>
  );
}

