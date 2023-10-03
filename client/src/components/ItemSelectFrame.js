import React, { useState, useEffect } from 'react';
import '../styles/menu.css';

function ItemSelectFrame({item, buttonText, sendDataToParent}) {
  const [backendData, setBackendData] = useState([{}]);
  //Fetch data from backend
  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);

    const selectItem = (event) => {
      sendDataToParent(item.id);
    };
    
  return (
    <div key={item.id} className="menu-item">
        <img className="menu-image" src={item.img} alt={item.name} onError={(e) => console.error(`Error loading image: ${e.target.src}`)}/>
        <h3>{item.name}</h3>
          {/*Price + Cart*/}
          <button onClick={selectItem} className="price-and-cart">{buttonText}</button>        
    </div>
  )
}
export default ItemSelectFrame;