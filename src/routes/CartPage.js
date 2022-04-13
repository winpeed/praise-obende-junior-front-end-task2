import React, { Component } from "react";
import CartContainer from "../container/CartContainer";
import NavigationContainer from "../container/NavigationContainer";

class CartPage extends Component {
  render() {
    return (
      <>
        <NavigationContainer />
        <CartContainer />
      </>
    );
  }
}

export default CartPage;
