// src/components/ui/Buttons.js
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const ButtonLink = styled(RouterLink)`
  border: 2px solid var(--c-accent);
  border-radius: 10px;
  padding: 0.6em 1.2em;
  font-size: clamp(0.7rem, 2vw, 1rem);
  font-weight: 500;
  font-family: inherit;
  background-color: var(--c-accent);
  color: var(--c-buttontext);
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  &:hover {
    background-color: var(--c-accent);
    color: var(--c-black);
  }



`;

export const ButtonLinkExplore = styled(ButtonLink)`
  background-color: transparent;
  color: var(--c-white);
  font-size: clamp(0.7rem, 2vw, 1rem);
  border: 2px solid var(--c-white);
`;

export const RegularLink = styled(ButtonLink)`
  background-color: transparent;
  font-size: clamp(0.7rem, 2vw, 1rem);
  border: 0;
  color: var(--c-white);

  &:hover {
    border-bottom: 2px solid var(--c-white);
    color: var(--c-white);
    background-color: transparent;
  }
`;

export const RegularLinkMod = styled(RegularLink)`
  color: var(--c-black);
  border:none;

  &:hover{
    color: var(--c-accent);
    border:none;
  }

`;