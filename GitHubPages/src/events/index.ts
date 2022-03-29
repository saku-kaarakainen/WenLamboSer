import { Store } from '@reduxjs/toolkit'
import { connectionSlice } from '../app/slices/connectionSlice'
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
        // TODO: Remove these antipatterns (using store.dispatch)
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
            // TODO: Use all address?
            store.dispatch(connectionSlice.actions.metamaskConnectionSetAddress(newAddresses[0]))
        }
    })

    window.ethereum.on('disconnect', (error: any) => {
        store.dispatch(connectionSlice.actions.metamaskConnectionDisconnect())
    })

    window.ethereum.on('message', (message: any/*ProviderMessage*/) => {
        console.log("window.eteheum on 'message' event occurred with 'message':")
        console.log(message)
    });
	
	// TODO: Should you remove these event listeners later?
}