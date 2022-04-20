import React, { Component } from "react";
import Container from "./components/Container";
import NavigationContainer from "./container/NavigationContainer";
import WelcomeContainer from "./container/WelcomeContainer";
import ClothesContainer from "./container/ClothesContainer";
import TechContainer from "./container/TechContainer";
import ProductContainer from "./container/ProductContainer";
import SingleTechContainer from "./container/SingleTechContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./routes/CartPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationContainer />

        <Routes>
          <Route path="/" element={<WelcomeContainer />} />
          <Route path="products" element={<ProductContainer />}></Route>
          <Route path="products/all" element={<ProductContainer />} />
          <Route path="products/clothes" element={<ClothesContainer />} />
          <Route path="products/tech" element={<TechContainer />} />

          <Route
            path="products/clothes/:productId"
            element={<SingleTechContainer />}
          />
          <Route
            path="products/tech/:productId"
            element={<SingleTechContainer />}
          />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" component={() => <h2>404 Not Found </h2>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
