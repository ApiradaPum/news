import React from "react";
import { Component } from "react";

import '../style/main.scss';

import HeaderSection from "./HeaderSection";
import NewsSection from "./NewsSection";
import FooterSection from "./FooterSection";

export default class App extends Component {
  render() {
    return (
      <div className="app body-background">
        <HeaderSection />
        <NewsSection />
        <FooterSection />
      </div>
    );
  }
}
