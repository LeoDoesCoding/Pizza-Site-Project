import React, { useState, useEffect } from 'react';
import '../styles/menu.css';
import '../styles/shared.css';
import ItemSelectFrame from "./ItemSelectFrame"

function HalfHalf() {
  const [backendData, setBackendData] = useState([{}]);
  const [Size, setSize] = React.useState('mid');
  const [Base, setBase] = React.useState('TI');
  //Setup combine image defaults
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  //Fetch data from backend
  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });

      const canvas = document.createElement('canvas');
      canvas.width = image1.width;
      canvas.height = image1.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(image1, 0, 0, canvas.width / 2, canvas.height);
      ctx.drawImage(image2, canvas.width / 2, 0, canvas.width / 2, canvas.height);

      const combinedImageUrl = canvas.toDataURL(); // Convert canvas to data URL
      setCombinedImage(combinedImageUrl);
  }, []);


  //When selection is made, return id and change image
  const idFromLeft = (data) => {
    setImage1(data);
  };

  const idFromRight = (data) => {
    setImage2(data);
  };


  return (
    <><h2>50\50 Pizzas</h2>
    {/*Item Display*/}
    <div className="shadedBox">
      <><ItemFrame i={i} item={combinedImageUrl} buttonText={'Add to Cart'}/></>
    </div>


    {/*Section 1*/}
    <div className="halfContainer"><div className="menuGrid shadedBox">
      {/*For each item in Menu, generate an itembox.*/}
      {(typeof backendData.menu === 'undefined') ? (
        <p>There was an error loading the information.</p>
      ) : (
        backendData.menu.map((item, i) => (
          <><ItemSelectFrame i={i} item={item} buttonText={'Select'} sendDataToParent={idFromLeft}/></>
        ))
      )}
    </div></div>

    {/*Section 2*/}
    <div className="halfContainer"><div className="menuGrid shadedBox">
    {/*For each item in Menu, generate an itembox.*/}
    {(typeof backendData.menu === 'undefined') ? (
      <p>There was an error loading the information.</p>
    ) : (
      backendData.menu.map((item, i) => (
        <><ItemSelectFrame i={i} item={item} buttonText={'Select'} sendDataToParent={idFromRight}/></>
      ))
    )}
    </div></div></>
  )
}
export default HalfHalf;