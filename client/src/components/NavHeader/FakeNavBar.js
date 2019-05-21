import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, LogoContainer, LoginContainer } from '../../styles/NavStyling';

const FakeNavBar = () => {
  return (
    <NavContainer>
      <LogoContainer />
      Clicky clicky
      <LoginContainer>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Register</button></Link>
      </LoginContainer>
    </NavContainer>
  );
};

export default FakeNavBar;