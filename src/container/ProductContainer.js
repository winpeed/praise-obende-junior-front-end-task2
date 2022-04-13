import React, { Component } from "react";
import ProductComp from "../components/ProductComp";
import { connect } from "react-redux";
import Product from "../components/product/index";
import NavigationContainer from "./NavigationContainer";

class ProductContainer extends Component {
  render() {
    const { currency } = this.props.currencyData;
    const { name, products } = this.props.data[0];
    return (
      <>
        <NavigationContainer />
        <Product>
          <Product.PageTitle>
            {name.slice(0, 1).toUpperCase()}
            {name.slice(1)}
          </Product.PageTitle>
          <Product.Container>
            {products.map((product) => {
              return (
                <ProductComp
                  key={product.id}
                  product={product}
                  currency={currency}
                />
              );
            })}
          </Product.Container>
        </Product>
      </>
    );
  }
}

function mapStateToProps(state) {
  const allContent = state.productReducer.categories.filter(
    (category) => category.name === "all"
  );
  return {
    data: allContent,
    currencyData: state.currencyReducer,
  };
}

export default connect(mapStateToProps)(ProductContainer);
