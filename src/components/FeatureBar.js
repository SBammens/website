import React from 'react'
import styled, { keyframes }  from 'styled-components'

const slideDown = keyframes`
  0% {
    transform: translateY(-40%);
    opacity: 0;
    scale(1.1);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    scale(1);
  }
`;

const FeatureDiv = styled.div`
    background-color: #333;
`

const FeatureList = styled.ul`
    color: #ffff;

    padding: 1.5em;

    list-style-type: none;
    overflow: hidden;

    display: flex;
    justify-content: space-around;

    position: relative;
    overflow: hidden;

    max-width: 3000px;
`;

const FeatureItem = styled.li`
    margin:0;
    font-family: Montserrat;
    font-weight: bold;

    display: flex;
    align-items: center;

    opacity:0;

    animation: ${slideDown} 1s ease-out forwards;
`;

const FeatureImg = styled.img`
  height: 2.5em;
  width: 2.5em;

  margin-right: 0.25em;
`;

const AnimatedFeatureItem = styled(FeatureItem)`
  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.5s; 
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }

  &:nth-child(4) {
    animation-delay: 1.5s;
  }

  &:nth-child(5) {
    animation-delay: 2s; 
  }

  &:nth-child(6) {
    animation-delay: 2.5s; 
  }

  &:nth-child(7) {
    animation-delay: 3s;
  }

  &:nth-child(8) {
    animation-delay: 3.5s; 
  }

  &:nth-child(9) {
    animation-delay: 4s; 
  }

  /* Add more nth-child rules for additional FeatureItems */
`;

const FeatureBar = ({items}) => {

  return (
    <FeatureDiv>
      <FeatureList>
        {items.map((element, rowIndex) => (
          <AnimatedFeatureItem key={element[2]}><FeatureImg loading="lazy" src={element[0]} alt={element[1]}/><span>{element[2]}</span></AnimatedFeatureItem>
        ))}
        </FeatureList>
    </FeatureDiv>
  )
}

export default FeatureBar
