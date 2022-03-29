// using connectionHelper is not 'by the book'.
// Redux documentation recommends to save logic into the store as much as possible.
// However My redux skills are not good enough to do that with the asynchronous programming
// Nor I want to spend time learning the right now (i'd love to learn the them, but not now).
//
// So this is just a helper class to do some store logic

import { CombinedState, Reducer } from "@reduxjs/toolkit"
import { connectionSlice } from './slices/connectionSlice'
import { assetSlice } from './slices/assetSlice'
import { web3 } from "../web3";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


export const connectToMetamask = async (metamaskConnection: IConnection, dispatch: AppDispatch) => {
    try {
        const metamaskConnection = useSelector((state: any) => state.connections.metamaskConnection) as IConnection
        const dispatch: AppDispatch = useDispatch()
        const [account, setAccount] = useState('');

        if (!metamaskConnection.enabled) {
            alert("You need to install metamask exension in order to connect.");
            return [false]
        }

        // user is already connected, no reason to do it again
        if (metamaskConnection.connected) {
            console.log("already connected")
            return [false]
        }

        useEffect(() => {
            window.ethereum.request({ method: "eth_accounts" })
                .then((accounts: string[]) => {
                    console.log("window.ethereum request({method:'eth_accounts'}) returned:")
                    console.log(accounts)

                    // TODO: Use all address?
                    setAccount(accounts[0])
                })

        }, [account])

        dispatch(connectionSlice.actions.metamaskConnectionConnect({
            chainId: window.ethereum.networkVersion,
            address: account
        }))

        return [true]
    } catch (e) {
        console.log('an exception occurred on LoginButton/connect:')
        console.log(e)
    }
}
