import * as actionTypes from "./actionTypes";

const initialState: AssetState = {
    assets: [
        // TODO: Remove this test data
        {id: 1, symbol: 'btc', name: 'Bitcoin', address: '0x123',  amount: 1.25},
        {id: 2, symbol: 'eth', name: 'Ethereum', address: '0x456',  amount: 20 },
        {id: 3, symbol: 'avax', name: 'Avalanche', address: '0x789',  amount: 5},
        {id: 4, symbol: 'luna', name: 'Terra Luna', address: '0xabc',  amount: 10},
        {id: 5, symbol: 'sol', name: 'Solana', address: '0xdef',  amount: 7.5},
    ]
};

const reducer = (
    state: AssetState = initialState,
    action: AssetAction
): AssetState => {
    switch (action.type) {
        case actionTypes.ADD_ASSET:
            const newAsset: IAsset = {
                id: Math.random(), // not really unique but it's just an example
                symbol: action.asset.symbol,
                name: action.asset.name,
                address: action.asset.address,
                amount: action.asset.amount
            };
            return {
                ...state,
                assets: state.assets.concat(newAsset)
            };
        case actionTypes.REMOVE_ASSET:
            const updatedAssets: IAsset[] = state.assets.filter(
                (asset) => asset.id !== action.asset.id
            );
            return {
                ...state,
                assets: updatedAssets
            };
    }
    return state;
};

export default reducer;
