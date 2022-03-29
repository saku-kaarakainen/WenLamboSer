// using assetHelper is not 'by the book'.
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
import { useEffect } from "react";

export const canBuildFromMetamask = (metamaskConnection: IConnection): boolean => {
    if (!metamaskConnection)
        return false

    if (!metamaskConnection.enabled)
        return false

    if (!metamaskConnection.connected)
        return false

    if (!metamaskConnection.address)
        return false

    return true
}

export const buildPortfolio = (metamaskConnection: IConnection, dispatch: AppDispatch) => {
    console.log("starting to build portfolio")

    if (canBuildFromMetamask(metamaskConnection)) {
        console.log("setting ETH data with hooks")
        useEffect(() => storeEthFromMetamask(metamaskConnection, dispatch))
        useEffect(() => storeErc20TokensFromMetamask(metamaskConnection, dispatch))
    } else {
        console.log("cannot add metamask ETH data to portfolio")
    }
    return []
}

export const storeEthFromMetamask = (metamaskConnection: IConnection, dispatch: AppDispatch) => {
    // get the eth balance
    web3.eth.getBalance(metamaskConnection.address)
        .then(response => {
            console.log("web3.eth.getBalance.then:")
            console.log(response)
            dispatch(assetSlice.actions.addAsset({ id: 1, symbol: 'eth', name: 'Ether', address: '', amount: +response }))
        })
        .catch(error => {
            console.log("web3.eth.getBalance.catch:")
            console.log(error)
        })
}

export const storeErc20TokensFromMetamask = (metamaskConnection: IConnection, dispatch: AppDispatch) => {
    // TODO: Remove test data
    dispatch(assetSlice.actions.addAsset({ id: 1, symbol: 'btc', name: 'Bitcoin', address: '0x123', amount: 1.25 }))
    dispatch(assetSlice.actions.addAsset({ id: 2, symbol: 'eth', name: 'Ethereum', address: '0x456', amount: 20 }))
    dispatch(assetSlice.actions.addAsset({ id: 3, symbol: 'avax', name: 'Avalanche', address: '0x789', amount: 5 }))
    dispatch(assetSlice.actions.addAsset({ id: 4, symbol: 'luna', name: 'Terra Luna', address: '0xabc', amount: 10 }))
    dispatch(assetSlice.actions.addAsset({ id: 5, symbol: 'sol', name: 'Solana', address: '0xdef', amount: 7.5 }))

}
