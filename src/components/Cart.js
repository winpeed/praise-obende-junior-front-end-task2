import React, { Component } from "react";
import Container from "./Container";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Cart extends Component {
  handleIncrease = (cartValue) => {
    this.props.increaseDispatch(cartValue);
  };

  handleDecrease = (cartValue) => {
    this.props.decreaseDispatch(cartValue);
  };

  render() {
    const { allItems, overlayItems } = this.props.cartData;
    const { currency } = this.props.currencyData;
    const currencySymbol = allItems[0].products[0].prices.filter(
      (price) => price.currency.label === currency
    );
    const {
      currency: { symbol },
    } = currencySymbol[0];
    return (
      <Container>
        <h1 className="page--title">CART</h1>
        <section className="cart--main">
          {overlayItems.length !== 0 ? (
            overlayItems.map((item) => {
              const { frequency, value } = item;
              const { id, name, prices, gallery, attributes } = value;
              return (
                <section className="cart--item" key={id}>
                  <section>
                    <h2 className="product--name">{name}</h2>

                    <h5 className="product--price">
                      {prices.length !== 0
                        ? prices
                            .filter(
                              (price) => price.currency.label === currency
                            )
                            .map((price) => {
                              const {
                                amount,
                                currency: { symbol },
                              } = price;
                              return (
                                <span key={amount}>
                                  {symbol} {(amount * frequency).toFixed(2)}
                                </span>
                              );
                            })
                        : null}
                    </h5>

                    <div className="product--size">
                      {attributes.length !== 0
                        ? attributes[0].items.map((item) => {
                            return (
                              <span
                                key={item.id}
                                style={{
                                  background:
                                    attributes[0].type === "swatch"
                                      ? `${item.value}`
                                      : null,
                                }}
                              >
                                {attributes[0].type === "text"
                                  ? item.value
                                  : null}
                              </span>
                            );
                          })
                        : null}
                    </div>
                  </section>

                  <section className="cart--item-right">
                    <div className="cart--controls">
                      <span onClick={() => this.handleIncrease(id)}>+</span>
                      <h3> {frequency}</h3>
                      <span onClick={() => this.handleDecrease(id)}>-</span>
                    </div>

                    <div>
                      <img
                        src={`${gallery[0]}`}
                        alt={`${gallery[0]}`}
                        style={{
                          height: "150px",
                          width: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </section>
                </section>
              );
            })
          ) : (
            <>
              <h3 className="cart--error">There are no items in your cart.</h3>
              <div className="overlay--btn--wrapper">
                <button className="btn--green">
                  <Link to="/products">Shop</Link>
                </button>
              </div>
            </>
          )}
        </section>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
