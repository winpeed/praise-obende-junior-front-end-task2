import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export class Product extends Component {
  state = {
    cartToggle: false,
  };

  handleCartToggle = () => {
    this.setState(() => {
      return {
        cartToggle: true,
      };
    });
  };

  handleAddToCart = (productID) => {
    this.props.cartDispatch(productID);
  };

  render() {
    const { product } = this.props;
    const { name, id, gallery, category, prices, inStock } = product;

    const { currency } = this.props;

    return (
      <div className="product--page--item">
        <Link
          to={`/products/${category}/${id}`}
          onMouseEnter={this.handleCartToggle}
          className="link--wrapper"
        >
          <img
            src={`${gallery[0]}`}
            alt={name}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />

          <h2 className="product--stock">{inStock ? null : "OUT OF STOCK"}</h2>
          <h3 className="product--page--name">{name}</h3>

          {prices
            .filter((price) => price.currency.label === currency)
            .map((price) => {
              const {
                amount,
                currency: { symbol },
              } = price;
              return (
                <p className="product--page--price" key={symbol}>
                  <span>{symbol}</span>
                  {amount}
                </p>
              );
            })}
        </Link>
        {inStock && this.state.cartToggle ? (
          <h2
            className="product--cart--icon"
            onClick={() => this.handleAddToCart(id)}
          >
            <AiOutlineShoppingCart />
          </h2>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const allContent = state.productReducer.categories.filter(
    (category) => category.name === "all"
  );
  return {
    data: allContent,
    cartData: state.cartReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    cartDispatch: (cartValue) =>
      dispatch({ type: "ADD_TO_CART", payload: cartValue }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
