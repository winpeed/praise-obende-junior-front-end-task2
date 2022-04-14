import React, { Component } from "react";
import Container from "./Container";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "./product";

class ProductItem extends Component {
  state = {
    numero: 0,
    toggle: true,
  };

  handleToggle = (event) => {
    console.log(event.target.value);

    this.setState((prevState) => {
      return {
        ...prevState,
        toggle: !prevState.toggle,
      };
    });
  };

  handlePictureChange = (id) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        numero: id,
      };
    });
  };

  handleSubmit = (productId) => {
    this.props.cartDispatch(productId);
  };

  render() {
    const { product } = this.props;
    const { id, name, inStock, prices, gallery, description, attributes } =
      product;

    const { currency } = this.props.currencyData;

    return (
      <Container>
        <Product.Main>
          <Product.Swatch>
            {gallery.map((pic, index) => {
              return (
                <Product.Picture
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
          </Product.Swatch>

          <Product.ImageWrapper>
            <Product.Picture
              src={`${gallery[this.state.numero]}`}
              alt={gallery[this.state.numero]}
              style={{
                width: "88%",
                objectFit: "cover",
              }}
            />
          </Product.ImageWrapper>

          <Product.DetailsWrapper>
            <Product.NameHeading>{name}</Product.NameHeading>
            {attributes.length !== 0 ? (
              <Product.HeadTitle>
                {attributes[0].type === "swatch" ? "SWATCHES:" : "SIZES:"}
              </Product.HeadTitle>
            ) : null}

            {/* <Product.Span
              key={item.id}
              style={{
                background:
                  attributes[0].type === "swatch" ? `${item.value}` : null,
              }}
            >
              {attributes[0].type === "text" ? item.value : null}
            </Product.Span> */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                this.handleSubmit(id);
              }}
            >
              <Product.Size>
                {attributes.length !== 0
                  ? attributes[0].items.map((item) => {
                      return (
                        <div key={item.id}>
                          <input
                            type="radio"
                            value={item.value}
                            className="radios"
                            id={item.value}
                            name={name}
                            onChange={this.handleToggle}
                            required
                          />
                          <label
                            htmlFor={item.value}
                            className="radio-label"
                            style={{
                              background:
                                attributes[0].type === "swatch"
                                  ? `${item.value}`
                                  : null,
                              color:
                                attributes[0].type === "swatch"
                                  ? `${item.value}`
                                  : null,
                            }}
                          >
                            {item.value}
                          </label>
                        </div>
                      );
                    })
                  : null}
              </Product.Size>

              <Product.HeadTitle>PRICE:</Product.HeadTitle>

              {prices
                .filter((price) => price.currency.label === currency)
                .map((price) => {
                  const {
                    amount,
                    currency: { label, symbol },
                  } = price;
                  return (
                    <Product.Price key={label}>
                      {" "}
                      <Product.Span>{symbol}</Product.Span>
                      {amount}
                    </Product.Price>
                  );
                })}

              <Product.Button disabled={!inStock}>
                {inStock ? "add to cart" : "out of stock"}
              </Product.Button>
            </form>

            <Product.Description>
              {description.replace(/<[^>]+>/g, "")}
            </Product.Description>
          </Product.DetailsWrapper>
        </Product.Main>
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
