import React from 'react';
import Home from './Home';
import './App.css';
import { AuthProvider } from 'oidc-react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


const oidcConfig = {
  authority: "http://localhost:8080/realms/springboot",
  clientId: "myclient",
  redirectUri: "http://localhost:3000/",
  onSignIn: async (user: any) => {
    console.log(user);
    window.location.hash = '';
  }
};

function App() {
  return (
    <AuthProvider{...oidcConfig}>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
