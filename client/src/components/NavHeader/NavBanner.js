import React from 'react';
import { NavContainer, LogoContainer, LoginContainer } from '../../styles/NavStyling';

export default class NavBanner extends React.Component {
  logoutHandler = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload();
  };
  
  render() {
    return (
      <NavContainer>
        <LogoContainer />
        Clicky clicky
        <LoginContainer>
          <button
            type='submit'
            onClick={this.logoutHandler}
          >Log Out</button>
        </LoginContainer>
      </NavContainer>
    );
  };
};