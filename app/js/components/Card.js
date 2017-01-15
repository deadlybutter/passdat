import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1>Account name</h1>
        <div className="card__fields">
          <button>email</button>
          <button>password</button>
        </div>
        <button className="card__edit">edit</button>
      </div>
    );
  }
}

Card.defaultProps = {
  account: {
    
  }
}

module.exports = Card;
