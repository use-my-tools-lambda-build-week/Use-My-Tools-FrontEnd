import React from 'react';

export default class Register extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: ''
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.props.registerHandler(e)}>
          <input
            type='text'
            name='first_name'
            placeholder='First name'
            value={this.state.first_name}
            onChange={this.changeHandler}
            required
          />
          <input
            type='text'
            name='last_name'
            placeholder='Last name'
            value={this.state.last_name}
            onChange={this.changeHandler}
            required
          />
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={this.state.username}
            onChange={this.changeHandler}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.changeHandler}
            required
          />
          <div>
            <button
              type='button'
              onClick={this.registerHandler}
            >Register</button>
          </div>
        </form>
      </div>
    );
  };
};