import React, { useState } from "react";
import "./App.css";

import Header from "./Header";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";
import Footer from "./Footer";

const App = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleAddItem = (text) => {
    setItems((prevItems) => [...prevItems, { text, checked: false }]);
  };

  return (
    <div>
      <Header />
      <AddItem onAddItem={handleAddItem} />
      <ItemsList items={items} setItems={setItems} filter={filter} />
      <Footer itemCount={items.length} filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default App;
