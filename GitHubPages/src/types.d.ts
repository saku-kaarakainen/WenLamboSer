// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch

interface IConnection {
    enabled: boolean
    connected: boolean
    chainId: number | null
    networkName: string
    address: string
}

// initialState: [] as IConnection[]
interface ConnectionState {
    metamaskConnection: IConnection
    // anchorConnection etc
    // array might look prettier, but i think this is easier to develop
    // TODO: could we use array instead of named fields?
}

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

interface IAsset {
    id: number
    symbol: string
    name: string
    address: string
    amount: number
}

interface AssetState {
    assets: IAsset[]
}
