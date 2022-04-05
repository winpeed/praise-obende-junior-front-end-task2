import React, { Component } from "react";
import Container from "../components/Container";
import Product from "../components/Product";
import { connect } from "react-redux";
import NavigationBar from "../components/NavigationBar";
import NotificationBar from "../components/NotificationBar";

class ProductContainer extends Component {
  render() {
    const { currency } = this.props.currencyData;
    const { name, products } = this.props.data[0];
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
        <NotificationBar />
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
