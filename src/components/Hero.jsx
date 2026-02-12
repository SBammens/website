import React from 'react';
import styled from 'styled-components';
import heroImg from '../assets/hero_image.avif';
import { Link as RouterLink } from 'react-router-dom';
import { ButtonLink } from './Buttons';


const ButtonLinkExplore = styled(ButtonLink)`
  background-color: transparent;
  color: var(--c-white);
  border: 2px solid var(--c-white);

  &:hover{
    background-color: var(--c-white);
  }
`;

const MasterContainer = styled.div`
  background-color: var(--c-black);
  padding: 8rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.section`
  color: var(--c-lgrey);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10rem 0 2rem 0;

  @media (max-width: 768px) {
    padding: 5rem 0 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0 1rem 0;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  position: relative;
  max-width: 1200px;
  width: 100%;
`;

const Headline = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  font-weight: 500;
  letter-spacing: -0.02em;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  transform: translateY(-50%);
  max-width: 1000px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 80px 40px 40px rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border-radius: 25%;
  font-family: "Manrope";

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    position: relative;
    transform: translateY(-50%);
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      transparent 100%
    );
    
    padding: 1rem 2rem;
    margin: -2rem auto 0; // Center horizontally
    width: fit-content;
    border-radius: 50px; // Soft rounded edges
    box-shadow: 0 -20px 44px rgba(0, 0, 0, 0.20); // Subtle radial shadow
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    padding: 0.75rem 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;





const ImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 800px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;

  @media (max-width: 768px) {
    opacity: 0.7;
  }
`;

const Subdiv = styled.div`
  color: var(--c-subtext);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 0;
`;

const SubContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SubTxtDiv = styled.div`
  flex: 1;
`;

const SubTxt = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  color: var(--c-subtext);
`;

const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5em;
  margin-left: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 0.5em;
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <MasterContainer>
      <Container>
        <Content>
          <ImageWrapper>
            <Image src={heroImg} alt="Workspace with monitor" />
          </ImageWrapper>
          <Headline>
            Solutions <br /> engineered for  <br />your growth
          </Headline>
        </Content>
      </Container>

      <Subdiv>
        <SubContentDiv>
          <SubTxtDiv>
            <SubTxt>
              Custom web, IT, and AI automation for medium sized businesses. <br />
              Built by an industry professional for efficiency and scalability.
            </SubTxt>
          </SubTxtDiv>

          <ButtonDiv>
            <ButtonLink to='/Contact'>Start now</ButtonLink>
            <ButtonLinkExplore to='/Portofolio'>Explore</ButtonLinkExplore>
          </ButtonDiv>
        </SubContentDiv>
      </Subdiv>
    </MasterContainer>
  );
};

export default Hero;
