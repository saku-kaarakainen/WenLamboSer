import * as React from 'react'
import { Dispatch } from 'redux';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField' // TODO: Use TextField, or not

import { Asset } from './Asset';
import { AddAsset } from './AddAsset';
import { addAsset, removeAsset } from './../store/actionCreators';

const AssetList: React.FC = () => {
    const assets: readonly IAsset[] = useSelector(
        (state: AssetState) => state.assets,
        shallowEqual
    );

    const dispatch: Dispatch<any> = useDispatch();
    const saveAsset = React.useCallback(
        (asset: IAsset) => dispatch(addAsset(asset)),
        [dispatch]
    );

    return (
        <main>
            <h1>My Asset</h1>
            <AddAsset saveAsset={saveAsset} />
            {assets.map((asset: IAsset) => (
                <Asset
                    key={asset.id}
                    asset={asset}
                    removeAsset={removeAsset}
                />
            ))}
        </main>
    );
};

export default AssetList;
