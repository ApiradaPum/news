import React from "react";
import { Component } from "react";

import News from "../containers/News";
import Header from "../containers/Header";

export default class App extends Component {
  render() {
    return (
      <div className="body-background">
        <Header />
        <News />
      </div>
    );
  }
}
