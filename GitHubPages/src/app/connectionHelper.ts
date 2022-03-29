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

export default class connectionHelper {
    public static async connectToMetamask(metamaskConnection: IConnection, dispatch: AppDispatch) {
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

            this.storeEthFromMetamask(firstAccount, metamaskConnection, dispatch)
            this.storeErc20TokensFromMetamask(firstAccount, metamaskConnection, dispatch)

        } catch (e) {
            console.log('an exception occurred on LoginButton/connect:')
            console.log(e)
        }
    }

    public static async storeEthFromMetamask(userAccount: string, metamaskConnection: IConnection, dispatch: AppDispatch) {
        //// get the eth balance
        //web3.eth.getBalance(userAccount)
        //    .then(response => {
        //        console.log("web3.eth.getBalance.then:")
        //        console.log(response)
        //    })
        //    .catch(error => {
        //        console.log("web3.eth.getBalance.catch:")
        //        console.log(error)
        //    })
    }

    public static async storeErc20TokensFromMetamask(muserAccount: string, etamaskConnection: IConnection, dispatch: AppDispatch) {
        // TODO: Remove test data
        dispatch(assetSlice.actions.addAsset({ id: 1, symbol: 'btc', name: 'Bitcoin', address: '0x123', amount: 1.25 }))
        dispatch(assetSlice.actions.addAsset({ id: 2, symbol: 'eth', name: 'Ethereum', address: '0x456', amount: 20 }))
        dispatch(assetSlice.actions.addAsset({ id: 3, symbol: 'avax', name: 'Avalanche', address: '0x789', amount: 5 }))
        dispatch(assetSlice.actions.addAsset({ id: 4, symbol: 'luna', name: 'Terra Luna', address: '0xabc', amount: 10 }))
        dispatch(assetSlice.actions.addAsset({ id: 5, symbol: 'sol', name: 'Solana', address: '0xdef', amount: 7.5 }))

    }
}

