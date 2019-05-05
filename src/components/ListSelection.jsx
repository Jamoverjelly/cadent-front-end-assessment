import React from "react";

const ListSelection = props => {
  const listSelection = props.listSelection;
  console.log(listSelection);
  const selectTable = listSelection.map((item, i) => {
    return (
      // 👹 anti-pattern: index used as key
      <tr key={i}>
        <td>{item.listItem.name}</td>
        <td>{item.listItem.category}</td>
      </tr>
    );
  });
  return (
    <div className="listSelection">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{selectTable}</tbody>
      </table>
    </div>
  );
};

export default ListSelection;
