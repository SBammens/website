import React from 'react';
import styled, { keyframes } from 'styled-components';
import {BrowserView, MobileView} from 'react-device-detect';
import { Link } from 'react-router-dom';

import websiteIcon from '../assets/responsive-design.png';
import automationIcon from '../assets/automation.png';
import customIcon from '../assets/ide.png';

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
  
  border-radius: 16px;
  box-shadow: 0 30px 30px -25px rgba(65, 51, 183, 0.25);
  width: 80%;
  font-family: Montserrat;
  padding: 1.5em 1.7em;
  background-color: var(--c-white);
  display: flex;
  gap: 1em;

  opacity: 0;

  /* Media query for screens with a maximum width of 767px (typical for mobile devices) */
    @media (max-width: 767px) {
      width: 100%;
      flex-direction: column; /* Stack cards vertically on mobile */
      text-align: center;
    }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.01em;
  font-family: Tahoma;
  margin: 0;
`;

const CardListTitle = styled.p`
  color: #333;
  margin-top: 1em;
  margin-bottom: 0em;
  font-weight: bold;
`;

const CardList = styled.ul`
  margin-top: 0em;
  margin-bottom: 1em;

  /* Media query for screens with a maximum width of 767px (typical for mobile devices) */
    @media (max-width: 767px) {
      list-style-type: none;
      padding: 0; /* Remove padding */
      margin: 0; /* Remove margins */
    }
`;

const CardInfo = styled.p`
  color: #333;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const CardContentDiv = styled.div`
  width:100%;
`;

const CardIconDiv = styled.div`
  width:90%;
  height:100%;
  padding: 0.5em;

  @media (max-width: 767px) {
    align-self: center;
    width:100%;
  }
`;

const CardImage = styled.img`
  height: 24em; /* Set a fixed height for the image */
  border-radius: 8px; /* Optional: add border-radius to the image */
  /* Set position to absolute position: absolute; */
  bottom: 1em; /* Adjust this value as needed to control the overlap */
  left: 0;
  
  align-self: center;

  width:100%;
  height: auto;

  @media (max-width: 767px) {
    align-self: center;

    width:70%;
    height: auto;
  }

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

const ButtonLink = styled(Link)`
    text-decoration: none;
    
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
    padding: 15px 30px;

    @media (max-width: 767px) {
      align-self: center;
    }
  
    &:hover {
        box-shadow: inset 350px 0 0 0 black;
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
            <CardInfo>Welcome to a transformative digital experience! Elevate your online presence with our expert web development skills, designed to build trust with your clients, attract new customers, and boost sales. From fully customized solutions to rivalling industry giants, our websites not only showcase professionalism but also generate leads and instill confidence in your clients.
<br/><br/>
But that's not all -- we understand the broader business landscape. Discover hidden expenses and save time with our automation solutions. Our free automation audit can unveil the potential for efficiency, helping you streamline processes and minimize the risk of human errors.
<br/><br/>
And if you're facing unique business challenges, we're here to be your problem-solving ally. Share your concerns, and our in-depth analysis will uncover tailored solutions designed just for you. Don't hesitate to reach out; asking for advice is always complimentary.
<br/><br/>
Embark on a journey where your website becomes a powerful tool, your processes become streamlined, and your challenges become opportunities. Let's shape your digital success together!</CardInfo>
          </CardContentDiv>
        </CardAnimated>

        <CardAnimated>
          <MobileView>
            <CardIconDiv>
              <CardImageAnimated src={websiteIcon} />
            </CardIconDiv>
          </MobileView>
          <CardContentDiv>
            <CardTitle>Websites</CardTitle>
            <CardInfo>
            Elevate your online presence with a meticulously crafted website, the cornerstone for establishing trust with your clients, attracting new customers, and skyrocketing your sales.<br/>

Unlock the potential of fully customized web solutions where every idea transforms into reality. Your website can rival the industry giants, exuding professionalism that resonates with your audience. Immerse your visitors in an experience that not only showcases your expertise but also instills confidence, fostering trust with potential clients. Generate a steady stream of leads and position yourself among the top players in your field by harnessing the power of a professionally designed and optimized website.
            </CardInfo>
            <CardListTitle>Our websites are:</CardListTitle>
            <CardList>
              <li>Fully customizable</li>
              <li>Optimizes website</li>
              <li>Rank higher on Google</li>
              <li>Gain more credibility</li>
              <li>Generate more leads</li>
              <li>Boost sales</li>
              <li>...</li>
            </CardList>
            <SpacerDiv/>
            <ButtonLink to="/Contact">
              <Button>Let's start building!</Button>
            </ButtonLink>
          </CardContentDiv>
          <BrowserView>
            <CardIconDiv>
              <CardImageAnimated src={websiteIcon} />
            </CardIconDiv>
          </BrowserView>
        </CardAnimated>

        <CardAnimated>
          <BrowserView>
            <CardIconDiv>
              <CardImageAnimated src={automationIcon} />
            </CardIconDiv>
          </BrowserView>
          <MobileView>
            <CardIconDiv>
              <CardImageAnimated src={automationIcon} />
            </CardIconDiv>
          </MobileView>

          <CardContentDiv>
            <CardTitle>Automation</CardTitle>
            <CardInfo>Discover hidden expenses you might be overlooking. Within your business, numerous repetitive tasks could be draining your resources without you even realizing it. Embrace the power of automation to streamline these processes, not only saving you valuable time and money but also minimizing the risk of human errors.<br/><br/>Unlock the potential for efficiency and cost-effectiveness by taking advantage of our complimentary automation audit. Let us unveil the untapped opportunities for time and financial savings through our tailored automation solutions!</CardInfo>
            <CardListTitle>Automation solutions:</CardListTitle>
            <CardList>
              <li>Automate paperwork</li>
              <li>Follow up with customers</li>
              <li>Run marketing campaigns</li>
              <li>Artificial intelligence (AI) solutions</li>
              <li>...</li>
            </CardList>
            <SpacerDiv/>
            <ButtonLink to="/Contact">
              <Button>Let's get automating!</Button>
            </ButtonLink>
          </CardContentDiv>
        </CardAnimated>

        <CardAnimated>
        <MobileView>
            <CardIconDiv>
                <CardImageAnimated src={customIcon} />
            </CardIconDiv>
          </MobileView>
        <CardContentDiv>
          <CardTitle>Custom Solutions</CardTitle>
          <CardInfo>Navigate through business challenges with confidence as we stand ready to be your problem-solving ally! Share the concerns that keep you awake at night, and let us conduct a comprehensive analysis to unveil optimal solutions tailored specifically for you.<br/><br/>Don't hesitate to reach out, asking is always free. Your journey towards resolution begins with a simple conversation.</CardInfo>
          <CardListTitle>Our solutions are:</CardListTitle>
          <CardList>
            <li>Tailored to your issue</li>
            <li>Tackling problems at their core</li>
            <li>Easy maintainable</li>
            <li>Professionally documented</li>
            <li>...</li>
          </CardList>
          <SpacerDiv/>
          <ButtonLink to="/Contact">
            <Button>Get in touch!</Button>
          </ButtonLink>
          </CardContentDiv>
          <BrowserView>
            <CardIconDiv>
                <CardImageAnimated src={customIcon} />
            </CardIconDiv>
          </BrowserView>
        </CardAnimated>
      </CardDiv>
    </div>
  );
};

export default Servicespage;
