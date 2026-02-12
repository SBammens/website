import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ButtonLink, RegularLink, RegularLinkMod } from "./components/Buttons";

import IconCompass from "./assets/icons/compass-alt.svg";
import IconMap from "./assets/icons/map-location-track.svg"
import IconCogwheel from "./assets/icons/settings.svg"
import IconGift from "./assets/icons/gift-box-benefits.svg"

import Hero from "./components/Hero";
import TabsSection from "./components/Tabsection";
import FAQ from "./components/Faq";
import Card from "./components/Card";

const PageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
`;

const Section = styled.section`
  width: 100%;
  padding: 8rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const GreySection = styled(Section)`
  background-color: var(--c-lgrey);
  width: 100%;
`;

const SectionCont = styled.div`
  width: var(--v-cont-width);
  max-width: 1500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  padding: 1em;

  @media (max-width: 768px) {
    padding: 0.5em;
  }
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  width: var(--v-cont-width);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    width: 100%;
  }
`;

const GridStepsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.5rem;
  width: var(--v-cont-width);
  padding: 1em;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0.5em;
  }
`;

const GridDivPartners = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }


`;

const PartnerImg = styled.img`
  max-height: 100px;
  max-width: 100px;

  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled.p`
  font-size: 0.9rem;
`;

const CenterDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const FaqDiv = styled.div`
  width: var(--v-cont-width);
`;

const SloganTxt = styled.h1`
  font-size: 5.65rem;
  font-weight: 500;
  text-align: center;
  margin: 0.4em 0;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const SlightlyBold = styled.h3`
  font-weight: 800;
  font-family: "DM Sans";
`;

const ExploreTxt = styled.p`
  margin-top: 0;
  font-size: 1.1rem;
`;

const ButtonLinkBigger = styled(ButtonLink)`
  font-size: 1.2rem;
`;

// Load images
const images = import.meta.glob("/src/assets/partners/*.{jpg,jpeg,png,gif}", {
  eager: true,
});
const imageUrls = Object.values(images).map((mod) => mod.default);

function App() {
  const StepCards = [
    {
      svg: IconCompass,
      title: "Consultation",
      text: "We start a conversation to explore the hurdles your business is dealing with and how we can help in overcoming them",
    },
    { 
      svg:IconMap,
      title: "Orientation",
      text: "Together we outline specific requirements and goals for your project. While respecting any constraints specific to the project or your business",
    },
    {
      svg: IconCogwheel,
      title: "Development",
      text: "Once a plan is established we start our development process. During this period you will receive regular updates on its status. This keeps you informed and allows us to address any concerns in early stages",
    },
    {
      svg: IconGift,
      title: "Delivery",
      text: "We go over the final result with you to ensure your expectations are met and all of the set requirements are fulfilled",
    },
  ];

  return (
    <>
      <Hero />

      <PageDiv>
        <Section>
          <SectionCont>
            <CenterDiv>
              <GridDiv>
                <div>
                  <h3>Partners in digital transformation</h3>
                  <p>
                    Discover the businesses that trust my tailored web, IT,
                    automation, and AI solutions to streamline operations and
                    drive results.
                  </p>
                </div>
                <GridDivPartners>
                  {imageUrls.map((imgsrc, index) => (
                    <div key={index}>
                      <PartnerImg src={imgsrc} alt={`Slide ${index}`} />
                    </div>
                  ))}
                </GridDivPartners>
              </GridDiv>
            </CenterDiv>
          </SectionCont>
        </Section>

        <GreySection>
          <SectionCont>
            <TabsSection />
          </SectionCont>
        </GreySection>

        <Section>
          <SectionCont>
            <CenterDiv>
              <SectionTitle>PLAN</SectionTitle>
              <SlightlyBold>Simple and Clear</SlightlyBold>
              <ExploreTxt>
                A clear approach makes an efficient execution
              </ExploreTxt>

              <GridStepsDiv>
                {StepCards.map((textItem, index) => (
                  <Card
                    svg={textItem.svg}
                    title={textItem.title}
                    text={textItem.text}
                    key={index}
                  />
                ))}
              </GridStepsDiv>
            </CenterDiv>
          </SectionCont>
        </Section>

        <GreySection>
          <SectionCont>
            <CenterDiv>
              <SectionTitle>CUSTOM IT AND AI FOR BUSINESSES</SectionTitle>
              <SloganTxt>
                Power your growth
                <br />
                with smart solutions
              </SloganTxt>
              <ButtonLinkBigger to="/Contact">Contact me</ButtonLinkBigger>
            </CenterDiv>
          </SectionCont>
        </GreySection>

        <Section>
          <SectionCont>
            <CenterDiv>
              <SectionTitle>FAQ</SectionTitle>
              <SlightlyBold>Your questions, answered simply</SlightlyBold>
              <ExploreTxt>
                Explore clear answers about my web, IT, automation, and AI
                services for medium sized businesses.
              </ExploreTxt>

              <FaqDiv>
                <FAQ />
              </FaqDiv>

              <RegularLinkMod to="/Contact">
                Get in touch!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </RegularLinkMod>
            </CenterDiv>
          </SectionCont>
        </Section>

        {/* <GreySection>
        <SectionCont>
        <div>
          Start your project today 
        </div>
        <div>
          Get in touch
        </div>
</SectionCont>
      </GreySection> */}
      </PageDiv>
    </>
  );
}

export default App;
