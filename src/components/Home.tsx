import React from 'react';
import styled from 'styled-components';
import me from '../img/me.png';
import LightButton from '../img/light-button.png';
import DarkButton from '../img/dark-button.png';
import Signature from '../img/signature.png';
import SignatureDark from '../img/signature-dark.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1280px;
    height: 720px;
    justify-content: center;
    background-color: #f8f6f6;
    margin: 12px 0;
    @media (max-width: 440px){
        height: 640px;
        justify-content: flex-start;
        margin: 0;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 100px 0 100px;
    @media (max-width: 440px){
        padding: 32px 16px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1080px;
    padding-top: 64px;
    position: absolute;
    @media (max-width: 1280px) {
        max-width: calc(100% - 200px)
    }
    @media (max-width: 440px) {
        position: static;
        padding-top: 0;
        width: 100%;
    }
`;

const Intro = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    @media (max-width: 440px){
        margin-top: 64px;
        flex-direction: column;
        height: auto;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media (max-width: 440px){
        margin: 0 0 48px 8px;
    }
`;

const Me = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    @media (max-width: 440px) {
        justify-content: flex-end;
    }
`;

const MeImage = styled.img`
    height: 60%;
    width: auto;
    @media (max-width: 440px) {
        width: 216px;
        height: auto;
        margin-right: 16px;
    }
`;

const SignatureImg = styled.img`
    width: 60px;
    height: auto;
    @media (max-width: 440px) {
        width: 64px;
        height: auto;
    }
`;

const H1 = styled.h1`
  font-size: 48px;
  color: #1d1d1f;
  @media (max-width: 440px){
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const P1 = styled.p`
  font-weight: 400px;
  font-size: 18px;
  color: #222222;
  margin: 0 0 8px 0;
  @media (max-width: 440px) {
    font-size: 14px;
    line-height: 1.5em !important;
    margin-right: 8px;
    margin-bottom: 0px;
    max-width: 240px;
  }
`;


const Home = () => (
    <>
        <Wrapper>
            <Content>
                <Header>
                    <SignatureImg src={Signature} alt='signature' />
                    {/* <img src={DarkButton} alt='dark-button' style={{ 'width': '30px', 'height': '30px' }} /> */}
                </Header>
                <Intro>
                    <Title>
                        <H1>Software developer,<br />UI/UX designer</H1>
                        <P1>My name is Paolo and I'm a design/develop-er based in Toronto.</P1>
                        <P1>Check out some of my work below.</P1>
                    </Title>
                    <Me>
                        <MeImage src={me} alt="Graphic design" />
                    </Me>
                </Intro>
            </Content>
        </Wrapper>
    </>
  );
  
  export default Home;