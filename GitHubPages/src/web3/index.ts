import Web3 from "web3";

////const Web3 = require('web3'); // getting started recommends to use this
export const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");