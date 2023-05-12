// pages/index.js

import { useState } from 'react';
import Styles from '../styles/Home.module.css';
// import fetch from 'node-fetch';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Loader from '../components/Loaders/SmallLoader.js';
import Image from "next/image"
import Github from "../public/images/github.svg"

// pages/index.js and pages/contact.js

const Select = styled.select`
  margin-top: 20px;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #333;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  padding-top: 160px; // add padding at the top equal to the navbar's height
  background-color: #f5f5f5;
`;


const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #333;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

export default function Home() {
    const [date, setDate] = useState('');
    const [block, setBlock] = useState('');
    const [loader, setLoading] = useState(false);
    const [chain, setChain] = useState('Ethereum');
    const [errorMessage, setErrorMessage] = useState('');

    const getBlock = async () => {
        setLoading(true); setErrorMessage(''); setBlock('');
        // Include the selected chain in the request body
        try {
            const res = await fetch('/api/block', { 
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date, chain }) 
            });
            const data = await res.json();
            if (res.status == 200) {
                setLoading(false)
                console.log("data: ", data)
                data.block != null ? setBlock(`Block: ${data.block.block}`) : setBlock("Incorrect date given")
            } else {setLoading(false); setBlock("There was an error")}
        } catch (err) {
            console.log(err); setLoading(false)
        }
        
    }

  return (
    <Container>
      <Navbar />
        <div className = {Styles.titlerow}> 
            <div className = {Styles.title}>Welcome to BlockDate</div>
        </div>
        <div className={Styles.poweredby}>Powered by <a target="_blank" href="https://www.npmjs.com/package/ethereum-block-by-date" target="_blank">ethereum-block-by-date</a></div>
      <div className={Styles.description}> Choose a date, click convert, and voila! </div>
      <div className = {Styles.row}>
      <Select onChange={(e) => setChain(e.target.value)}>
            <option value="Ethereum">Ethereum</option>
            {/* Add more options as needed */}
        </Select>
        <Input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
        </div>
      <Button onClick={getBlock}>Convert</Button>
      <p>{block != '' && !loader ? block : loader ? <Loader/> : null}</p>
    </Container>
  );
}
