import React from 'react';
import Frame from '../frame/frame.js';

const Table = (props) => {
  const {name, time} = props
  return (   
    <div>
      <h2>Results</h2>
      <Frame columns={2}>
        <div>{name}</div>
        <div>{time}</div>
      </Frame>
    </div>)
}

export default Table