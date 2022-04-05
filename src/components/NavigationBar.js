/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { BsCart } from "react-icons/bs";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CartOverlay from "../components/CartOverlay";
import { connect } from "react-redux";

class NavigationBar extends Component {
  state = {
    onDropDownToggle: false,
    onCartOverlayToggle: false,
  };

  handleDropDownHover = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        onDropDownToggle: !prevState.onDropDownToggle,
      };
    });
  };

  handleDropDownLeave = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        onDropDownToggle: false,
      };
    });
  };

  handleCartOverlayHover = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        onCartOverlayToggle: !prevState.onCartOverlayToggle,
      };
    });
  };

  handleCartOverlayLeave = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        onCartOverlayToggle: false,
      };
    });
  };

  handleCurrencyChange = (typeValue, currencyType) => {
    this.props.currencyDispatch(typeValue, currencyType);
  };

  render() {
    const { categories } = this.props.data;
    const { products } = categories[0];
    const { prices } = products[0];

    const { symbol } = this.props.currencyData;
    const { cartItems } = this.props.cartData;

    return (
      <header>
        <nav className="nav">
          <ul className="nav--left">
            {categories.map((category) => {
              const { name } = category;
              return (
                <li key={name}>
                  <NavLink to={`/products/${name}`}>{name}</NavLink>
                </li>
              );
            })}
          </ul>

          <ul className="nav--center">
            <li>
              <Link to="/cart">
                <RiShoppingBag2Fill
                  style={{
                    fill: "#52d67a",
                    fontSize: "1.6rem",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </li>
          </ul>

          <ul className="nav--right">
            <li>
              <div
                className="nav--arrow--wrapper"
                onClick={this.handleDropDownHover}
              >
                <span className="nav--currency">{symbol}</span>
                {this.state.onDropDownToggle ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowUp />
                )}{" "}
              </div>
              {this.state.onDropDownToggle ? (
                <div
                  className="nav--currency--dropdown"
                  onMouseLeave={this.handleDropDownLeave}
                >
                  {prices.map((price) => {
                    const {
                      currency: { label, symbol },
                    } = price;
                    return (
                      <Link
                        to="/products"
                        key={label}
                        onClick={(event) => {
                          event.preventDefault();
                          this.handleCurrencyChange(label, label);
                        }}
                      >
                        {symbol} {label}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </li>

            <li className="cart--basket">
              <Link
                to="/"
                onClick={this.handleCartOverlayHover}
                style={{
                  pointerEvents: cartItems.length === 0 ? "none" : "auto",
                }}
              >
                <BsCart style={{ fontSize: "1.4rem", cursor: "pointer" }} />
              </Link>
              <span className="cart--basket--number">{cartItems.length}</span>
              {this.state.onCartOverlayToggle ? (
                <CartOverlay onLeave={this.handleCartOverlayLeave} />
              ) : null}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.productReducer,
    currencyData: state.currencyReducer,
    cartData: state.cartReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    currencyDispatch: (typeValue, currencyType) =>
      dispatch({ type: typeValue, payload: currencyType }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
