import React from 'react'
import styled, { keyframes }  from 'styled-components'
import { Link } from 'react-router-dom';

import FeatureBar from '../components/FeatureBar'
import OptionCard from '../components/OptionCard'

import brand_logo from '../assets/public-relation_inv.png'
import clients_logo from '../assets/increase_inv.png'
import automate_logo from '../assets/engineering_inv.png'
import ai_logo from '../assets/ai_inv.png'

const PageDiv = styled.div`

`;

const customOne = keyframes`
0% {
    transform: translateY(20px);
    opacity: 0;
    transform: scale(1.05);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    transform: scale(1);
  }
`

const Button = styled.button`
    background-color: var(--c-yellow);
    border: none;
    border-radius: 10rem;
    color: white;
    font-weight: 600;
    font-size: 1.25rem;
    pointer-events: all;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    box-shadow: inset 0 0 0 0.09px black;
  
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 30px;

    opacity: 0;
    animation: ${customOne} .8s ease-in-out 0.2s forwards;
  
    &:hover {
        box-shadow: inset 250px 0 0 0 black;
        transform: scale(1.1);
    }
`;

const CTAFooterButton = styled(Button)`
    opacity: 1;
    animation: none;
`

const ButtonLink = styled(Link)`
    text-decoration: none;
    
`;

const CardDeck = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    width: 90%;
    max-width: 1000px;
    margin: 3vh auto;

    /* Media query for screens with a maximum width of 767px (typical for mobile devices) */
    @media (max-width: 767px) {
        flex-direction: column; /* Stack cards vertically on mobile */
        align-items: center; /* Center cards horizontally within the container */
        gap: 1rem;
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
`;

const Card = styled.article`
    border-radius: 16px;
    box-shadow: 0 30px 30px -25px rgba(65, 51, 183, 0.25);
    max-width: 100%;

    padding: 1.5em 2.5em;

    background-color: var(--c-white);
`;

const CardTitle = styled.h2`
    font-size: 5rem;
    line-height: 1.1;
    letter-spacing: -0.01em; 
    margin:0;

    opacity: 0;
    animation: ${customOne} .8s ease-in-out 0s forwards;
`;

const CardInfo = styled.p`
    color: var(--c-charcoal);
    margin-top: .5em;
    margin-bottom: 2em;

    opacity: 0;
    animation: ${customOne} .8s ease-in-out 0.1s forwards;
`;

const CTADiv = styled.div`
    background-color: #333;
    color: white;
    font-family: Montserrat;

    display: flex;
    justify-content: center;
`

const CTATxtDiv = styled.div`
    margin-right: 3em;
    
    @media (max-width: 767px) {
        margin-left: 1.2em;
    }

    h3 {
        margin-top:1.5em;
        margin-bottom: 0.5em;
    };

    p {
        margin-top:0;
        margin-bottom: 1.5em;
    };
`;

const CTAButtonDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    @media (max-width: 767px) {
        margin-right: 1.2em;
    }

    button {
        margin-bottom: 1.5em;
    };
    
`;

const Homepage = () => { 

    // Load items for Featurebar
    const featuresList = [
        [brand_logo, "Brand icon", "Build your brand"],
        [clients_logo, "Clients icon", "Connect with new clients"],
        [automate_logo, "Automation icon", "Automate repetitive tasks"],
        [ai_logo, "AI icon", "Custom AI solutions"],
    ];

    const optionList = [
        ["Websites", "Show of your products and services on a professional custom website where everything can be changed to fit your liking.", ["Professional website", "Hosting and maintenance", "Custom features"]],
        ["Automation", "Automate repetitive tasks to increase efficiency and prevent human errors", ["Free automation audit", "Save time and money", "Up-to-date solutions"]],
        ["Custom Solutions", "Sometimes you just need a computer guy or electronics engineer.", ["Garantueed satisfaction", "Close cooperation", "Competitve pricing"]],
    ];

  return (
    <div>

        <PageDiv>
            <section>

                <CardDiv>
                    <Card>
                        <CardTitle>The Go-To <br/>Digital Expert <br/>for Your Business</CardTitle>
                        <CardInfo>Get more sales and save money with our services tailored specifically to your business' needs</CardInfo>
                        <ButtonLink to="/Services">
                            <Button>Get started!</Button>
                        </ButtonLink>
                    </Card>
                </CardDiv>
            </section>

            <section>
                <FeatureBar items={featuresList}/>
            </section>

            <section>
                <CardDeck>
                    {optionList.map((option,index) => (
                            <OptionCard options={option} key={option[0]}/>
                        ))}
                </CardDeck>
            </section>

            <section className="FAQ?">
                    
            </section>

            <section>
                <CTADiv>
                    <CTATxtDiv>
                        <h3>Improve your business today</h3>
                        <p>What are you waiting for? Increase sales or boost your efficiency today!!</p>
                    </CTATxtDiv>
                    <CTAButtonDiv>
                        <ButtonLink to="/Services">
                            <CTAFooterButton>Get in touch!</CTAFooterButton>
                        </ButtonLink>
                    </CTAButtonDiv>
                </CTADiv>
            </section>

        </PageDiv>
    </div>
  )
}

export default Homepage
