import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import Button from '@mui/material/Button';
import { ReactComponent as Icon } from './Icon.svg'
import { useDispatch, useSelector } from "react-redux";
import { connectionSlice, IConnection } from "../connection/connectionSlice";
import { Dispatch } from "redux";
import { AppDispatch } from "../../app/store";

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
        
        let accounts = await window.ethereum.enable();
        console.log("window.ehtherum.enable returned:")
        console.log(accounts)

        accounts = await window.ethereum.request({ method: "eth_accounts" });
        console.log("window.ethereum request({method:'eth_accounts'}) returned:")
        console.log(accounts)

        // TODO: Use all address?
        const firstAccount = accounts[0]
        dispatch(connectionSlice.actions.metamaskConnectionConnect({
            chainId: window.ethereum.networkVersion,
            address: firstAccount
        }))

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

export default function LoginButton() {
    const metamaskConnection = useSelector(
        (state: any) => state.connections.metamaskConnection) as IConnection
    const dispatch: AppDispatch = useDispatch()

    if (metamaskConnection.connected) {
        return (<div>
            Connected with <span>{metamaskConnection.address}</span> (chain id: {metamaskConnection.chainId ?? 'undefined'})
        </div>)
    }

    return (
        <Button variant="contained" onClick={() => connect(metamaskConnection, dispatch)} style={connectButtonStyle} >
            <Icon className='icon' style={{marginRight:'0.5em'}} /> Connect metamask
        </Button>
    )
}