import React from "react";

const Footer = ({ itemCount, filter, setFilter }) => {
  return (
    <footer>
      <p>
        {itemCount} {itemCount === 1 ? "item" : "items"} left.
      </p>
      <div>
        <button
          onClick={() => setFilter("All")}
          className={filter === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Active")}
          className={filter === "Active" ? "active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("Completed")}
          className={filter === "Completed" ? "active" : ""}
        >
          Completed
        </button>
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
