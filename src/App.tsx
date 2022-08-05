import React, { Component } from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import Experience from './components/Experience';
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
      <Home />
      <Experience />
      <Spotter />
    </Wrapper>
  );
}

export default App;
