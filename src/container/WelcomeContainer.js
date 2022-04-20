import React, { Component } from "react";
import Product from "../components/product/index";
import { Link } from "react-router-dom";

class WelcomeContainer extends Component {
  render() {
    return (
      <Product>
        <Product.Container welcome>
          <Product.Name>
            You are welcome to Scandiweb E-Commerce Store
          </Product.Name>
          <Link to="/products">
            <Product.OverlayButton>View All Products</Product.OverlayButton>
          </Link>
        </Product.Container>
      </Product>
    );
  }
}

export default WelcomeContainer;
