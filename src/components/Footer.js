import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
  background-color: #222;
  color: white;

  font-family: Montserrat;
  font-size: 0.7em;
  
  padding:0.2em;
  margin-top: auto;

  p {
    margin:0.2em;
    display: flex;
    justify-content: right;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <p>Courtesy of Samplications©</p>
    </FooterDiv>
  )
}

export default Footer
