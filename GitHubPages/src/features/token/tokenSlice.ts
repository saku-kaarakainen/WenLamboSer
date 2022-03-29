import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'

const addBy = createAction<number>('addBy')
const removeBy = createAction<number>('removeBy')

interface IToken {
    symbol: string
    name: string
    address: string[]
}

// https://redux-toolkit.js.org/api/createslice
// You can replace this in intialState:
// initialState: [] as IToken[]
interface TokenState {
    tokens: IToken[]
}

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