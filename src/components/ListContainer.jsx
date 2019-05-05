import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addItem,
  deselectItem,
  removeItem,
  selectItem
} from "../ducks/groceries";
import ListInputs from "./ListInputs";
import ListSelection from "./ListSelection";
import ListTable from "./ListTable";

const mapStateToProps = ({
  groceries: { list: groceryList },
  groceries: { listSelection }
}) => ({
  groceryList,
  listSelection
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addItem,
      removeItem,
      selectItem,
      deselectItem
    },
    dispatch
  );

class ListContainer extends Component {
  componentDidMount() {
    console.log("groceryList", this.props.groceryList);
  }

  render() {
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={this.props.addItem} />
        </div>
        <div className="types">
          <ListSelection listSelection={this.props.listSelection} />
          <ListTable
            groceries={this.props.groceryList}
            removeItem={this.props.removeItem}
            selectItem={this.props.selectItem}
            deselectItem={this.props.deselectItem}
          />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  listSelection: PropTypes.array.isRequired
  // Other
};

const ListContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainerRedux;
