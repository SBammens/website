import React from 'react'
import styled from 'styled-components';
import { ButtonLink, RegularLink, RegularLinkMod } from '../components/Buttons';

import ImgATS from '../assets/partners/ATS.png'
import ImgElevatePilates from '../assets/partners/Elevate_Pilates.png'
import ImgVanhexCarcare from '../assets/partners/Vanhexcarcare.png'

const PageDiv = styled.div`
display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

`;

const ContentDiv = styled.div`
    width: var(--v-cont-width);
    max-width: 100%;
    display: grid;
    padding: 4em 2em;
    overflow-x: hidden;

    @media (max-width: 768px) {
      width: 95%;
      padding: 2em 1em;
    }

    @media (max-width: 480px) {
      padding: 2em 0.5em;
    }
`;

const CardBody = styled.div`
  display: flex;
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  border: 0px solid #0003;
  box-shadow: 0 0 0 1px #0003 inset, 0 2px 4px #0000001a, 0 8px 14px #00000026;
  width: 100%;
  max-width: 100%;
  height: 500px;
  margin-top: 2em;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 1.5rem;
  }

`;

const CardTextDiv = styled.div`
  padding-right: 1rem;
  overflow-y: auto;
  flex: 0.7;

  @media (max-width: 1024px) {
    padding-right: 0;
    padding-bottom: 1rem;
    overflow-y: visible;
  }
`;

const CardImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: 0.3;

  @media (max-width: 1024px) {
    flex: 1;
    max-height: 300px;
  }
`;


const PortImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const SubTitle = styled.h4`
    margin: 3em 0 0.5em 0;
    font-size: 1.2rem;
`;

const UnorderedList = styled.ul`
    margin: 0;
`;

const Desc = styled.p`
    margin: 0;
`;


const PortofolioPage = () => {
  return (
    <PageDiv>
        <ContentDiv>
            
            <h1>Happy clients</h1>
            <p>Have a look at all the people that were happy with our service. Servicing partners of all industries.</p>
            
            
            <CardBody>
                <CardTextDiv>
                    <h3>All Tank Solutions</h3>
                    <Desc>All Tank Solutions is an innovative family company founded in 1994 that develops, manufactures, and installs stationary and mobile tanks.</Desc>

                    <SubTitle>We provided:</SubTitle>
                    <UnorderedList>
                        <li>Support with configuration of the Odoo business software</li>
                        <li>Custom software to generate conformity reports</li>
                        <li>Custom importer algorithm of sale orders</li>
                    </UnorderedList>
                </CardTextDiv>

                <CardImgDiv>
                    <PortImg src={ImgATS}/>
                </CardImgDiv>
            </CardBody>

            <CardBody>
                <CardTextDiv>
                    <h3>Elevate Pilates</h3>
                    <Desc>Elevate Pilates is a studio based in Darmstadt that combines an effective training and flexibility while keeping a strong connection with your body and mind. </Desc>

                    <SubTitle>We provided a website that:</SubTitle>
                    <UnorderedList>
                        <li>Looks beautiful on mobile and dekstop devices</li>
                        <li>Is easier to find online by applying the latest Search Engine Optimization (SEO) techniques</li>
                        <li>Includes domain name registration and hosting</li>
                        <li>A custom contact form that allows visitors to easily reach out</li>
                    </UnorderedList>
                </CardTextDiv>

                <CardImgDiv>
                    <PortImg src={ImgElevatePilates}/>
                </CardImgDiv>
            </CardBody>

            <CardBody>
                <CardTextDiv>
                    <h3>Vanhex Carcare</h3>
                    <Desc>Vanhex Carcare is a professional car detailer providing mobile detailing services ranging from external to internal cleanings and a wide variaty of coatings.</Desc>

                    <SubTitle>We provided a website that:</SubTitle>
                    <UnorderedList>
                        <li>Looks beautiful on mobile and dekstop devices</li>
                        <li>Has an integrated AI chatbot that can help website visitors make decisions and answer questions</li>
                        <li>An integration that displays and links the instagram page of the business</li>
                        <li>Is easier to find online by applying the latest Search Engine Optimization (SEO) techniques</li>
                        <li>Includes domain name registration and hosting</li>
                    </UnorderedList>
                </CardTextDiv>

                <CardImgDiv>
                    <PortImg src={ImgVanhexCarcare}/>
                </CardImgDiv>
            </CardBody>


            <RegularLinkMod to="/Contact"> Become part of this list! →</RegularLinkMod>

        </ContentDiv>
    </PageDiv>
  )
}

export default PortofolioPage
