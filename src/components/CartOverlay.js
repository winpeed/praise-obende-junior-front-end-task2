import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Overlay from "./overlay";

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

    console.log(currency);
    console.log(overlayItems);
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
      <Overlay onMouseLeave={this.props.onLeave}>
        <Overlay.Info>
          My Bag, <span>{overlayItems.length}</span> item(s)
        </Overlay.Info>
        {overlayItems.length !== 0 ? (
          overlayItems.map((item) => {
            const { frequency, value } = item;
            const { id, name, prices, gallery, attributes } = value;
            return (
              <Overlay.ProductItem key={id}>
                <Overlay.ProductWrapper min="true">
                  <Overlay.ProductName>{name}</Overlay.ProductName>
                  {prices.length !== 0 ? (
                    prices
                      .filter((price) => price.currency.label === currency)
                      .map((price) => {
                        const {
                          amount,
                          currency: { symbol },
                        } = price;
                        return (
                          <Overlay.ProductPrice key={price}>
                            <Overlay.Span>{symbol}</Overlay.Span>
                            {(amount * frequency).toFixed(2)}
                          </Overlay.ProductPrice>
                        );
                      })
                  ) : (
                    <p>No results yet</p>
                  )}
                  <Overlay.ProductSize>
                    {attributes.length !== 0
                      ? attributes[0].items.map((item) => {
                          return (
                            <Overlay.Span
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
                            </Overlay.Span>
                          );
                        })
                      : null}
                  </Overlay.ProductSize>
                </Overlay.ProductWrapper>

                <Overlay.ProductWrapper>
                  <Overlay.Span onClick={() => this.handleIncrease(id)}>
                    +
                  </Overlay.Span>
                  <Overlay.ProductPrice>{frequency}</Overlay.ProductPrice>
                  <Overlay.Span onClick={() => this.handleDecrease(id)}>
                    -
                  </Overlay.Span>
                </Overlay.ProductWrapper>

                <Overlay.ProductWrapper>
                  <Overlay.ProductImage
                    src={`${gallery[0]}`}
                    alt={`${gallery[0]}`}
                    style={{
                      height: "150px",
                      width: "100px",
                      objectFit: "cover",
                    }}
                  />
                </Overlay.ProductWrapper>
              </Overlay.ProductItem>
            );
          })
        ) : (
          <>
            <Overlay.ErrorMsg>
              There are no items in your cart.
            </Overlay.ErrorMsg>
            <Overlay.ButtonWrapper>
              <Overlay.Button color="green">
                <Link to="/products">Shop</Link>
              </Overlay.Button>
            </Overlay.ButtonWrapper>
          </>
        )}

        {overlayItems.length !== 0 ? (
          <>
            <Overlay.Total>
              <Overlay.ProductName bold="true">Total</Overlay.ProductName>
              <Overlay.ProductName bold="true">
                <Overlay.Span>{symbol}</Overlay.Span>
                {totalValue.toFixed(2)}
              </Overlay.ProductName>
            </Overlay.Total>
            <Overlay.ButtonWrapper>
              <Overlay.Button>
                <Link to="/cart"> View Bag</Link>
              </Overlay.Button>
              <Overlay.Button color="green">
                <Link to="/cart" color="green">
                  {" "}
                  Check bag
                </Link>
              </Overlay.Button>
            </Overlay.ButtonWrapper>
          </>
        ) : null}
      </Overlay>
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
