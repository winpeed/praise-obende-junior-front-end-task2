import React, { Component } from "react";
import Container from "./components/Container";
import NavigationContainer from "./container/NavigationContainer";
import WelcomeContainer from "./container/WelcomeContainer";

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationContainer />
        <WelcomeContainer />
        {this.props.children}
      </Container>
    );
  }
}

export default App;
