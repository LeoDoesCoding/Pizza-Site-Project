import React, { useState, useEffect } from 'react';
import '../styles/menu.css';
import '../styles/shared.css';
import ItemSelectFrame from "./ItemSelectFrame"
import ItemFrameSplit from "./ItemFrameSplit"

function HalfHalf() {
  const [backendData, setBackendData] = useState([{}]);
  const [Size, setSize] = useState('mid');
  const [Base, setBase] = useState('TI');
  const [rightID, setRightID] = useState(1);
  const [leftID, setLeftID] = useState(1);

  //Fetch data from backend
  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);


  //When selection is made, return id and change image
  const idFromLeft = (leftdata) => {
    console.log('Left ID:', leftdata);
    setRightID(leftdata);
  };

  const idFromRight = (rightdata) => {
    console.log('Right ID:', rightdata);
    setLeftID(rightdata);
  };


  return (
    <>
    {/*Item Display*/}
    <div className="shadedBox">
    {(typeof backendData.menu === 'undefined') ? (
        <p>There was an error loading the information.</p>
      ) : (
      <><ItemFrameSplit item={backendData.menu[rightID]} item2={backendData.menu[leftID]} buttonText={'Add to Cart'}/></>
      )}
      </div>


    {/*Section 1*/}
    <div className="halfContainer"><div className="menuGrid shadedBox">
      {/*For each item in Menu, generate an itembox.*/}
      {(typeof backendData.menu === 'undefined') ? (
        <p>There was an error loading the information.</p>
      ) : (
        backendData.menu.map((item, i) => (
          <><ItemSelectFrame item={item} buttonText={'Select'} sendDataToParent={idFromLeft}/></>
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
        <><ItemSelectFrame item={item} buttonText={'Select'} sendDataToParent={idFromRight}/></>
      ))
    )}
    </div></div></>
  )
}
export default HalfHalf;