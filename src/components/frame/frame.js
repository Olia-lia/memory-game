import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  grid-gap: 5px;
  width: auto;
  height: auto;
  border: 1px solid grey;` 
;

export default Frame;