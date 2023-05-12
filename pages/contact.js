// pages/contact.js

import styled from 'styled-components';
import Navbar from '../components/Navbar';

// pages/index.js and pages/contact.js

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px); // subtract the navbar's height
  padding-top: 60px; // add padding at the top equal to the navbar's height
  background-color: #f5f5f5;
  // other styles...
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
`;

const Info = styled.p`
  font-size: 1.2em;
  color
  color: #333;
`;

export default function Contact() {
  return (
    <Container>
      <Navbar />
      <Title>Contact Me</Title>
      <Info>Email: askareth@gmail.com</Info>
      <Info>Crypto address: askar.eth</Info>
    </Container>
  );
}
