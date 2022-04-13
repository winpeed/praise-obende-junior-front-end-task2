import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Product from "../components/product/";

class ProductComp extends Component {
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
      <Product.Item>
        <Link
          to={`/products/${category}/${id}`}
          onMouseEnter={this.handleCartToggle}
        >
          <Product.Picture src={`${gallery[0]}`} alt={name} />
          <Product.Stock>{inStock ? null : "OUT OF STOCK"}</Product.Stock>
          <Product.Name>{name}</Product.Name>
          {prices
            .filter((price) => price.currency.label === currency)
            .map((price) => {
              const {
                amount,
                currency: { symbol },
              } = price;
              return (
                <Product.Price key={symbol}>
                  <span>{symbol}</span>
                  {amount}
                </Product.Price>
              );
            })}
        </Link>
        {inStock && this.state.cartToggle ? (
          <Product.CartIcon onClick={() => this.handleAddToCart(id)}>
            <AiOutlineShoppingCart />
          </Product.CartIcon>
        ) : null}
      </Product.Item>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductComp);
