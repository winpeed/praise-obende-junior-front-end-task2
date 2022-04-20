import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import CartError from "../components/CartError";
import Product from "../components/product/index";
import Overlay from "../components/overlay";

export class CartContainer extends Component {
  render() {
    const { allItems, overlayItems } = this.props.cartData;
    const { currency } = this.props.currencyData;
    const currencySymbol = allItems[0].products[0].prices.filter(
      (price) => price.currency.label === currency
    );
    const {
      currency: { symbol },
    } = currencySymbol[0];

    const totalArray = overlayItems.map((item) => {
      const priceItem = item.value.prices.filter((currValue) => {
        return currValue.currency.label === currency;
      });

      const newItem = item.frequency * priceItem[0].amount;
      return newItem;
    });
    const totalValue =
      totalArray.length === 0
        ? 0
        : totalArray.reduce((acc, value) => {
            return acc + value;
          });

    return (
      <Product>
        <Product.PageTitle>CART</Product.PageTitle>
        <Product.Container>
          {overlayItems.length !== 0 ? (
            overlayItems.map((item) => {
              return <CartItem product={item} key={item} />;
            })
          ) : (
            <CartError />
          )}
          {overlayItems.length !== 0 ? (
            <>
              <Overlay.Total specified>
                <Overlay.ProductName bold="true">Total</Overlay.ProductName>
                <Overlay.ProductName bold="true">
                  <Overlay.Span>{symbol}</Overlay.Span>
                  {totalValue.toFixed(2)}
                </Overlay.ProductName>
              </Overlay.Total>
            </>
          ) : null}
        </Product.Container>
      </Product>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencyData: state.currencyReducer,
    cartData: state.cartReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseDispatch: (cartValue) =>
      dispatch({ type: "INCREASE_FREQUENCY", payload: cartValue }),
    decreaseDispatch: (cartValue) =>
      dispatch({ type: "DECREASE_FREQUENCY", payload: cartValue }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
