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
      id: "1"
    },
    {
      name: "Hoody",
      price: "34,99€",
      img: hoodyImg,
      id: "2"
    },
    {
      name: "Jeans",
      price: "19,39€",
      img: jeansImg,
      id: "3"
    },
  ]

  const [itemsInCart, setItemsInCart] = useState(0);

  return (
    <>
        <BrowserRouter>
        <Nav itemsInCart={itemsInCart}/>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products items={items}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/card" element={<Card />} />
        </Routes>
        </BrowserRouter>
    </>
  );
};

export default RouteSwitch;