import React from "react";
import "../src/styles/style.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Products from "./container/Products";
import CartPage from "./routes/CartPage";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import ClothesContainer from "./container/ClothesContainer";
import TechContainer from "./container/TechContainer";
import ProductContainer from "./container/ProductContainer";
import SingleTechContainer from "./container/SingleTechContainer";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="products" element={<Products />}></Route>
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
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);