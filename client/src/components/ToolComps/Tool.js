import React from 'react';

const Tool = props => (
  <div>
    {/* <img>{props.img}</img> */}
    <div>
      {props.name}
      {props.requests}
    </div>
    <div>{props.price}</div>
    <div>{props.deposit}</div>
    <div>{props.description}</div>
  </div>
);

export default Tool;