import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { configurationSlice } from '../features/configuration/configurationSlice'
import { connectionSlice } from '../features/connection/connectionSlice'
import { tokenSlice } from '../features/token/tokenSlice'
import { assetSlice } from '../features/asset/assetSlice'

const rootReducer = combineReducers({
    configurations: configurationSlice.reducer,
    connections: connectionSlice.reducer,
    tokens: tokenSlice.reducer,
    assets: assetSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch