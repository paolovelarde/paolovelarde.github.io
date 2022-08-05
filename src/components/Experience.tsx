import { useState } from 'react';
import styled from 'styled-components';
import Wealthsimple from '../img/wealthsimple.png';
import Clearco from '../img/clearco.png';
import Makeship from '../img/makeship.png';
import CIBC from '../img/cibc.png';
import KPMG from '../img/kpmg.png';
import Interac from '../img/interac.png';
import Expand from '../img/expand.png';
import Modal from 'react-modal';
import disableScroll from 'disable-scroll';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1280px;
    height: 720px;
    justify-content: center;
    background-color: #fff;
    @media (max-width: 440px){
        height: auto;
        justify-content: flex-start;
        margin: 0;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 64px 60px;
    @media (max-width: 440px){
        padding: 48px 0;
        margin: 0 24px;
    }
`;

const Intro = styled.div`
    margin: 24px 0 48px 0;
    @media (max-width: 440px) {
        margin: 0 0 8px 0;
    }
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 16px;
  color: #1d1d1f;
  text-transform: uppercase;
  letter-spacing: 3px;
  @media (max-width: 440px){
    font-size: 14px;
    margin: 0 0 16px 0;
  }
`;

const P1 = styled.p`
  font-weight: 400px;
  font-size: 18px;
  color: #111111;
  margin: 0 0 8px 0;
  line-height: 1.25em;
  @media (max-width: 440px) {
    font-size: 14px;
    line-height: 1.25em !important;
    margin-right: 8px;
    margin-bottom: 24px;
    max-width: 320px;
  }
`;

const P1Interac = styled(P1)`
  margin-bottom: 8px;
`;

const P2 = styled.p`
    font-weight: 400px;
    font-size: 16px;
    color: #111111;
    line-height: 1.25em;
    margin-bottom: 0px;
    margin-top: 8px;
    @media (max-width: 440px) {
        margin: 0 0 8px 0;
        font-size: 14px;
    }
`;

const P1Dark = styled(P1)`
    color: #fff;
    margin-bottom: 8px;
    @media (max-width: 440px) {
        margin-bottom: 8px;
    }
`;

const P2Dark = styled(P2)`
    color: #fff;
    margin: 8px 0 0 0;
    @media (max-width: 440px) {
        margin: 0 0 8px 0;
        font-size: 14px;
    }
`;

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    @media (max-width: 440px) {
        width: 100%;
        flex-direction: column;
    }
`;

const ExperienceContainerBottom = styled(ExperienceContainer)`
    margin-top: 12px;
    @media (max-width: 440px) {
        margin-top: 0;
    }
`

const ExperienceBox = styled.div`
    width: 360px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 0 16px 16px;
    margin-right: 12px;
    opacity: 0.85;
    border-radius: 8px;
    @media (max-width: 440px) {
        margin-right: 0;
        width: 100%;
        margin-bottom: 16px;
        padding: 16px 0 8px 0;
        border-radius: 6px;
    }
`;

const ExperienceDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: 440px) {
        margin-top: -16px;
        margin-left: 16px;
        font-size: 14px;
    }
`;

const ExperienceBoxWealthsimple = styled(ExperienceBox)`
    background-color: #77b7b6;
`;

const ExperienceBoxClearco = styled(ExperienceBox)`
    background-color: #0b0b0b;
`;

const ExperienceBoxMakeship = styled(ExperienceBox)`
    background-color: #5349ed;
    margin-right: 0;
`;

const ExperienceBoxCIBC = styled(ExperienceBox)`
    background-color: #c61b3b;
`;

const ExperienceBoxKPMG = styled(ExperienceBox)`
    background-color: #1e49e3;
`;

const ExperienceBoxInterac = styled(ExperienceBox)`
    background-color: #ffb92b;
    margin-right: 0;
    @media (max-width: 440px){
        margin-bottom: 0;
    }
`;

const CompanyLogo = styled.div`
    @media (max-width: 440px) {
        margin: 8px 0 8px 16px;
    }
