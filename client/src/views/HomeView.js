import React from 'react';
import { CenterStage, SpotLight } from '../styles/GeneralStyling';

class HomeView extends React.Component {
  render() {
    return (
      <CenterStage>
        <SpotLight>
          Everything is going to be ok. No, really.
        </SpotLight>
      </CenterStage>
    );
  };
};

export default HomeView;