import React from 'react';
import { connect } from 'react-redux';
import { Tools } from '../components';
import { fetchTools } from '../stores/actions'
import { CenterStage, SpotLight } from '../styles/GeneralStyling';

class HomeView extends React.Component {
  componentDidMount() {
    this.props.fetchTools();
  };

  refreshHandler = () => {
    window.location.reload();
  }

  render() {
    return (
      <CenterStage>
        <SpotLight>
          {this.props.fetchingTools === 'fetchingTools' ? (
            <span>Please wait while we fetch some tools!</span>
          ) : (
            <Tools
              tools={this.props.tools}
              refreshHandler={this.refreshHandler}
            />
          )}
        </SpotLight>
      </CenterStage>
    );
  };
};

const mapStateToProps = ({ toolsReducers }) => ({
  tools: toolsReducers.tools,
  fetchingTools: toolsReducers.fetchingTools
})

export default connect(mapStateToProps, { fetchTools })(HomeView);