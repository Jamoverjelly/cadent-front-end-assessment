import React from 'react';
import PropTypes from 'prop-types';

export const ListInputs = ({ addItem }) => {
  const createItem = () => {
    const item = {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    }

    addItem(item);
  }

  return (
    <button
      className="addItemButton"
      onClick={createItem}
    >
      Add Random Item
    </button>
  );
};

ListInputs.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default ListInputs;
