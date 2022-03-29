import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { connectionSlice } from './slices/connectionSlice'
import { tokenSlice } from './slices/tokenSlice'
import { assetSlice } from './slices/assetSlice'

const rootReducer = combineReducers({
    connections: connectionSlice.reducer,
    tokens: tokenSlice.reducer,
    assets: assetSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

