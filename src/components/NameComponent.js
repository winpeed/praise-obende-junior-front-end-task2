import React, { Component } from "react";
import { connect } from "react-redux";
import { numberAction } from "../redux/actions/numberAction";

class NameComponent extends Component {
  handleChange = (typeValue, nameValue) => {
    console.log(typeValue, nameValue);
    this.props.nameDispatch(typeValue, nameValue);
  };

  handleNumber = (typo, numero) => {
    this.props.numberDispatch(typo, numero);
  };

  render() {
    const { number } = this.props.numberVal;
    const { name } = this.props.nameVal;

    console.log(name);
    console.log(this.props);

    const id = "Praise";
    return (
      <>
        <div>{name}</div>
        <button onClick={() => this.handleChange("NAME", id)}>
          Change Name
        </button>

        <div>Number: {number}</div>
        <button onClick={() => this.handleNumber("INCREASE", 2)}>
          Increase by 2
        </button>
        <button onClick={() => this.handleNumber("DECREASE", 1)}>
          Decrease by 1
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nameVal: state.nameReducer,
    numberVal: state.numberReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nameDispatch: (typeValue, nameValue) =>
      dispatch({ type: typeValue, payload: nameValue }),
    numberDispatch: (typeValue, numberValue) =>
      dispatch({ type: typeValue, payload: numberValue }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameComponent);
