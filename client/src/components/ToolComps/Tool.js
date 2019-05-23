import React from 'react';

/* 
  <div>
    <button
      type='submit'
      onClick={e => this.deleteHandler(e, tool.id)}
    >Remove Tool</button>
  </div>
*/

const Tool = props => (
  <div>
    <img src={props.imageUrl} alt={`A ${props.tool}.`}/>
    <div>
      {props.toolName}
      {props.requests}
    </div>
    <div>{props.price}</div>
    <div>{props.deposits}</div>
    <div>{props.description}</div>
    <div>{props.isRented}</div>
  </div>
);

export default Tool;