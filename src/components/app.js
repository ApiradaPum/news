import React from "react";
import { Component } from "react";

import Chat from "../containers/Chat";
import Header from "../containers/Header";

export default class App extends Component {
  render() {
    return (
      <div className="body-background">
        <Header />
        <Chat />
      </div>
    );
  }
}
