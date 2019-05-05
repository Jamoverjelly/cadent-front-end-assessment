import PropTypes from "prop-types";
import React from "react";

export const ListInputs = ({ addItem }) => {
  const createItem = () => {
    const item = {
      id: 10,
      name: "Roasted Turkey",
      category: "Deli",
      deliveryMethod: "Ground"
    };

    addItem(item);
  };

  return (
    <div>
      <button className="addItemButton" onClick={createItem}>
        Add Random Item
      </button>
    </div>
  );
};

ListInputs.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default ListInputs;
