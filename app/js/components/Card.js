import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1>{this.props.account.name}</h1>
        <div className="card__fields">
          <button className="card__field" data-field={this.props.account.email}>email</button>
          <button className="card__field" data-field={this.props.account.password}>password</button>
        </div>
        <button className="card__edit">edit</button>
      </div>
    );
  }
}

Card.defaultProps = {
  account: {
    name: 'Default',
    email: 'placeholder@passdat.io',
    password: 'password1',
  }
}

module.exports = Card;
