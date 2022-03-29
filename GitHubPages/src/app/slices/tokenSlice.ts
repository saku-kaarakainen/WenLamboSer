import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'

const initialState: TokenState = {
    tokens: []
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState, // `createSlice` will infer the state type from the `initialState` argument
    reducers: {
        addToken: (state, action: PayloadAction<IToken>) => {
            state.tokens.push(action.payload)
        },
        removeToken: (state, action: PayloadAction<IToken>) => {
            state.tokens = state.tokens.filter(x => x !== action.payload);
        },
    }
})

export const { addToken, removeToken } = tokenSlice.actions
export default tokenSlice.reducer