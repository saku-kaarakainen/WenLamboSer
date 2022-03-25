import * as actionTypes from "./actionTypes";

export function addAsset(asset: IAsset) {
    const action: AssetAction = {
        type: actionTypes.ADD_ASSET,
        asset
    };

    return simulateHttpRequest(action);
}

export function removeArticle(asset: IAsset) {
    const action: AssetAction = {
        type: actionTypes.REMOVE_ASSET,
        asset
    };
    return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: AssetAction) {
    return (dispatch: DispatchType) => { setTimeout(() => { dispatch(action); }, 500); };
}
