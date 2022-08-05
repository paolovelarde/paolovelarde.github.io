import React, { useState } from 'react';
import styled from 'styled-components';
import SpotterLogo from '../img/spotter-logo.png';
import SpotterBg from '../img/spotter-bg.png';
import SpotterBgMobile from '../img/spotter-bg-mobile.png';
import VersionsImg from '../img/versions.png';
import disableScroll from 'disable-scroll';
import Modal from 'react-modal';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1280px;
    height: 720px;
    justify-content: center;
    margin-top: 12px;
    background-color: #fcfcfc;
    @media (max-width: 440px){
        height: 640px;
        justify-content: flex-start;
        margin: 0;
    }
`;

const VersionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
    height: 720px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-bottom: 12px;
    @media (max-width: 440px){
        height: 360px;
    }
`;

const BackgroundImg = styled.div`
    display: block;
    width: 1264px;
    height: 720px;
    position: absolute;
    background-image: url(${SpotterBg});
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: 440px){
        display: none;
    }
`;

const BackgroundImgMobile = styled.div`
    display: none;
    @media (max-width: 440px){
        display: block;
        height: 640px;
        width: 100%;
        position: absolute;
        background-image: url(${SpotterBgMobile});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 160%;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 64px 60px;
    justify-content: center;
    align-items: center;
    @media (max-width: 440px){
        padding: 48px 16px;
    }
`;

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const P1 = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #606060;
  margin: 64px 0 8px 0;
  line-height: 1.25em;
  @media (max-width: 440px) {
    font-size: 14px;
    line-height: 1.25em !important;
    margin-top: 24px;
    max-width: 320px;
  }
`;

const SpotterLogoImg = styled.img`
    width: 284px;
    height: auto;
    @media (max-width: 440px){
        margin-left: 8px;
        width: 240px;
        height: auto;
    }
`;

const VersionsImgDiv = styled.img`
    cursor: pointer;
    width: 800px;
    height: auto;
    @media (max-width: 440px){
        width: 90%;
        height: auto;
        margin-bottom: 12px;
    }
`;

const VersionsImgDivModal = styled.img`
    cursor: pointer;
    width: 90vw;
    height: auto;
    max-width: 1280px;
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 80px;
  margin-left: 60px;
  margin-bottom: 40px;
  @media (max-width: 440px){
    font-size: 14px;
    margin: 48px 16px 32px 16px;
  }
`;

const P2 = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    line-height: 1.75em;
    margin-bottom: 0px;
    margin-top: 8px;
    margin-left: 60px;
    @media (max-width: 440px) {
        margin: 0 16px 48px 16px;
        font-size: 14px;
        line-height: 2em;
    }
`;

const P2Title = styled.p`
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    line-height: 1.75em;
    margin-bottom: 8px;
    margin-top: 36px;
    margin-left: 60px;
    @media (max-width: 440px) {
        margin: 0 0 8px 16px;
        font-size: 14px;
    }
`;

const SpotterIntro = styled.div`
    width: 1280px;
    padding-bottom: 76px;
    background-color: #0fbcf9;
    @media (max-width: 440px){
        width: 100%;
        padding-bottom: 40px;
    }
`;

const TechDiv = styled.div`
    display: flex;
    margin-left: 60px;
    align-content: flex-start;
    flex-wrap: wrap;
    flex: 1;
    flex-direction: row;
    @media (max-width: 440px){
        margin-left: 16px;
        max-width: 320px;
    }
`;

const TechLabel = styled.div`
    display: flex;
    background-color: rgba(255, 255, 255, 0.33);
    border-radius: 45px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 4px 10px 5px 10px;
`;

const Tech = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    margin: 0;
    @media (max-width: 440px) {
        font-size: 14px;
    }
`;

function Experience() {

    
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      disableScroll.on();
    }
  
    function closeModal() {
      disableScroll.off();
      setIsOpen(false);
    }


    return (
            <>
            <AnchorLink href='#spotter'></AnchorLink>
            <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={
            {
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.85)'
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    height: 'auto',
                    borderRadius: 0,
                    border: 'none',
                }
              }}
            contentLabel="Example Modal"
        >
            <VersionsImgDivModal src={VersionsImg}  onClick={() => closeModal()} />
        </Modal>
                <Container>
                    <Wrapper>
                        <BackgroundImg />
                        <BackgroundImgMobile />
                        <Content>
                            <Landing>
                                <SpotterLogoImg src={SpotterLogo} alt='spotter logo' />
                                {/* <P1>All in one fitness app focused on simplicity.</P1> */}
                            </Landing>
                        </Content>
                    </Wrapper>
                    <SpotterIntro>
                        <Title>Personal Project</Title>
                        <P2>Spotter is a fitness app that focuses on user experience. <br /> Features include free workout routines, calorie tracking, and more.</P2>
                        <P2Title>Technologies used:</P2Title>
                        <TechDiv>
                            <TechLabel><Tech>React Native</Tech></TechLabel>
                            <TechLabel><Tech>TypeScript</Tech></TechLabel>
                            <TechLabel><Tech>Node.js</Tech></TechLabel>
                            <TechLabel><Tech>Xcode</Tech></TechLabel>
                            <TechLabel><Tech>Android Studio</Tech></TechLabel>
                            <TechLabel><Tech>Figma</Tech></TechLabel>
                        </TechDiv>
                    </SpotterIntro>
                    <VersionsDiv>
                        <VersionsImgDiv src={VersionsImg} onClick={() => openModal()} />
                        {/* {
                            window.innerWidth > 440 ? 
                        <>
                            <VersionsImgDiv src={VersionsImg} onClick={() => openModal()} />
                            <P1>Mockups of the home screen</P1>
                        </>
                        :
                        <>
                            <P1>Mockups of the home screen</P1>
                            <VersionsImgDiv src={VersionsImg}  onClick={() => openModal()} />
                        </>
                        } */}
                        <P1>Mockups of the home screen</P1>
                    </VersionsDiv>
                </Container>
            </>
        );
    }
  
export default Experience;