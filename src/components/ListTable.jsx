import React from "react";

export default class ListTable extends React.Component {
  handleSelectItem = listItem => {
    this.props.selectItem(listItem);
  };

  handleDeselectItem = itemIndex => {
    this.props.deselectItem(itemIndex);
  };

  handleRemoveItem = itemIndex => {
    this.props.removeItem(itemIndex);
  };

  render() {
    const groceryList = this.props.groceries;

    const tableItems = groceryList.map((listItem, i) => {
      return (
        // 👹 anti-pattern: index used as key
        <tr key={i}>
          <td>{listItem.id}</td>
          <td>{listItem.name}</td>
          <td>{listItem.category}</td>
          <td>{listItem.deliveryMethod}</td>
          <td>
            <button
              onClick={this.handleSelectItem.bind(this, {
                listItem
              })}
            >
              select
            </button>
            <button
              onClick={this.handleDeselectItem.bind(this, {
                id: listItem.id
              })}
            >
              deselect
            </button>
            <button
              onClick={this.handleRemoveItem.bind(this, {
                itemIndex: i
              })}
            >
              remove
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="listTable">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Delivery Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableItems}</tbody>
        </table>
      </div>
    );
  }
}
