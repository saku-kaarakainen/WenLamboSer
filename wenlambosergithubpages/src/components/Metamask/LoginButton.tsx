import React, { useEffect, useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Button from '@mui/material/Button';
import { ReactComponent as Icon } from './Icon.svg'

async function connect(onConnected: (address: string) => void) {
    if (!window.ethereum) {
        alert("Get MetaMask!");
        return;
    } 

    window.ethereum.enable()
        .then((accounts: any) => {
            console.log("connect accounts:")
            console.log(accounts)
        })

    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });

    console.log("connect - accounts:")
    console.log(accounts)

    // TODO: Use all address?
    const firstAccount = accounts[0]

    onConnected(firstAccount)
}

async function checkIfWalletIsConnected(onConnected: (address: string) => void) {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if (accounts.length > 0) {
            // TODO: Use all address?
            const account = accounts[0];
            onConnected(account);
            return;
        }

        if (isMobile) {
            await connect(onConnected);
        }
    }
}

function onAddressChanged(address: string) {
    if (window.ethereum) {
        window.ethereum.on("chainChanged", (accounts: any) => {
            console.log("chainChanged, accounts:")
            console.log(accounts)
        })
    }
}

// TODO: CSS - use module
const connectButtonStyle = {
    color: 'white',
    background: 'black none repeat scroll 0% 0%',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px'
}

export default function LoginButton() {
    const [userAddress, setUserAddress] = useState("");

    useEffect(() => {
        checkIfWalletIsConnected(setUserAddress);
    }, []);

    useEffect(() => {
        onAddressChanged(userAddress);
    }, [userAddress]);

    return userAddress
        ? (<div>
            Connected with <span>
                {userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}
            </span>
        </div>)
        : (<Button variant="contained" onClick={() => connect(setUserAddress)} style={connectButtonStyle} >
            <Icon className='icon' style={{marginRight:'0.5em'}} /> Connect metamask
        </Button>)
}