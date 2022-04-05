import React, { Component } from "react";
import Container from "./components/Container";

class App extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default App;
