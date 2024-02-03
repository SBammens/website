import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const OnloadAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(3%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const CardDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2.5rem;
	width: 90%;
	max-width: 100%;
	margin: 5vh auto;

    /* Media query for screens with a maximum width of 767px (typical for mobile devices) */
    @media (max-width: 767px) {
        margin: 1vh auto;
    }

    opacity: 0;
    animation: ${OnloadAnimation} 1s ease-out forwards;
`;

const AnimatedCardDiv = styled(CardDiv)`
  &:nth-child(1) {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s; 
  }

  &:nth-child(3) {
    animation-delay: 0s;
  }
`

const Button = styled.button`
    background-color: var(--c-yellow);
    border: none;
    border-radius: 10rem;
    color: white;
    font-weight: 600;
    font-size: 1rem;
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

const ButtonLink = styled(Link)`
  text-decoration: none;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.article`
    border-radius: 16px;
    box-shadow: 0 30px 30px -25px rgba(65, 51, 183, 0.25);
    max-width: 100%;

    padding: 1.5em 2.5em;

    background-color: var(--c-white);

    /* Apply transition to background-color and color */
    transition: 350ms;

    &:hover{
        background-color: var(--c-yellow);
        color: black;
        transform: translateY(-10px); /* scale(1.2)*/

        button {
            background-color: black;

            &:hover {
                box-shadow: inset 250px 0 0 0 white;
                transform: scale(1.1);
                color: black;
            }
        }

        p {
            color: black;
        }
    }
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.01em; 
    margin:0;
`;

const CardInfo = styled.p`
    color: var(--c-charcoal);
    margin-top: .5em;
    margin-bottom: 1em;
`;

const BulletPoints = styled.ul`
    margin-top: 0em;
    margin-bottom: 1.5em;
`

const OptionCard = ({options}) => {

    return (
            <AnimatedCardDiv>
                <Card>
                    <CardTitle>{options[0]}</CardTitle>
                    <CardInfo>{options[1]}</CardInfo>

                    <BulletPoints>
                        {options[2].map((bulpoint,index) => (
                            <li key={bulpoint}>{bulpoint}</li>
                        ))}
                    </BulletPoints>
                    <ButtonLink to={`/Services`}>{/* <ButtonLink to={`/${options[0]}`}> */}
                        <Button>Get started!</Button>
                    </ButtonLink>
                </Card>
            </AnimatedCardDiv>
    )
}

export default OptionCard
