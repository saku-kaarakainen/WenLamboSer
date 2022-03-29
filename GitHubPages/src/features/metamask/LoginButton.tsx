import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import Button from '@mui/material/Button';
import { ReactComponent as Icon } from './Icon.svg'
import { useDispatch, useSelector } from "react-redux";
import { connectionSlice, IConnection } from "../connection/connectionSlice";
import { Dispatch } from "redux";
import { AppDispatch } from "../../app/store";
import { web3 } from "../../web3";
import { IAsset } from "../asset/IAsset";
import { assetSlice } from "../asset/assetSlice";

async function connect(metamaskConnection: IConnection, dispatch: AppDispatch) {
    try {
        if (!metamaskConnection.enabled) {
            alert("You need to install metamask exension in order to connect.");
            return;
        }

        // user is already connected, no reason to do it again
        if (metamaskConnection.connected) {
            console.log("already connected")
            return
        }
        
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        console.log("window.ethereum request({method:'eth_accounts'}) returned:")
        console.log(accounts)

        // TODO: Use all address?
        // set to connected: true
        const firstAccount = accounts[0]
        dispatch(connectionSlice.actions.metamaskConnectionConnect({
            chainId: window.ethereum.networkVersion,
            address: firstAccount
        }))

        // TODO: this should be inside of connect - store action
        // get the eth balance
        //web3.eth.getBalance(firstAccount, function (error, balance) {
        //    console.log("balance is: ")
        //    console.log(balance)

        //})

        // TODO: Remove test data
        dispatch(assetSlice.actions.addAsset({ id: 1, symbol: 'btc', name: 'Bitcoin', address: '0x123', amount: 1.25 }))
        dispatch(assetSlice.actions.addAsset({ id: 2, symbol: 'eth', name: 'Ethereum', address: '0x456', amount: 20 }))
        dispatch(assetSlice.actions.addAsset({ id: 3, symbol: 'avax', name: 'Avalanche', address: '0x789', amount: 5 }))
        dispatch(assetSlice.actions.addAsset({ id: 4, symbol: 'luna', name: 'Terra Luna', address: '0xabc', amount: 10 }))
        dispatch(assetSlice.actions.addAsset({ id: 5, symbol: 'sol', name: 'Solana', address: '0xdef', amount: 7.5 }))

    } catch (e) {
        console.log('an exception occurred on LoginButton/connect:')
        console.log(e)
    }
}


// TODO: CSS - use module
const connectButtonStyle = {
    color: 'white',
    background: 'black none repeat scroll 0% 0%',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px'
}

type Props = {
    addAsset: (asset: IAsset) => void;
};
export default function LoginButton() { 
    const metamaskConnection = useSelector((state: any) => state.connections.metamaskConnection) as IConnection
    const dispatch: AppDispatch = useDispatch()

    if (metamaskConnection.connected) {
        return (<div>
            <i style={{fontSize:'0.8em'}}>(uses test data)</i> Connected with <span>{metamaskConnection.address}</span> (chain id: {metamaskConnection.chainId ?? 'undefined'}) 
        </div>)
    }

    return (
        <Button variant="contained" onClick={() => connect(metamaskConnection, dispatch)} style={connectButtonStyle} >
            <Icon className='icon' style={{marginRight:'0.5em'}} /> Connect metamask
        </Button>
    )
}
