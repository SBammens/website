import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const FAQDiv = styled.div`
  width: 100%;
  padding: clamp(1em, 3vw, 2em) 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const FAQList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 1em;
  margin-bottom: 1em;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    gap: 0.5em;
  transition: opacity 0.3s;

`;

const QuestionText = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  margin-bottom:0;

  color: var(--c-black);
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 0.5em;
  flex: 1;
`;

const FAQAnswer = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, margin-top 0.3s ease-out;
  margin: 0;


 max-height: 1000px;
 margin-top: 0.5em;

`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: clamp(1em, 3vw, 2em);
  width: 100%;
  max-width: 1600px;
  padding: 0 clamp(1em, 3vw, 2em);
  box-sizing: border-box;
`;

const FAQ = () => {

  const faqs = [
    {
      question: 'Which services are available?',
      answer:
        'We deliver web development, IT support, automation, and AI solutions tailored to your business needs and infrastructure.',
    },
    {
      question: 'How are solutions tailored?',
      answer:
        'We review your systems and goals, then design solutions that fit your operations for efficiency and growth.',
    },
    {
      question: 'What steps are in your process?',
      answer:
        'We start with a consultation, then plan, implement, and support your project, keeping you updated throughout.',
    },
    {
      question: 'How do I begin?',
      answer:
        'Reach out to schedule a consultation. We’ll discuss your needs and outline a clear project plan.',
    }
  ];


  return (
    <FAQDiv>
      <ContainerDiv>
            <FAQList>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQQuestion>
                    <QuestionText>
                      {faq.question}
                    </QuestionText>
                  </FAQQuestion>
                  <FAQAnswer>{faq.answer}</FAQAnswer>
                </FAQItem>
              ))}
            </FAQList>
      </ContainerDiv>
    </FAQDiv>
  );
};

export default FAQ;
