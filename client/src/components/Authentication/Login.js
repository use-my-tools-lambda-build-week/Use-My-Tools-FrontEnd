import React from 'react';

export default class Login extends React.Component {
  state = {
    activeForm: 'login',
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  };

  displayLogin = () => {
    this.setState({
      activeForm: 'login',
      username: '',
      password: ''
    });
  };

  displayRegister = () => {
    this.setState({
      activeForm: 'register',
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.activeForm === 'login' ? (
          <div>
            <form onSubmit={e => this.props.loginHandler(e)}>
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
                  type='submit'
                  value='login'
                  onClick={this.loginHandler}
                >Log in</button>
                <button
                  type='button'
                  value='register'
                  onClick={this.displayRegister}
                >Register</button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <form onSubmit={e => this.props.registerHandler(e)}>
              <input
                type='text'
                name='firstName'
                placeholder='First name'
                value={this.state.firstName}
                onChange={this.changeHandler}
                required
              />
              <input
                type='text'
                name='lastName'
                placeholder='Last name'
                value={this.state.lastName}
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
                  value='login'
                  onClick={this.displayLogin}
                >Login</button>
                <button
                  type='submit'
                  value='register'
                  onClick={this.registerHandler}
                >Register</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  };
};