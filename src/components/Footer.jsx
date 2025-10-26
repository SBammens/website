import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { ButtonLink } from './Buttons';

const FooterLink = styled(RouterLink)`
  color: var(--c-white);
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const FooterContainer = styled.footer`
  background-color: var(--c-black);
  color: white;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--c-white);
  padding: clamp(1em, 3vw, 2em);
`;

const FooterBottom = styled.div`
  text-align: center;
  p {
    margin: 0.5em 0;
    font-size: clamp(0.65rem, 1.8vw, 0.7rem);
  }
`;

const Bizname = styled.p`
  color: var(--c-white);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterBottom>
          <Bizname>&copy; {currentYear} Samplications</Bizname>
          <p>
            <FooterLink to="/Impressum">Impressum</FooterLink> |{' '}
            <FooterLink to="/Privacy">Privacy Statement</FooterLink> |{' '}
            <FooterLink to="/Disclaimer">Disclaimer</FooterLink>
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
