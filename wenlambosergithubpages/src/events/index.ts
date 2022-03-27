import { Store } from '@reduxjs/toolkit'
import { connectionSlice } from './../features/connection/connectionSlice'
import { store } from './../app/store'


//
// Global event handlers
// 

export const registerEvents = () => {
    //const initialState = store.getState()

    // metamask related events
    // !window.ethereum
    var length = Object.keys(window).find(x => x === 'ethereum')?.length

    if (length && length > 0) {
        // metamask exists
        store.dispatch(connectionSlice.actions.metamaskConnectionSetEnabled(true))
    } else {
        // no metamask
        store.dispatch(connectionSlice.actions.metamaskConnectionSetEnabled(false))
        return
    }

    // save current chain into the store if the chain changes
    window.ethereum.on('chainChanged', (newChainId: number) => {
        store.dispatch(connectionSlice.actions.metamaskConnectionSetChainId(newChainId))
    })    

    window.ethereum.on('accountsChanged', (newAddresses: string[]) => {
        const isDisconnect = !newAddresses

        if (isDisconnect) {
            // disconnect
            store.dispatch(connectionSlice.actions.metamaskConnectionDisconnect())
        } else {
            // account switch
            store.dispatch(connectionSlice.actions.metamaskConnectionSetAddress(newAddresses[0]))
        }
    })
}