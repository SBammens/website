import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: var(--c-white);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SvgIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.75rem 0;
  color: var(--c-black);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Card = ({ svg, title, text }) => {
  return (
    <CardContainer>
      <SvgIcon src={svg}></SvgIcon>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default Card;
