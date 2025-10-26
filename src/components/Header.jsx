import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonLink, RegularLink } from './Buttons';

import SamplicationsLogo from '../assets/logo.png'

const HeadDiv = styled.div`
  width: 100%;
  z-index: 1000;
  background-color: var(--c-black);
  display: flex;
  justify-content: center;
  color: var(--c-white);
  padding: 2em;

  @media (max-width: 768px) {
    padding: 1.5em 1em;
  }
`;

const HeadContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 0.5em;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--c-black);
    padding: 1em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index:2;
  }
`;


const Title = styled.h1`
  font-weight: 400;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TitleLink = styled(RegularLink)`
  display: flex;
  align-items: center;

  &:hover{
    border: none;
  }

  @media (max-width: 768px) {
    gap: 0.3em;
  }
`;

const Logo = styled.img`
  height: 2rem;
  margin-right: 0.6em;

  @media (max-width: 768px) {
    height: 1.5rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: 2px solid var(--c-white);
  color: var(--c-white);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.3em 0.6em;
  border-radius: 5px;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    background-color: var(--c-white);
    color: var(--c-black);
  }
`;

const HeadWrapper = styled.div`
  position: relative;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeadWrapper>
      <HeadDiv>
        <HeadContentDiv>
          <TitleLink to="/"><Logo src={SamplicationsLogo}/><Title>Samplications</Title></TitleLink>

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>

          <Navbar isOpen={isMenuOpen}>
            <RegularLink to="/" onClick={() => setIsMenuOpen(false)}>Home</RegularLink>
            <RegularLink to="/Portofolio" onClick={() => setIsMenuOpen(false)}>Portofolio</RegularLink>
            <ButtonLink to="/Contact" onClick={() => setIsMenuOpen(false)}>Contact</ButtonLink>
          </Navbar>
        </HeadContentDiv>
      </HeadDiv>
    </HeadWrapper>
  );
};

export default Header;
