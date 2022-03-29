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
    assets: []
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