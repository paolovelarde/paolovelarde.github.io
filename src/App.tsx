import React, { Component } from 'react';
import styled from 'styled-components';
import Spotter from './components/Spotter';

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: #eeeeee;
`;

function App() {
  return (
    <Wrapper>
      <Spotter />
    </Wrapper>
  );
}

export default App;
