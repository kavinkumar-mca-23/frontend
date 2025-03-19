import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./Page/RegisterPage";
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/Homepage";



function App() {
  return (
  
      <Router> 
        <Routes>
          <Route path="/" element={< RegisterPage/>} />
          <Route path="/login" element={< LoginPage/>} />
          <Route path="/home" element={< HomePage/>} />
        

          
     
        </Routes>
      </Router>

  );
}

export default App;