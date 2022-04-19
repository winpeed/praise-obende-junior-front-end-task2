import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./cart/index";

class CartItem extends Component {
  handleIncrease = (cartValue) => {
    this.props.increaseDispatch(cartValue);
  };

  handleDecrease = (cartValue) => {
    this.props.decreaseDispatch(cartValue);
  };

  render() {
    const { allItems } = this.props.cartData;
    const { currency } = this.props.currencyData;
    const currencySymbol = allItems[0].products[0].prices.filter(
      (price) => price.currency.label === currency
    );
    const {
      currency: { symbol },
    } = currencySymbol[0];
    const { frequency, value } = this.props.product;
    const { id, name, prices, gallery, attributes } = value;
    return (
      <Cart key={id}>
        <Cart.SectionWrap direction="column">
          <Cart.Name>{name}</Cart.Name>
          <Cart.Price>
            {prices.length !== 0
              ? prices
                  .filter((price) => price.currency.label === currency)
                  .map((price) => {
                    const {
                      amount,
                      currency: { symbol },
                    } = price;
                    return (
                      <Cart.Span key={amount}>
                        {symbol} {(amount * frequency).toFixed(2)}
                      </Cart.Span>
                    );
                  })
              : null}
          </Cart.Price>

          <Cart.Size>
            {attributes.length !== 0
              ? attributes[0].items.map((item) => {
                  return (
                    <Cart.Span
                      key={item.id}
                      style={{
                        background:
                          attributes[0].type === "swatch"
                            ? `${item.value}`
                            : null,
                      }}
                      className={
                        this.props.cartData.size.includes(String(item.value))
                          ? "checked-label"
                          : null
                      }
                    >
                      {attributes[0].type === "text" ? item.value : null}
                    </Cart.Span>
                  );
                })
              : null}
          </Cart.Size>
        </Cart.SectionWrap>

        <Cart.SectionWrap>
          <Cart.ControlWithStyle>
            <Cart.Span onClick={() => this.handleIncrease(id)}>+</Cart.Span>
            <h3> {frequency}</h3>
            <Cart.Span onClick={() => this.handleDecrease(id)}>-</Cart.Span>
          </Cart.ControlWithStyle>

          <Cart.Control>
            <Cart.Picture
              src={`${gallery[0]}`}
              alt={`${gallery[0]}`}
              style={{
                height: "150px",
                width: "100px",
                objectFit: "cover",
              }}
            />
          </Cart.Control>
        </Cart.SectionWrap>
      </Cart>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
