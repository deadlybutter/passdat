import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  renderMenu(name, urlOverride) {
    const classes = `header__menu ${this.props.active === name ? '-active' : ''}`;
    return (
      <Link to={urlOverride || `/${name}`} className={classes}>
        <h1>{name}</h1>
      </Link>
    );
  }

  render() {
    return (
      <header className="container">
        <div className="header__banner">
          <h1>passdat</h1>
        </div>
        <div className="wrapper -full">
          {this.renderMenu('dashboard', '/')}
          {this.renderMenu('clients')}
          {this.renderMenu('settings')}
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  active: 'dashboard'
}

module.exports = Header;
