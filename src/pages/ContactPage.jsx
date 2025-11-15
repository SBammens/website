import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";
import { ButtonLink, RegularLink } from "../components/Buttons";
import axios from "axios";

// Define a keyframe animation for the loading spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 3px solid #4a6baf;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
  margin: 10px;
`;

const PageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  width: 100%;
  max-width: 1600px;
  padding: clamp(1em, 4vw, 8em);
  padding-top: clamp(2em, 4vw, 8em);
  box-sizing: border-box;
`;

const SectionTitle = styled.h1`
  font-family: "Manrope";
  font-weight: 400;
  margin-bottom: 0;
  text-align: center;
  font-size: clamp(2rem, 6vw, 4rem);
`;

const CardInner = styled.div`
  margin-top: 2em;
  background: var(--c-white);
  border-radius: 1rem;
  box-shadow: 0 0 0 1px #0003 inset, 0 2px 4px #0000001a, 0 8px 14px #00000026;
  padding: clamp(1em, 3vw, 1em);
  width: 70%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1em;
  }
`;

const RowDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  padding: 2em 0;
`;

const FormDiv = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 1rem;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 0.75em;
  border: 1px solid var(--c-black);
  border-radius: 1rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  background: var(--c-white);
  color: var(--c-black);
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--c-accent);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75em;
  border: 1px solid var(--c-black);
  border-radius: 1rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  min-height: 300px;
  resize: vertical;
  background: var(--c-white);
  color: var(--c-black);
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--c-accent);
  }
`;

const SubmitBtn = styled.button`
  background-color: var(--c-secondary);
  color: var(--c-buttontext);
  font-size: clamp(1rem, 2vw, 1.2rem);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  transition: all 0.3s;
  font-family: inherit;
  font-weight: 500;
  width: 100%;
  margin-bottom: 1em;

  border: none;

  &:hover {
    background-color: var(--c-white);
    color: var(--c-black);
    box-shadow: 0 0 0 1px var(--c-secondary) inset,
      var(--c-secondary) 0px 8px 24px;

    svg {
      stroke: var(--c-black);
    }
  }

  svg {
    height: 24px;
    width: 24px;
    fill: var(--c-white);
    stroke: none;
    transition: all 0.3s;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const GITtxt = styled.h3`
  margin: 0.5rem;
  padding-bottom: 0.5em;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 15px;
  height: 300px;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    height: 250px;
    padding: 10px;
  }

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4a6baf;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ChatInput = styled.input`
  padding: 15px;
  border: none;
  border-radius: 10px;
  border-top: 1px solid #ccc;
  outline: none;
  width: 100%;
`;

const UserMessage = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  color: #000;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
  align-self: flex-end;
  margin-left: auto;
`;

const BotMessage = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: var(--c-secondary);
  color: white;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
  align-self: flex-start;
  margin-right: auto;
`;

const ChatHeader = styled.div`
  background-color: var(--c-lgrey);
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.95rem;
  }
`;

