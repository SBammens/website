import React from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';

const showCards = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  90% {
    opacity: 1;
    transform: scale(1.03);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

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

const Card = styled.div`
  border-radius: 16px;
  box-shadow: 0 30px 30px -25px rgba(65, 51, 183, 0.25);
  width: 100%;

  padding: 1.5em 1.7em;

  background-color: var(--c-white);

  opacity: 0;
  animation: ${showCards} 1s ease-in-out 0.2s forwards;
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.01em; 
    margin:0;
`;

const CardInfo = styled.p`
    color: #333;
    font-family:Montserrat;
    margin-top: .5em;
    margin-bottom: 0.5em;
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 93%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;
  font-family:Montserrat;
  font-weight: bolder;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  font-family:Montserrat;
  border-radius: 10px;
  outline: 2px solid #333;
  border: 0;
  background-color: #fff;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: outline 0.25s ease;

  &:hover {
    outline: 2px solid var(--c-yellow);
    transition: outline 0.25s ease;
  }

  &:focus {
    outline-offset: 5px;
    outline: 2px solid #61892F;
    transition: outline 0.25s ease;
  }
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  font-family:Montserrat;
  border-radius: 10px;
  outline: 2px solid #333;
  border: 0;
  background-color: #fff;
  outline-offset: 3px;
  padding: 10px 1rem;
  resize: vertical;
  transition: outline 0.25s ease;

  &:hover {
    outline: 2px solid var(--c-yellow);
    transition: outline 0.25s ease;
  }

  &:focus {
    outline-offset: 5px;
    outline: 2px solid #61892F;
    transition: outline 0.25s ease;
  }
`;

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

    margin-top: 2em;

    align-self: flex-end;

    @media (max-width: 767px) {
      align-self: center;
  }
  
    &:hover {
        box-shadow: inset 250px 0 0 0 black;
        transform: scale(1.1);
    }
`;



const ContactForm = () => {

 const sendEmail = (e) => {
  
  e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_65d01zl', 'template_uqol1mj', e.target, 'kOvmC5bVWZLywIJxx')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         console.log(error);
     });
     e.target.reset();
     window.alert("Thank you for reaching out. Your message has been sent. We will get back to you as soon as possible");
 };

  return (
    <div>
      <CardDiv>
        <Card>
          <CardTitle>Contact us</CardTitle>
          <CardInfo>Curious if we can be helpful to you? TODO lorem ipmsum dolomitus dongoren dongodon <br/>We will get back to you as soon as possible. </CardInfo>        
          <FormDiv>
            <Form onSubmit={sendEmail}>
                <Label for="name">Your Name:</Label>
                <Input type="text" id="name" name="name" placeholder='Type your name here...' required/>

                <Label for="email">Your Email:</Label>
                <Input type="email" id="email" name="email" placeholder='Type your email adress here...' required/>

                <Label for="message">Message:</Label>
                <TextArea id="message" name="message" rows="8" placeholder='Type message or question here...' required></TextArea>

                <Button type="submit">Send Email</Button>
            </Form>
          </FormDiv>
        </Card>
      </CardDiv>
    </div>
  )
}

export default ContactForm
