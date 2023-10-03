import React, { useEffect, useState } from 'react'
import Layout from "./components/Layout"
import Home from "./components/Home"
import FoodMenu from "./components/Menu"
import HalfHalf from "./components/HalfHalf"
import "./styles/main.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Pizzas" element={<FoodMenu/>}/>
          <Route path="/5050Pizzas" element={<HalfHalf/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App