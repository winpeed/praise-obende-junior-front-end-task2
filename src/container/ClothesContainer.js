import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../components/Container";
import NavigationBar from "../components/NavigationBar";
import Product from "../components/Product";

class ClothesContainer extends Component {
  render() {
    const { name, products } = this.props.data[0];
    const { currency } = this.props.currencyData;
    return (
      <>
        <NavigationBar />
        <Container>
          <h1 className="page--title">
            {name.slice(0, 1).toUpperCase()}
            {name.slice(1)}
          </h1>
          <section className="product--container">
            {products.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  currency={currency}
                />
              );
            })}
          </section>
        </Container>
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
