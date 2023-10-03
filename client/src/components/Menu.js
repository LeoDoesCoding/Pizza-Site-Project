import React, { useState, useEffect } from 'react';
import '../styles/menu.css';
import '../styles/shared.css';
import ItemFrame from "./ItemFrame"

function FoodMenu() {
  const [backendData, setBackendData] = useState([{}]);
  const [Size, setSize] = React.useState('mid');
  const [Base, setBase] = React.useState('TI');

  //Fetch data from backend
  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);


  return (
    <><div className="menuGrid shadedBox">
      {/*For each item in Menu, generate an itembox.*/}
      {(typeof backendData.menu === 'undefined') ? (
        <p>There was an error loading the information.</p>
      ) : (
        backendData.menu.map((item, i) => (
          <><ItemFrame item={item} buttonText={'Add to Cart'}/></>
        ))
      )}
    </div></>
  )
}
export default FoodMenu;