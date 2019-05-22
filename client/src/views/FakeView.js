import React from 'react';
import { FakeNavBar } from '../components';
import { CenterStage, SpotLight } from '../styles/GeneralStyling';

class FakeView extends React.Component {
  render() {
    return (
      <CenterStage>
        <FakeNavBar />
        <SpotLight>
          Everything is going to be ok.
        </SpotLight>
      </CenterStage>
    );
  };
};

export default FakeView;