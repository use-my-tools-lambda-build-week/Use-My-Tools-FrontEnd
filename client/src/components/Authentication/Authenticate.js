import React from 'react';
import axios from 'axios';

axios.interceptors.request.use(
  function(options) {
    options.headers.authorization = localStorage.getItem('token');
    return options;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const Authenticate = App => Login => {
  return class extends React.Component {
    state = {
      isLoggedIn: false,
      token: null
    };

    componentDidMount() {
      if(localStorage.getItem('token')) {
        this.setState({ isLoggedIn: true });
        this.setState({ token: localStorage.getItem('token') });
      };
    };

    loginHandler = e => {
      e.preventDefault();
      let creds = {
        username: e.target[0].value,
        password: e.target[1].value
      };
      console.log("What is this cake?", creds);
      axios
        .post(`https://rent-mytools.herokuapp.com/api/auth/login`, creds)
        .then(res => {
          console.log(res.data);
          localStorage.setItem('token', res.data.token);
          this.setState({ isLoggedIn: true });
          this.props.history.push('/');
        })
        .catch(err => console.error(err));
    };

    registerHandler = e => {
      e.preventDefault();
      let registerCreds = {
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        username: e.target[2].value,
        password: e.target[3].value
      };
      console.log("What is this new cake?", registerCreds);
      axios
        .post(`https://rent-mytools.herokuapp.com/api/auth/register`, registerCreds)
        .then(res => {
          console.log(res.data.message);
          localStorage.setItem('token', res.data.token);
          window.location.reload();
        })
        .catch(err => console.error(err));
    };

    render() {
      if (this.state.isLoggedIn) {
        return <App />
      } else {
        return (
          <Login
            loginHandler={this.loginHandler}
            registerHandler={this.registerHandler}
          />
        );
      }
    }
  };
};

export default Authenticate;