`;

const ExpandButton = styled.div`
    margin-bottom: -12px;
    @media (max-width: 440px) {
        margin: 0 -8px 0 0;
    }
`;

const ExpandImg = styled.img`
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin: 0 16px 8px 0;
    @media (max-width: 440px) {
        margin: 0 24px 4px 0;
    }
`;

const CloseButton = styled.div`
    border-radius: 45px;
    cursor: pointer;
    background-color: #1d1d1f;
    padding: 8px;
    margin-top: 16px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

const ButtonText = styled(P2Dark)`
    font-size: 14px;
    margin: 2px 8px 4px 8px;
`;

const jobDesc: any = {
    'Wealthsimple': ["Making simple, sophisticated, and affordable financial products."],
    'Clearco': ["Created API endpoints that adds Multi Factor Authentication to a user's Clearco account, utilizing One-Time Password verification and QR Code libraries.",
    'Improved Clearco sign-up experience by implementing feature flags that would toggle the current onboarding flow, ensuring the correct user experience was shown.'],
    'Makeship': ["Assisted in the redesign of the Makeship website, was responsible for designing and implementing new pages in React that would replace the previous Shopify template while adhering to the company's brand guidelines and accessibility standards."],
    'CIBC': ['Analyzed Business Banking customer survey results containing Net Promoter Score data, using NLP tools to conduct sentiment analysis.', 'Used NLTK library to cleanse data that consisted of nearly 10,000 survey responses, reducing friction by using proper pre-processing methods.'],
    'KPMG': ['Developed a full stack web app purposed to analyze phone calls related to customer support, using Microsoft Azure and Google Cloud Platform services for data pipelining.', 'Used React to design and develop a single-page web app experience which enabled users to analyze the metadata from audio files.'],
    'Interac': ["Developed a mobile banking app in React Native that emulated financial institutions, utilizing the Interac e-Transfer API (Canada's leading money transfer service).", "Led team of three in frontend development and UI/UX, created custom UI components in JavaScript that displayed banking information."],
};

const jobName: any = {
    'Wealthsimple': 'Cash Movement @ Wealthsimple',
    'Clearco': 'Core Experience @ Clearco',
    'Makeship': 'Engineering @ Makeship',
    'CIBC': 'Data & Innovation @ CIBC',
    'KPMG': 'Data & Intelligence @ KPMG',
    'Interac': 'Digital Products @ Interac'
};

