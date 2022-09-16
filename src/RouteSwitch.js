import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Card from "./Card/Card";
import Contact from "./Contact/Contact";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import tshirtImg from "./images/tshirt.jpg"
import jeansImg from "./images/jeans.jpg"
import hoodyImg from "./images/hoody.jpg"
import React, { useState } from 'react';

const RouteSwitch = () => {
  const items = [
    {
      name: "T-Shirt",
      price: "10,99€",
      img: tshirtImg,
      id: "001"
    },
    {
      name: "Hoody",
      price: "34,99€",
      img: hoodyImg,
      id: "002"
    },
    {
      name: "Jeans",
      price: "19,39€",
      img: jeansImg,
      id: "003"
    },
  ]

  const [itemsInCart, setItemsInCart] = useState([]);

  function addToCart(e) {
    let id = e.target.parentNode.dataset.id;
    const item = items.filter((ele) => ele.id === id);
    setItemsInCart([...itemsInCart, item[0]])

    let mergedItemsId = itemsInCart.reduce((acc, cur) => {
      if(!acc[cur.id]) {
        acc[cur.id] = 1;
      }
      acc[cur.id] = acc[cur.id] + 1;
      return acc;
    }, {})

    let mergedItems = [];
    for(let prop in mergedItemsId) {
      let id = prop;
      let amount = mergedItemsId[prop];
      let item = getItemById(id, items);
    
      mergedItems.push({
        item,
        amount,
      })
    }
    setItemsInCart(mergedItems)
  }

  function getItemById(id, items) {
    return items.filter((ele) => ele.id === id)[0]
    
  }

  return (
    <>
        <BrowserRouter>
        <Nav itemsInCart={itemsInCart}/>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products items={items} addToCart={addToCart}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/card" element={<Card />} />
        </Routes>
        </BrowserRouter>
    </>
  );
};

export default RouteSwitch;