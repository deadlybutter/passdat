import React, { Component } from 'react';

const authConfig = {
  signup: {
    greeting: {
      header: 'welcome',
      subheader: 'signup to get started',
    },
    fields: [
      {
        name: 'email',
        description: '',
        placeholder: 'you@gmail.com'
      },
      {
        name: 'client',
        description: 'unique name for this device',
        placeholder: 'home desktop'
      },
      {
        name: 'password',
        description: 'it\'s impossible to recover this.',
        type: 'password'
      }
    ]
  },
  login: {
    greeting: {
      header: 'welcome back',
      subheader: 'please login',
    },
    fields: [
      {
        name: 'email',
      },
      {
        name: 'password',
      }
    ]
  },
  invite: {
    greeting: {
      header: 'welcome back',
      subheader: 'accept an invite'
    },
    fields: [
      {
        name: 'email'
      },
      {
        name: 'password'
      },
      {
        name: 'client',
        description: 'unique name for this device',
        placeholder: 'office macbook'
      },
      {
        name: 'token',
        description: 'your invite token',
      },
    ]
  }
}

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: window.location.pathname.replace('/', '')
    };
  }

  render() {
    const mode = authConfig[this.state.mode];

    return (
      <div className="container -fullscreen modal">
        <div className="wrapper">
          <h1>{mode.greeting.header}</h1>
          <p>{mode.greeting.subheader}</p>
        </div>
        <div className="wrapper">
          {mode.fields.map((field, index) => {
            const type = field.type || 'text';
            return (
              <div key={index} className="modal__field">
                <h1>{field.name}</h1>
                <p>{field.description}</p>
                <input name={field.name} placeholder={field.placeholder} type={type}></input>
              </div>
            )
          })}
          <button type="submit">submit</button>
        </div>
      </div>
    );
  }
}

module.exports = Auth;
