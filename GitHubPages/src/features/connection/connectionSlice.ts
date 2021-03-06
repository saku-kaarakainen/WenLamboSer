import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const CONNECTION_METAMASK = 'CONNECTION_METAMASK'

export interface IConnection {
    enabled: boolean
    connected: boolean
    chainId: number | null
    networkName: string
    address: string
}

// initialState: [] as IConnection[]
export interface ConnectionState {
    metamaskConnection: IConnection
    // anchorConnection etc
    // array might look prettier, but i think this is easier to develop
    // TODO: could we use array instead of named fields?
}

export const initialState: ConnectionState = {
    metamaskConnection: {
        enabled: false,
        connected: false,
        chainId: null, // https://chainlist.org/
        networkName: '',
        address: ''
    }
}

export const connectionSlice = createSlice({
    name: 'connection',
    initialState, // `createSlice` will infer the state type from the `initialState` argument
    reducers: {
        metamaskConnectionSetEnabled: (state, action: PayloadAction<boolean>) => {
            state.metamaskConnection.enabled = action.payload
        },

        metamaskConnectionSetChainId: (state, action: PayloadAction<number | null>) => {
            state.metamaskConnection.chainId = action.payload
        },

        metamaskConnectionSetAddress: (state, action: PayloadAction<string>) => {
            state.metamaskConnection.address = action.payload
        },

        metamaskConnectionConnect: (state, action: PayloadAction<{ chainId:number|null, address:string }>) => {
            state.metamaskConnection.connected = true
            state.metamaskConnection.chainId = action.payload.chainId
            state.metamaskConnection.address = action.payload.address
        },

        metamaskConnectionDisconnect: (state) => {
            state.metamaskConnection.connected = false
            state.metamaskConnection.chainId = null
            state.metamaskConnection.address = ''
        }
    }
})

export const {
    metamaskConnectionSetEnabled,
    metamaskConnectionSetChainId,
    metamaskConnectionConnect
} = connectionSlice.actions

export default connectionSlice.reducer