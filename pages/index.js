// pages/index.js

import { useEffect, useState } from 'react';
import Styles from '../styles/Home.module.css';
// import fetch from 'node-fetch';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Loader from '../components/Loaders/SmallLoader.js';
import Image from "next/image"
import Head from "next/head"
import Github from "../public/images/github.svg"

// pages/index.js and pages/contact.js


import EthDater from 'ethereum-block-by-date';
import Web3 from 'web3';
import { ethers } from 'ethers';
const provider = new ethers.CloudflareProvider();
const dater = new EthDater(provider)


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

    // const getBlock = async () => {
    //     setLoading(true); setErrorMessage(''); setBlock('');
    //     // Include the selected chain in the request body
    //     try {
    //         const res = await fetch('/api/block', { 
    //             method: 'POST', 
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ date, chain }) 
    //         });
    //         const data = await res.json();
    //         if (res.status == 200) {
    //             setLoading(false)
    //             console.log("data: ", data)
    //             data.block != null ? setBlock(`Block: ${data.block.block}`) : setBlock("Incorrect date given")
    //         } else {setLoading(false); setBlock("There was an error")}
    //     } catch (err) {
    //         console.log(err); setLoading(false); setErrorMessage("There was an error")
    //     }
        
    // }

    async function getBlockData(date) {
      try {
        const block = await dater.getDate(new Date(date), true, false);
        return {block}
      } catch (err) {
        console.log(err);
        return { block: null }
      }
    }

    const getBlock = async () => {
      setLoading(true); setErrorMessage(''); setBlock('');
      // Include the selected chain in the request body
      try {
          let data = await getBlockData(date)
          if (data.block != null) {
              setLoading(false)
              console.log("data: ", data)
              data.block != null ? setBlock(`Block: ${data.block.block}`) : setBlock("Incorrect date given")
          } else {setLoading(false); setBlock("There was an error")}
      } catch (err) {
          console.log(err); setLoading(false); setErrorMessage("There was an error")
      }
      
  }

  const seoTitle = "Date to Ethereum Block Converter";
  const seoDescription = "Convert a date/time to the closest ethereum block";

  return (
    <Container>
      <Head>
            <title>{seoTitle}</title>
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta name="description" content={seoDescription} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:url" content={"https://www.blockanddate.com/"} />
            <meta property="og:description" content={seoDescription} />
            <link rel="canonical" href={"https://www.blockanddate.com/"} />
            <meta name="twitter:title" content={seoTitle}/>
            <meta name="twitter:description" content={seoDescription}/>
            <meta name="twitter:url" content={"https://www.blockanddate.com/"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <meta name="keywords" content={"ethereum, block, date, converter"} />
        </Head>
      <Navbar />
        <div className = {Styles.titlerow}> 
            <div className = {Styles.title}>Welcome to BlockDate</div>
        </div>
        <div className={Styles.poweredby}>Powered by <a target="_blank" href="https://www.npmjs.com/package/ethereum-block-by-date">ethereum-block-by-date</a></div>
      <div className={Styles.description}> Choose a date, click convert, and voila! (it takes a little while) </div>
      <div className = {Styles.row}>
      <Select onChange={(e) => setChain(e.target.value)}>
            <option value="Ethereum">Ethereum</option>
            {/* Add more options as needed */}
        </Select>
        <Input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
        </div>
      <Button onClick={getBlock}>Convert</Button>
      <div className={Styles.block}>{loader ? <Loader/> : null}</div >
      {block != "" && <div style={{color: "black"}}> {block} </div>}
      {errorMessage != "" && <div style={{color: "red"}}> {"It may take a few tries"} </div>}
    </Container>
  );
}