function Experience() {

    const [currJob, setCurrJob] = useState('');
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

    function openJobDesc(job: string) {
        setCurrJob(job);
        openModal();
    }

    function jobDetails() {
        var details = [];
        for(var i = 0; i < jobDesc[currJob].length; i++) {
            details.push(
                <P2 key={i}>
                    {jobDesc[currJob][i]}
                </P2>
            )
        }
        return details;
    }

    return (
    <>
        <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={
                window.innerWidth > 440 ?
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
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '480px',
                    height: 'auto',
                    borderRadius: 8,
                    border: 'none',
                    padding: '16px',
                }
              } :
        
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
                    width: '80%',
                    height: 'auto',
                    borderRadius: 6,
                    border: 'none',
                    margin: '0 16px 0 0',
                    padding: '24px 16px 16px 16px'
                }
              }}
            contentLabel="Example Modal"
        >
            <Title>{jobName[currJob]}</Title>
            <P2>
                {
                    !currJob ? '' : jobDetails()
                }
            </P2>
            <ButtonContainer>
                <CloseButton onClick={() => closeModal()}>
                    <ButtonText>Done</ButtonText>
                </CloseButton>
            </ButtonContainer>
        </Modal>
        <Wrapper>
            <Content>
                <Title>Work Experience</Title>
                <Intro>
                    <P1>I've worked at various companies, mainly on the <b>software development</b> side of things.</P1>
                    {/* <P1>My <b>user interface design</b> skills are mainly self taught, having done some graphic design work for my school.</P1> */}
                </Intro>
                <ExperienceContainer>
                    <ExperienceBoxWealthsimple>
                        <CompanyLogo>
                            <img src={Wealthsimple} alt='Wealthsimple logo logo' style={{ 'height': '36px', 'width': 'auto', 'marginBottom': '32px' }}/>
                        </CompanyLogo>
                        <ExperienceDetails>
                            <div>
                                <P1Interac><b>Wealthsimple</b></P1Interac>
                                <P2>Software Engineering Intern</P2>
                            </div>
                            <ExpandButton>
                                <ExpandImg onClick={() => openJobDesc('Wealthsimple')} src={Expand} alt='expand' />
                            </ExpandButton>
                        </ExperienceDetails>
                    </ExperienceBoxWealthsimple>
                    <ExperienceBoxClearco>
                        <CompanyLogo>
                            <img src={Clearco} alt='Clearco logo' style={{ 'height': '48px', 'width': '48px', 'marginBottom': '32px' }}/>
                        </CompanyLogo>
                        <ExperienceDetails>
                            <div>
                                <P1Dark><b>Clearco</b></P1Dark>
                                <P2Dark>Software Engineering Intern</P2Dark>
                            </div>
                            <ExpandButton>
                                <ExpandImg onClick={() => openJobDesc('Clearco')} src={Expand} alt='expand' />
                            </ExpandButton>
                        </ExperienceDetails>
                    </ExperienceBoxClearco>
                    <ExperienceBoxMakeship>
                        <CompanyLogo>
                            <img src={Makeship} alt='Makeship logo' style={{ 'height': '48px', 'width': '61.71px', 'marginBottom': '32px' }}/>
                        </CompanyLogo>
                        <ExperienceDetails>
                            <div>
                                <P1Dark><b>Makeship</b></P1Dark>
                                <P2Dark>Software Development Intern</P2Dark>
                            </div>
                            <ExpandButton>
                                <ExpandImg onClick={() => openJobDesc('Makeship')} src={Expand} alt='expand' />
                            </ExpandButton>
                        </ExperienceDetails>
                    </ExperienceBoxMakeship>
                </ExperienceContainer>
                <ExperienceContainerBottom>
                    <ExperienceBoxCIBC>
                        <CompanyLogo>
                            <img src={CIBC} alt='CIBC logo' style={{ 'height': '48px', 'width': '51.43px', 'marginBottom': '32px' }}/>
                        </CompanyLogo>
                        <ExperienceDetails>
                            <div>
                                <P1Dark><b>CIBC</b></P1Dark>
                                <P2Dark>Data Science Intern</P2Dark>
                            </div>
                            <ExpandButton>
                                <ExpandImg onClick={() => openJobDesc('CIBC')} src={Expand} alt='expand' />
                            </ExpandButton>
                        </ExperienceDetails>
                    </ExperienceBoxCIBC>
                    <ExperienceBoxKPMG>
                        <CompanyLogo>
                            <img src={KPMG} alt='KPMG logo' style={{ 'height': '40px', 'width': '95.56px', 'marginBottom': '32px' }}/>
                        </CompanyLogo>
                        <ExperienceDetails>
                            <div>
                                <P1Dark><b>KPMG</b></P1Dark>
                                <P2Dark>Software Engineering Intern</P2Dark>
                            </div>
                            <ExpandButton>
                                <ExpandImg onClick={() => openJobDesc('KPMG')} src={Expand} alt='expand' />
                            </ExpandButton>
                        </ExperienceDetails>
                    </ExperienceBoxKPMG>
                    <ExperienceBoxInterac>
                        <CompanyLogo>
                            <img src={Interac} alt='Interac logo' style={{ 'height': '48px', 'width': '48px', 'marginBottom': '32px' }}/>
                        </CompanyLogo>
                        <ExperienceDetails>
                            <div>
                                <P1Interac><b>Interac</b></P1Interac>
                                <P2>Software Development Intern</P2>
                            </div>
                            <ExpandButton>
                                <ExpandImg onClick={() => openJobDesc('Interac')} src={Expand} alt='expand' />
                            </ExpandButton>
                        </ExperienceDetails>
                    </ExperienceBoxInterac>
                </ExperienceContainerBottom>
            </Content>
        </Wrapper>
        </>
        );
    }
  
  export default Experience;