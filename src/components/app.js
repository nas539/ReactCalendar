import React, { Component } from 'react';

import Header from "./header"
import Footer from "./footer"
import Content from "./content/content"

const data = [
  {
    id: 4,
    monthName: "May",
    daysInMonth: 31,
    daysInPreviousMonth: 30,
    startDay: 5,
    year: 2020
  },
  {
    id: 5,
    monthName: "June",
    daysInMonth: 30,
    daysInPreviousMonth: 31,
    startDay: 1,
    year: 2020
  },
  {
    id: 6,
    monthName: "July",
    daysInMonth: 31,
    daysInPreviousMonth: 30,
    startDay: 3,
    year: 2020
  }
]

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header month="June" />
        <Content />
        <Footer year="2020" />
      </div>
    );
  }
}
