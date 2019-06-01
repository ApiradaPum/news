import React from "react";
import { Component } from "react";

import '../style/main.scss';

import Header from "./Header";
import NewsSection from "./NewsSection";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <div className="body-background">
        <Header />
        <NewsSection />
        <Footer />
      </div>
    );
  }
}
