import React, { useState, useEffect } from 'react';
import '../styles/menu.css';

function ItemFrame({item}) {
  const [backendData, setBackendData] = useState([{}]);
  const [Size, setSize] = React.useState('mid');
  const [Base, setBase] = React.useState('TI');
  const [price, setPrice] = useState(0);

  //Fetch data from backend
  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);

  const calculatePrice = (size) => {
    const sizeToPrice = {
      small: 0,
      mid: 2,
      large: 4,
      pe: 8
    };

    // Set the price based on the selected size
    setPrice(sizeToPrice[size]);
  };

  //Dropdown changes.
  const changeSize = (event) => {
    setSize(event.target.Size);
    calculatePrice(event.target.value);
    };
  
    const changeBase = (event) => {
    setBase(event.target.Base);
    };

  return (
    <div key={item.id} className="menu-item">
        <img className="menu-image" src={item.img} alt={item.name} onError={(e) => console.error(`Error loading image: ${e.target.src}`)}/>
        <h3>{item.name}</h3>

        {/*Size dropdown*/}
        <div className="selection-box"><label className="box-item">Size:</label>
          <select value={Size} label="Select size" id="selectSize" onChange={changeSize}>
              <option value="small">Small (8")</option>
              <option value="mid">Medium (12")</option>
              <option value="large">Large (16")</option>
              <option value="pe">Pizzanormous (20")</option>
          </select>

          {/*Base dropdown*/}
          <label className="box-item">Base:</label>
          <select value={Base} label="Select base" id="selectBase" onChange={changeBase}>
              <option value="TI">Thin Italian</option>
              <option value="SC">Stone Crust</option>
              <option value="CSC">Cheese Stuffed Crust</option>
              <option value="V">Vegan</option>
              <option value="GF">Gluten-Free</option>
          </select>

          {/*Price + Cart*/}
          <p className="price-and-cart">£{parseInt(price) + parseInt(item.price)}</p><button className="price-and-cart">Add to Cart</button>        
          </div>
    </div>
  )
}
export default ItemFrame;