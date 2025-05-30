import { useState } from "react";
import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

import products from './db/data';
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // ---------Input Filter------------
  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

const filteredItems = products.filter((product) =>
  product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
);


  // -------------Radio Filter-------------
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }  

    // -------------Button Filter-------------
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }  

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input Items
    if(query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if(selected) {
      filteredProducts = filteredProducts.filter((
        {category, color, newPrice, company, title}
      ) => {
        return (
        category === selected ||
        color === selected ||
        newPrice === selected ||
        company === selected ||
        title === selected
        )
      })
    }

    return filteredProducts.map((
      {img, title, star, reviews, newPrice, prevPrice}
    ) => (
      <Card
        key={Math.random()}
        img = {img}
        title = {title}
        star = {star}
        reviews = {reviews}
        newPrice = {newPrice}
        prevPrice = {prevPrice}
      />
    ))
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange = {handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  )
}

export default App
