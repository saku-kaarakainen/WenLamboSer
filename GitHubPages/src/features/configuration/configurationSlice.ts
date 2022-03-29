import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'

// TODO: Do we need this class?
interface IConfiguration {

}

// https://redux-toolkit.js.org/api/createslice
// You can replace this in intialState:
// initialState: [] as IConfiguration[]
interface ConfigurationState {
    configurations: IConfiguration
}

const initialState: ConfigurationState = {
    configurations: {
    }
}

export const configurationSlice = createSlice({
    name: 'configuration',
    initialState, // `createSlice` will infer the state type from the `initialState` argument
    reducers: {
        updateConfiguration: (state, action: PayloadAction<IConfiguration>) => {
            //state.
            throw 'Not Implemented'
        },
    }
})

export const { updateConfiguration } = configurationSlice.actions
export default configurationSlice.reducer