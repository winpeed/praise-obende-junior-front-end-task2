import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import CartError from "../components/CartError";
import Product from "../components/product/index";

export class CartContainer extends Component {
  render() {
    const { overlayItems } = this.props.cartData;
    return (
      <Product>
        <Product.PageTitle>CART</Product.PageTitle>
        <Product.Container>
          {overlayItems.length !== 0 ? (
            overlayItems.map((item) => {
              return <CartItem product={item} key={item} />;
            })
          ) : (
            <CartError />
          )}
        </Product.Container>
      </Product>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencyData: state.currencyReducer,
    cartData: state.cartReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseDispatch: (cartValue) =>
      dispatch({ type: "INCREASE_FREQUENCY", payload: cartValue }),
    decreaseDispatch: (cartValue) =>
      dispatch({ type: "DECREASE_FREQUENCY", payload: cartValue }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
