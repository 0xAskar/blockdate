// components/Navbar.js

import styled from 'styled-components';
import Image from "next/image"
import Styles from "../styles/Navbar.module.css"
import Github from "../public/images/github.svg"

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  position: absolute;
  width: 95%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const NavLinks = styled.div`
  a {
    margin-left: 20px;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #666;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <a className = {Styles.title} href="/">BlockDate</a>
      <NavLinks>
        <a href="/contact">Contact</a>
        
        <a target="_blank" href = "https://github.com/0xAskar">Askar </a>
        <Image src={Github} width={15} height={15}/> 
        <a target="_blank" href="https://github.com/monosux/ethereum-block-by-date"> Library </a>
        <Image src={Github} width={15} height={15}/> 
        <a target="_blank" href="https://www.npmjs.com/package/ethereum-block-by-date">NPM</a>
      </NavLinks>
    </Nav>
  );
}
