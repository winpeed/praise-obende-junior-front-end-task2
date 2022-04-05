import React, { Component } from "react";
import Container from "./Container";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

class ProductItem extends Component {
  state = {
    numero: 0,
  };

  handlePictureChange = (id) => {
    this.setState({ numero: id });
  };

  handleAddToCart = (productId) => {
    this.props.cartDispatch(productId);
  };

  render() {
    const { product } = this.props;
    const { id, name, inStock, prices, gallery, description, attributes } =
      product;

    const { currency } = this.props.currencyData;
    console.log(this.props);

    return (
      <Container>
        <section className="product--main">
          <section className="product--swatch">
            {gallery.map((pic, index) => {
              return (
                <img
                  key={pic}
                  src={`${pic}`}
                  alt={pic}
                  onMouseEnter={() => this.handlePictureChange(index)}
                  onClick={() => this.handlePictureChange(index)}
                  style={{
                    height: "80px",
                    width: "90px",
                    objectFit: "cover",
                    margin: "0em 1em 1em 0em",
                    border: "1px solid var(--color-gray)",
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </section>

          <section className="product--img">
            <img
              src={`${gallery[this.state.numero]}`}
              alt={gallery[this.state.numero]}
              style={{
                width: "88%",
                objectFit: "cover",
              }}
            />
          </section>

          <section className="product--details">
            <h2 className="product--name">{name}</h2>

            {attributes.length !== 0 ? (
              <h4 className="product--head">
                {" "}
                {attributes[0].type === "swatch" ? "SWATCHES:" : "SIZES:"}
              </h4>
            ) : null}

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
                        {attributes[0].type === "text" ? item.value : null}
                      </span>
                    );
                  })
                : null}
            </div>

            <h4 className="product--head">PRICE:</h4>

            {prices
              .filter((price) => price.currency.label === currency)
              .map((price) => {
                const {
                  amount,
                  currency: { label, symbol },
                } = price;
                return (
                  <h5 className="product--price" key={label}>
                    <span>{symbol}</span>
                    {amount}
                  </h5>
                );
              })}

            <button
              className="product--btn"
              disabled={!inStock}
              onClick={() => this.handleAddToCart(id)}
            >
              {inStock ? "add to cart" : "out of stock"}
            </button>

            <p className="product--desc">
              {description.replace(/<[^>]+>/g, "")}
            </p>
          </section>
        </section>
      </Container>
    );
  }
}

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

function mapStateToProps(state) {
  return {
    currencyData: state.currencyReducer,
    cartData: state.cartReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    cartDispatch: (cartValue) =>
      dispatch({ type: "ADD_TO_CART", payload: cartValue }),
  };
};

export default withParams(
  connect(mapStateToProps, mapDispatchToProps)(ProductItem)
);
