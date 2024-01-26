import React from 'react';
import styled, { keyframes } from 'styled-components';

import codingImg from '../assets/code.jpg';

const OnloadImgAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(1.1);
        
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        transform: scale(1);
    }
`;

const OnloadDownAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-30%);
        
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        
    }
`;

const OnloadRightAnimation = keyframes`
0% {
    opacity: 0;
    transform: translateX(10%);
}
100% {
    opacity: 1;
    transform: translateX(0);
}
`;

const OnloadLeftAnimation = keyframes`
0% {
    opacity: 0;
    transform: translateX(-10%);
}
100% {
    opacity: 1;
    transform: translateX(0);
}
`;

const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  width: 95%;
  max-width: 100%;
  margin: 3vh auto;
`;

const Card = styled.div`
  position: relative; /* Added position relative to the card */
  border-radius: 16px;
  box-shadow: 0 30px 30px -25px rgba(65, 51, 183, 0.25);
  width: 100%;
  font-family: Montserrat;
  padding: 1.5em 1.7em;
  background-color: var(--c-white);
  display: flex;

  opacity: 0;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.01em;
  font-family: Tahoma;
  margin: 0;
`;

const CardInfo = styled.p`
  color: #333;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const CardContentDiv = styled.div`
  width:100%;
`;

const CardImageDiv = styled.div`
  overflow: visible;
  position: relative;
  
`;

const CardImage = styled.img`
  height: 24em; /* Set a fixed height for the image */
  border-radius: 8px; /* Optional: add border-radius to the image */
  /* Set position to absolute position: absolute; */
  bottom: 1em; /* Adjust this value as needed to control the overlap */
  left: 0;
`;

const CardImageAnimated = styled(CardImage)`
  opacity: 0;
  animation: ${OnloadImgAnimation} 1 ease-in-out 1s forwards;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }

  &:nth-child(2) {
    animation-delay: 0.4s; 
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`

const CardImageLeft = styled(CardImageAnimated)`
  margin-right: 3em; 
`;

const CardImageRight = styled(CardImageAnimated)`
  margin-left: 3em; 
`;

const SpacerDiv = styled.div`
  height: 3em;
`;

const CardAnimated = styled(Card)`

  &:nth-child(1) {
    animation: ${OnloadDownAnimation} 1s ease-out forwards;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation: ${OnloadRightAnimation} 1s ease-out forwards;
    animation-delay: 0.2s; 
  }

  &:nth-child(3) {
    animation: ${OnloadLeftAnimation} 1s ease-out forwards;
    animation-delay: 0.4s;
  }

  &:nth-child(4) {
    animation: ${OnloadRightAnimation} 1s ease-out forwards;
    animation-delay: 0.6s;
  }
`;

const Button = styled.button`
    background-color: var(--c-yellow);
    border: none;
    border-radius: 10rem;
    color: white;
    font-weight: 600;
    font-size: 1.15rem;
    pointer-events: all;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    box-shadow: inset 0 0 0 0.09px black;
  
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 30px;

    
  
    &:hover {
        box-shadow: inset 250px 0 0 0 black;
        transform: scale(1.1);
    }
`;

const Servicespage = () => {
  return (
    <div>
      <CardDiv>
        <CardAnimated>
          <CardContentDiv>
            <CardTitle>Our services</CardTitle>
            <CardInfo>We do whatever you want but here are some predefined things</CardInfo>
            <SpacerDiv/>
          </CardContentDiv>
        </CardAnimated>

        <CardAnimated>
          <CardContentDiv>
            <CardTitle>Websites</CardTitle>
            <CardInfo>
              You want a professional and interactive website that. <br />
              list things like: fully customized, whatever you can think of is possible, website like the big players,
              come across as more professional, generate more leads, gain trust with clients
            </CardInfo>
            <ul>
              <li>Fully customized</li>
              <li>You can imagine it, we build it</li>
              <li>Website like the big players</li>
              <li>Come across more professional</li>
              <li>Generate more leads</li>
              <li>Gain trust with clients</li>
            </ul>
            <SpacerDiv/>
            <Button>Get in touch!</Button>
          </CardContentDiv>
          <CardImageDiv>
            <CardImageRight src={codingImg} />
          </CardImageDiv>
        </CardAnimated>

        <CardAnimated>
          <CardImageDiv>
            <CardImageLeft src={codingImg} />
          </CardImageDiv>
          <CardContentDiv>
            <CardTitle>Automation</CardTitle>
            <CardInfo>You might not realize, but you are doing unnecessary work. Save time, effort and create ease of mind <br/>list stuff like the things we automate, business processes, AI solutions, marketing campaings, crm, ...<br/><br/>We do audits and implementations</CardInfo>
            <ul>
              <li>Business processes</li>
              <li>Artificial intelligence solutions</li>
              <li>Marketing campaigns</li>
              <li>CRM</li>
              <li>...</li>
            </ul>
            <SpacerDiv/>
            <Button>Get in touch!</Button>
          </CardContentDiv>
        </CardAnimated>

        <CardAnimated>
        <CardContentDiv>
          <CardTitle>Custom Solutions</CardTitle>
          <CardInfo>Whatever you can think of, we can do it. <br/>list things like, custom software, programs, algorithms, Artificial intelligence, </CardInfo>
          <ul>
            <li>Custom software solutions</li>
            <li>Artificial intelligence solutions</li>
            <li>Whatever you want ya know</li>
          </ul>
          <SpacerDiv/>
          <Button>Get in touch!</Button>
          </CardContentDiv>
          <CardImageDiv>
            <CardImageRight src={codingImg} />
          </CardImageDiv>
        </CardAnimated>
      </CardDiv>
    </div>
  );
};

export default Servicespage;
