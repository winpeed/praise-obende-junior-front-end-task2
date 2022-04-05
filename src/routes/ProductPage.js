import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import ProductItem from "../components/ProductItem";

export class ProductPage extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <ProductItem />
      </>
    );
  }
}

export default ProductPage;
