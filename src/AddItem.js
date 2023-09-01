import React, { useState } from "react";

const AddItem = ({ onAddItem }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text.trim() !== "") {
      onAddItem(text);
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter item"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddItem;
