import React from 'react';
import { connect } from 'react-redux';
import Tool from './Tool';
import { deleteTool } from '../../stores/actions';

class Tools extends React.Component {
  deleteHandler = (e, tool) => {
    e.preventDefault();
    this.props.deleteTool(tool);
    setTimeout(() => {
      this.props.refreshHandler();
    }, 1000);
  };

  render() {
    return (
      <div>
        {this.props.tools.map(tool => {
          console.log(tool);
          return (
            <div>
              <div key={tool.id}>
                <Tool tool={tool} />
                <div>
                  <button
                    type='submit'
                    onClick={e => this.deleteHandler(e, tool.id)}
                  >Remove Tool</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
};

export default connect(null, { deleteTool })(Tools);