import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  background: var(--c-white);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  grid-column: 1 / span 2;
  height: fit-content;

  height: 100%;

  @media (max-width: 1024px) {
    grid-column: 1;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ItemTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--c-black);

  @media (max-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

const ItemText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const CardItem = ({ title, text }) => {
  return (
    <ItemContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemText>{text}</ItemText>
    </ItemContainer>
  );
};

export default CardItem;
