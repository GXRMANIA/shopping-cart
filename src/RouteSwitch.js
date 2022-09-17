import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Card from "./Card/Card";
import Contact from "./Contact/Contact";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import black from "./images/black.jpg"
import blue from "./images/blue.jpg"
import brown from "./images/brown.jpg"
import cosmic from "./images/cosmic.jpg"
import striped from "./images/striped.jpg"
import React, { useState, useEffect} from 'react';

const RouteSwitch = () => {
  const items = [
    {
      name: "Mindful Mate black",
      price: "10,99€",
      img: black,
      id: "001"
    },
    {
      name: "Lotuscrafts blue",
      price: "34,99€",
      img: blue,
      id: "002"
    },
    {
      name: "Melon Brown",
      price: "19,39€",
      img: brown,
      id: "003"
    },
    {
      name: "Cosmic Galaxy",
      price: "19,39€",
      img: cosmic,
      id: "004"
    },
    {
      name: "Yogamatte Striped",
      price: "19,39€",
      img: striped,
      id: "005"
    },
  ]

  const [itemsInCart, setItemsInCart] = useState([])
  const [tempItems, setTempItems] = useState([])

  function addToCart(e) {
    let id = e.target.parentNode.dataset.id;
    const item = items.filter((ele) => ele.id === id);
    console.log(tempItems)
    setTempItems([...tempItems, item[0]])
    let mergedItemsId = tempItems.reduce((acc, cur) => {
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

  function changeAmount(e) {
    let id = e.target.parentNode.parentNode.dataset.id;
    let value = e.target.textContent;
    let updatedItems = itemsInCart.map(ele => {
      if(ele.item.id === id) {
        if(value === "+") ele.amount++;
        else ele.amount--;
      }
      return ele;
    })
    // check if amount is zero
    let onlyItemsInCartWithAmount = updatedItems.filter(ele => ele.amount > 0)
    setItemsInCart(onlyItemsInCartWithAmount)
  }

  return (
    <>
        <BrowserRouter>
        <Nav itemsInCart={itemsInCart}/>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products items={items} addToCart={addToCart}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/card" element={<Card itemsInCart={itemsInCart} changeAmount={changeAmount}/>} />
        </Routes>
        </BrowserRouter>
    </>
  );
};

export default RouteSwitch;