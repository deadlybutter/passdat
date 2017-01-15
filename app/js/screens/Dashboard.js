import React, { Component } from 'react';
import Header from './Header';
import Card from '../components/Card';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header active="dashboard" />
        <div className="wrapper">
          <div className="container">
            <button className="-default -spacing">Add an account</button>
            <input type="search" placeholder="Search..."></input>
          </div>
          <div className="container">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Dashboard;
