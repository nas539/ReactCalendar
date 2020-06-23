import React, { Component } from 'react';

import Header from "./header"
import Footer from "./footer"
import Content from "./content/content"



export default class App extends Component {
  constructor() {
    super()

    this.state = {
      id: "",
      month: "",
      daysInMonth: "",
      daysInPreviousMonth: "",
      startDay: "",
      year: ""
    }
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/month/get", { method: "GET" })
    .then(response => response.json())
    .then(data => {
      const month = data[1];

    this.setState({
      id: month.id,
      month: month.month,
      daysInMonth: month.daysInMonth,
      daysInPreviousMonth: month.daysInPreviousMonth,
      startDay: month.startDay,
      year: month.year
    })
    })
    .catch(error => console.log(error))
  }

  handleMonthChange(direction) {
    const month = direction === "+" 
                  ? data[this.state.id + 1] 
                  : data[this.state.id - 1] 

    this.setState({
      id: month.id,
      month: month.month,
      daysInMonth: month.daysInMonth,
      daysInPreviousMonth: month.daysInPreviousMonth,
      startDay: month.startDay,
      year: month.year
   })
   
  }

  render() {
    return (
      <div className='app'>
        <Header month={this.state.month} handleMonthChange={this.handleMonthChange} />
        <Content 
          daysInMonth={this.state.daysInMonth} 
          daysInPreviousMonth={this.state.daysInPreviousMonth} 
          startDay={this.state.startDay}
        />
        <Footer year={this.state.year} />
      </div>
    );
  }
}
