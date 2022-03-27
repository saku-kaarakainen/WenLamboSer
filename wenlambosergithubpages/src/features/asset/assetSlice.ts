import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { IAsset } from './IAsset'

// IAsset located at index.ts

// https://redux-toolkit.js.org/api/createslice
// You can replace this in intialState:
// initialState: [] as IAsset[]
interface AssetState {
    assets: IAsset[]
}

const initialState: AssetState = {
    assets: [
        // TODO: Remove this test data
        { id: 1, symbol: 'btc', name: 'Bitcoin', address: '0x123', amount: 1.25 },
        { id: 2, symbol: 'eth', name: 'Ethereum', address: '0x456', amount: 20 },
        { id: 3, symbol: 'avax', name: 'Avalanche', address: '0x789', amount: 5 },
        { id: 4, symbol: 'luna', name: 'Terra Luna', address: '0xabc', amount: 10 },
        { id: 5, symbol: 'sol', name: 'Solana', address: '0xdef', amount: 7.5 },
    ]
}

export const assetSlice = createSlice({
    name: 'asset',
    initialState, // `createSlice` will infer the state type from the `initialState` argument
    reducers: {
        addAsset: (state, action: PayloadAction<IAsset>) => {
            state.assets.push(action.payload)
        },
        removeAsset: (state, action: PayloadAction<IAsset>) => {
            state.assets = state.assets.filter(x => x !== action.payload);
        },
    }
})

export const { addAsset, removeAsset } = assetSlice.actions
export default assetSlice.reducer