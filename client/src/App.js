import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import {
  Authenticate,
  Login,
  NavBanner
} from './components'
import { HomeView } from './views';
import { BackDrop } from './styles/GeneralStyling'

class App extends React.Component {
  render() {
    return (
      <BackDrop>
        <NavBanner />
        <Route exact path='/' component={HomeView} />
        <Route exact path='/profile' />
        <Route exact path='/submit-tool' />
        <Route exact path='/rent-tool' />
      </BackDrop>
    );
  }
}

// export default App;
export default withRouter(Authenticate(App)(Login));