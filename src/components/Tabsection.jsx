import React, { useState } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import ImgAutomation from '../assets/desktop_automation.png'


const Container = styled.div`
  margin: 0 auto;
`;

const TabsWrapper = styled.div`
 display: flex;
  flex-direction: column;
  
`;

const TabMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TabButton = styled.button`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  padding: 1rem 1.5rem;

  border-radius: 0;
  border: none;
  border-bottom: 3px solid;
  border-color: ${props => props.active ? 'var(--c-secondary)' : 'var(--c-buttontext)'};
  background-color: transparent;

  color: var(--c-buttontext);

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem 1rem;
  }

  &:hover{
    background-color: transparent;
    border-color: var(--c-secondary);
  }
`;

const TabContent = styled.div`
  position: relative;
`;

const ContentPane = styled.div`
  display: ${({ active }) => (active ? "grid" : "none")};
  transition: opacity 0.3s ease;

  grid-template-columns: 1fr;
  justify-items: center;
`;

const Heading = styled.h3`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  width: 80%;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;


const Image = styled.img`
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 1rem;
  grid-column: 3 / span 3;

  @media (max-width: 1024px) {
    grid-column: 1;
    max-height: 350px;
  }
`;


// ===== Component =====
const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    {
      key: "web",
      label: "Web development",
      title: "Tailored websites for your workflow",
      title2: "Custom web development",
      desc: "Secure, scalable websites tailored to your needs. Modern design, reliable performance, and expert support for your business.",
      image:
        "https://cdn.prod.website-files.com/68ebb065705e6d2f787709db/68ebb22e7c9bd7423c44e7cf_e94fb991-c92c-40d0-b017-b1a45e31568a.avif",
      alt: "strategic meeting with ai tools",
    },
    {
      key: "it",
      label: "IT automation",
      title: "Automate processes, boost efficiency",
      title2: "IT consulting & support",
      desc: "Expert guidance and support to optimize your IT infrastructure. Improve efficiency and keep your business running smoothly.",
      image:
        ImgAutomation,
      alt: "modern tech interface",
    },
    {
      key: "ai",
      label: "AI solutions",
      title: "Integrate AI for smarter operations",
      title2: "AI-driven automation",
      desc: "Boost productivity with custom AI solutions. Automate workflows and gain insights with intelligent data analysis.",
      image:
        "https://cdn.prod.website-files.com/68ebb065705e6d2f787709db/68ebb22e3b47ef24770a7f1c_9500bd8d-81f1-47f3-bdc3-3e08c226c8b2.avif",
      alt: "logistics control room (for a trucking company)",
    },
  ];

  return (
      <Container>
        <TabsWrapper>
          {/* Tab Menu */}
          <TabMenu role="tablist">
            {tabs.map((tab) => (
              <TabButton
                key={tab.key}
                active={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabMenu>

          {/* Tab Content */}
          <TabContent>
            {tabs.map((tab) => (
              <ContentPane key={tab.key} active={activeTab === tab.key}>
                

                <Heading>{tab.title}</Heading>

                <ContentDiv>
                  <CardItem title={tab.title2} text={tab.desc}/>
                  <Image src={tab.image} alt={tab.alt} loading="lazy" />

                </ContentDiv>
                
              </ContentPane>
            ))}
          </TabContent>

        </TabsWrapper>
      </Container>
  );
};

export default TabsSection;
