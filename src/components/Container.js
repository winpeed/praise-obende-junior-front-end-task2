import React, { Component } from "react";

class Container extends Component {
  render() {
    return (
      <>
        <main className="container">{this.props.children}</main>
      </>
    );
  }
}

export default Container;
