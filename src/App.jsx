import React from "react";
import './App.css';
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
      <div>
          <MyNavbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              {/*<Route path="/project" element={<Projects/>} />*/}
          </Routes>
      </div>
  );
}

export default App;
