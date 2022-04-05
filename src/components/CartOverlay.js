import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class CartOverlay extends Component {
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
      <section className="overlay" onMouseLeave={this.props.onLeave}>
        <h4 className="overlay--info">
          My Bag, <span>{overlayItems.length}</span> item(s)
        </h4>
        {overlayItems.length !== 0 ? (
          overlayItems.map((item) => {
            const { frequency, value } = item;
            const { id, name, prices, gallery, attributes } = value;
            return (
              <section className="overlay--product--item" key={id}>
                <div className="overlay--product--details">
                  <h5 className="overlay--product--name">{name}</h5>
                  {prices.length !== 0 ? (
                    prices
                      .filter((price) => price.currency.label === currency)
                      .map((price) => {
                        const {
                          amount,
                          currency: { symbol },
                        } = price;
                        return (
                          <p className="overlay--product--price" key={price}>
                            {" "}
                            <span>{symbol}</span>
                            {(amount * frequency).toFixed(2)}
                          </p>
                        );
                      })
                  ) : (
                    <p>No results yet</p>
                  )}

                  <p className="overlay--product--size">
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
                  </p>
                </div>
                <div className="cart--controls">
                  <span onClick={() => this.handleIncrease(id)}>+</span>
                  <p>{frequency}</p>
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

        {overlayItems.length !== 0 ? (
          <>
            {" "}
            <div className="overlay--total">
              <h5>Total</h5>
              <h5>
                <span>{symbol}</span>100
              </h5>
            </div>
            <div className="overlay--btn--wrapper">
              <button className="btn--white">
                <Link to="/cart"> View Bag</Link>
              </button>
              <button className="btn--green">Check bag</button>
            </div>
          </>
        ) : null}
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
