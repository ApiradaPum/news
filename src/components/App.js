import React from "react";
import { Component } from "react";

import '../style/main.scss';

import Header from "../containers/Header";
import NewsSection from "../containers/NewsSection";
import Footer from "../containers/Footer";

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
