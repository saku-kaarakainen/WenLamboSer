import * as React from 'react'
import { Dispatch } from 'redux';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField' // TODO: Use TextField, or not

import { Asset } from './Asset';
import { AddAsset } from './AddAsset';
import { addAsset, removeAsset } from './../store/actionCreators';

const AssetsTitle = ({ assetsLength }: { assetsLength: number }) => {
    if (assetsLength <= 0) {
        return (<></>);
    }

    return (<h2>My Assets</h2>)   
}

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
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <AssetsTitle assetsLength={assets.length} />
            {/*<AddAsset saveAsset={saveAsset} />*/}
            <List dense={false}>              
                {/*<Asset key={asset.id} asset={asset} removeAsset={removeAsset} />*/}
                {/*<ListItemIcon><FolderIcon /> </ListItemIcon>*/}
                {assets.map((asset: IAsset) => (
                <ListItem>
                    <ListItemText
                            primary = {`${asset.name} (${asset.symbol}): ${asset.amount}`}
                            secondary={asset.address} />
                </ListItem>
                ))}                
            </List>
        </Box>
    );
};

export default AssetList;
