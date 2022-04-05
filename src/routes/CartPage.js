import React, { Component } from "react";
import Cart from "../components/Cart";
import NavigationBar from "../components/NavigationBar";

class CartPage extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Cart />
      </>
    );
  }
}

export default CartPage;
