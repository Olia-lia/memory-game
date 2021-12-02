import React from 'react';
import Frame from '../frame/frame.js';

const Table = (props) => {
  const {name, time, rows} = props
  return (   
    <div>
      <h2>Results</h2>
      <Frame columns={2} rows={rows}>
        <div>{name}</div>
        <div>{time}</div>
      </Frame>
    </div>)
}

export default Table