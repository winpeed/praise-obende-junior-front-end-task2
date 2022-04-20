import React, { Component } from "react";
import ProductItem from "../components/ProductItem";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

class SingleTechContainer extends Component {
  render() {
    const product = this.props.data[0];

    return (
      <>
        <ProductItem product={product} />
      </>
    );
  }
}

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

function mapStateToProps(state, ownProps) {
  const techContent = state.productReducer.categories.filter(
    (category) => category.name === "all"
  );

  const techProducts = techContent[0].products.filter(
    (product) => product.id === ownProps.params.productId
  );

  return { data: techProducts };
}

export default withParams(connect(mapStateToProps)(SingleTechContainer));
