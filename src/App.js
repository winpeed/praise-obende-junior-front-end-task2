import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "./components/Container";
import Product from "./components/product";
import NavigationContainer from "./container/NavigationContainer";

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationContainer />
        <Product.Container
          style={{
            marginTop: "14em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Product.Name>
            You are welcome to Scandiweb E-Commerce Store
          </Product.Name>
          <Product.OverlayButton>
            <Link to="/products">View All Products</Link>
          </Product.OverlayButton>
        </Product.Container>
        {this.props.children}
      </Container>
    );
  }
}

export default App;
