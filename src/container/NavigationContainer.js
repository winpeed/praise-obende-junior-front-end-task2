/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { BsCart } from "react-icons/bs";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CartOverlay from "../components/CartOverlay";
import { connect } from "react-redux";
import Header from "../components/header/index";

class NavigationContainer extends Component {
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
        onDropDownToggle: !prevState.onDropDownToggle,
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
    const { cartItems, overlayItems } = this.props.cartData;

    return (
      <Header>
        <Header.Nav>
          <Header.UnorderedLeft>
            {categories.map((category) => {
              const { name } = category;
              return (
                <Header.ListItem key={name}>
                  <NavLink to={`/products/${name}`}>{name}</NavLink>
                </Header.ListItem>
              );
            })}
          </Header.UnorderedLeft>

          <Header.UnorderedCenter>
            <Header.ListItem>
              <RiShoppingBag2Fill
                style={{
                  fill: "#52d67a",
                  fontSize: "1.6rem",
                  cursor: "pointer",
                }}
              />
            </Header.ListItem>
          </Header.UnorderedCenter>

          <Header.UnorderedRight>
            <Header.ListItem>
              <Header.Wrapper onClick={this.handleDropDownHover}>
                <Header.Span>{symbol}</Header.Span>
                {this.handleDropDownHover ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowUp />
                )}{" "}
              </Header.Wrapper>

              {this.state.onDropDownToggle ? (
                <Header.CurrencyDropdown
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
                          this.handleDropDownLeave;
                        }}
                      >
                        {symbol} {label}
                      </Link>
                    );
                  })}
                </Header.CurrencyDropdown>
              ) : null}
            </Header.ListItem>

            <Header.ListItem className="cart--basket">
              <Link
                to="/"
                onClick={this.handleCartOverlayHover}
                style={{
                  pointerEvents: cartItems.length === 0 ? "none" : "auto",
                }}
              >
                <BsCart style={{ fontSize: "1.4rem", cursor: "pointer" }} />
              </Link>
              <Header.Span className="cart--basket--number">
                {overlayItems.length}
              </Header.Span>
              {this.state.onCartOverlayToggle ? (
                <CartOverlay onLeave={this.handleCartOverlayLeave} />
              ) : null}
            </Header.ListItem>
          </Header.UnorderedRight>
        </Header.Nav>
      </Header>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
