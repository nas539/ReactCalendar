import React, { Component } from 'react';

import Header from "./header"
import Footer from "./footer"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header month="June" />

        <Footer year="2020" />
      </div>
    );
  }
}
