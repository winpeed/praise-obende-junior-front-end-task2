import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/product/index";
import ProductComp from "../components/ProductComp";
import NavigationContainer from "./NavigationContainer";

class ClothesContainer extends Component {
  render() {
    const { name, products } = this.props.data[0];
    const { currency } = this.props.currencyData;
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
  const clothesContent = state.productReducer.categories.filter(
    (category) => category.name === "clothes"
  );
  return {
    data: clothesContent,
    currencyData: state.currencyReducer,
  };
}

export default connect(mapStateToProps)(ClothesContainer);
