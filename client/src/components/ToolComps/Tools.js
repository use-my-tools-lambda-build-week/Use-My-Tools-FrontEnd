import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTool } from '../../stores/actions';
import { Toolshed, Toolbox } from '../../styles/ToolStyling';

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
      <Toolshed>
        {this.props.tools.map(tool => {
          console.log(tool);
          return (
            <div key={tool.id}>
              <ToolIcon
                key={tool.id}
                tool={tool}
                deleteHandler={e => this.deleteHandler(e, tool.id)}
              />
            </div>
          );
        })}
      </Toolshed>
    );
  };
};

function ToolIcon({ tool }) {
  const { id, userId, toolName, imageUrl } = tool;
  return (
    <Link to={`/tool/${id}`}>
      <Toolbox>
        <h3>{toolName}</h3>
        <img src={imageUrl} alt={`A ${toolName}`} />
      </Toolbox>
    </Link>
  );
};

export default connect(null, { deleteTool })(Tools);