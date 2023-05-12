// pages/contact.js

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Styles from "../styles/Contact.module.css"
import Link from "next/link"


// pages/index.js and pages/contact.js

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  padding-top: 160px; // add padding at the top equal to the navbar's height
  background-color: #f5f5f5;
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
            <Title>Contact</Title>
        <div className = {Styles.contactcards}>
            <div className = {Styles.contactcard}>
                <div className = {Styles.infoTitle}> Website Dev </div>
                <div className = {Styles.info}> Email: askareth@gmail.com </div>
                <div className = {Styles.info}> Discord: Askar#1000 </div>
                <div className = {Styles.info}> Eth address:  
                    <Link href ="https://etherscan.io/address/0x94DBCE8a42E2F578ad80266863bc9C7d2e04ea6A">  
                        {" askar.eth"}
                    </Link>
                </div>
            </div>
            <div className = {Styles.contactcard}>
                <div className = {Styles.infoTitle}> Library Dev </div>
                <div className = {Styles.info}> Email: alexeev.sergey.a@gmail.com </div>
                <div className = {Styles.info}> Eth address:  
                    <Link href ="https://etherscan.io/address/0x18F54b91f7e19c51fA701E7ed5628fA45441d872">  
                        {" 0x18F...1d872"}
                    </Link>
                </div>
            </div>
        </div>
    </Container>
  );
}
