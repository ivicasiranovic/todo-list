import React from "react";

const ItemsList = ({ items, setItems, filter }) => {
  const handleCheckboxChange = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = {
        ...updatedItems[index],
        checked: !updatedItems[index].checked,
      };
      return updatedItems;
    });
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, itemIndex) => itemIndex !== index);
    setItems(updatedItems);
  };

  const filteredItems = items.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Active") return !item.checked;
    if (filter === "Completed") return item.checked;
    return false;
  });

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheckboxChange(index)}
          />
          <span
            style={{ textDecoration: item.checked ? "line-through" : "none" }}
          >
            {item.text}
          </span>
          <button
            className="remove-button"
            onClick={() => handleRemoveItem(index)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
