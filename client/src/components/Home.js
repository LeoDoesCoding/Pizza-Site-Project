import React, { useState, useEffect } from 'react';
import '../styles/menu.css';

function Home() {
  const [backendData, setBackendData] = useState([{}]);

  //Fetch data from backend
  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);


  return (
    <div>
      <p>hi!</p>
    </div>
  )
}
export default Home;