const ContactPage = () => {
  // EMAIL FUNCTIONS
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        "service_65d01zl",
        "template_uqol1mj",
        form.current,
        "kOvmC5bVWZLywIJxx"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  // CHATBOT functions
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatEnded, setIsChatEnded] = useState(false);
  const [chatSuccess, setChatSuccess] = useState(false);
  const [chatError, setChatError] = useState(false);

  const messagesEndRef = useRef(null);

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  useEffect(() => {
    //scrollToBottom();
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = { text: inputValue, sender: "user", role: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://openai-backend-6999.onrender.com/api/samplications/chat",
        {
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                'Role:\
You are Thomas, a friendly, professional AI sales assistant for Samplications (AI, web, and software development). Engage visitors on the contact page, qualify leads, and address their needs.\
\
Core Tasks:\
Qualify the Lead:\
Ask open-ended questions (e.g., "What are your project goals and challenges?").\
Assess fit (budget, timeline, scope).\
\
Provide Validation:\
Reassure them that Samplications can address their needs."\
Highlight expertise without overselling.\
\
Address Concerns:\
Listen actively and resolve doubts.\
\
Wrap Up:\
Always end the conversation with something that includes: "Thank you for your time."\
Dont ask questions when wrapping up\
Example: "We’ll review your details and follow up with a tailored quote."\
\
Tone:\
Friendly, professional, concise, and empathetic.\
Avoid jargon; focus on clarity.\
\
Flow:\
Greet\
Ask about their project\
Validate needs and explain how we can help\
Address concerns\
Ask email we can reach out on (never in the same message where you thank them for their time)\
Wrap up and confirm next steps\
\
Rules:\
Never provide quotes or promises\
If asked technical details beyond scope: "Let me connect you with our team for a detailed answer." and wrap up (dont forget to thank them for their time',
            },
            ...messages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            { role: "user", content: inputValue },
          ],
        }
      );

      const botMessage = {
        text: response.data.choices[0].message.content,
        sender: "bot",
        role: "assistant",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      // Check if the bot's message indicates the end of the conversation
      if (
        response.data.choices[0].message.content
          .toLowerCase()
          .includes("thank you for your time") ||
        response.data.choices[0].message.content
          .toLowerCase()
          .includes("bedankt voor je tijd")
      ) {
        setIsChatEnded(true);
      }
    } catch (error) {
      console.error("Error calling ChatGPT API:", error);
      const errorMessage = {
        text: "Sorry, something went wrong. Please try again later.",
        sender: "bot",
        role: "assistant",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendChatTranscript = () => {
    const transcript = messages
      .map((msg) => `${msg.sender === "user" ? "User" : "Bot"}: ${msg.text}`)
      .join("\n");
    emailjs
      .send(
        "service_65d01zl",
        "template_uqol1mj", 
        {
          user_name: "Chatbot User",
          user_email: "user@example.com", 
          message: `Chat Transcript:\n${transcript}`,
        },
        "kOvmC5bVWZLywIJxx"
      )
      .then(
        () => {
          setChatSuccess(true);
        },
        () => {
          setChatError(true); 
        }
      );
  };

  useEffect(() => {
    if (isChatEnded) {
      sendChatTranscript();
    }
  }, [isChatEnded]);

  return (
    <PageDiv>
      <ContainerDiv>
        <SectionTitle>Start growing your business</SectionTitle>

        <CardInner>
          <ChatHeader>Virtual Sales Assistant Thomas</ChatHeader>
          <ChatMessages>
            <BotMessage>
              Hi, lets have a chat and see if, or how, we can help :)
            </BotMessage>

            {messages.map((message, index) =>
              message.sender === "user" ? (
                <UserMessage key={index}>{message.text}</UserMessage>
              ) : (
                <BotMessage key={index}>{message.text}</BotMessage>
              )
            )}
            {isLoading && <LoadingSpinner />}
            <div ref={messagesEndRef} />
          </ChatMessages>
          <ChatInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" && !chatSuccess && handleSendMessage()
            }
            placeholder="Write here..."
            disabled={chatSuccess}
          />
          {chatSuccess && (
            <SuccessMessage>
              Thank you! Your chat transcript has been sent. The chat is now disabled.
            </SuccessMessage>
          )}
          {chatError && (
                <ErrorMessage>
                  Something went wrong! <br />
                  Please try again later.
                </ErrorMessage>
              )}
        </CardInner>

        <CardInner>
          <RowDiv>
            <GITtxt>Get in Touch!</GITtxt>

            <FormDiv ref={form} onSubmit={sendEmail}>
              <Input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
              <Input
                type="email"
                name="user_email"
                placeholder="Your email"
                required
              />
              <TextArea name="message" placeholder="Your message" required />
              <SubmitBtn type="submit">Send</SubmitBtn>
              {success && (
                <SuccessMessage>Message sent succesfully!</SuccessMessage>
              )}
              {error && (
                <ErrorMessage>
                  Something went wrong! <br />
                  Please try again later.
                </ErrorMessage>
              )}
            </FormDiv>
          </RowDiv>
        </CardInner>
        <RegularLink to="/">Back to homepage</RegularLink>
      </ContainerDiv>
    </PageDiv>
  );
};

export default ContactPage;
