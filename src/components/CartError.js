import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./product";

export class CartError extends Component {
  render() {
    return (
      <>
        <Product.OverlayWrapper>
          <Product.Name>There are no items in your cart.</Product.Name>
          <Product.OverlayButton>
            <Link to="/products">Shop</Link>
          </Product.OverlayButton>
        </Product.OverlayWrapper>
      </>
    );
  }
}

export default CartError;
