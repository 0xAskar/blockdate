// pages/api/block.js

import EthDater from 'ethereum-block-by-date';
import Web3 from 'web3';
import { ethers } from 'ethers';
const provider = new ethers.CloudflareProvider();
const dater = new EthDater(provider)

export default async function handler(req, res) {
  try {
    const block = await dater.getDate(new Date(req.body.date), true, false);
    res.status(200).json({ block });
  } catch (err) {
    console.log(err);
    res.status(400).json({ block: null });
  }
}
