import React from 'react'
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

type Props = {
    asset: IAsset;
    removeAsset: (asset: IAsset) => void;
};

export const Asset: React.FC<Props>  = ({ asset, removeAsset }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const deleteAsset = React.useCallback(
        (asset: IAsset) => dispatch(removeAsset(asset)),
        [dispatch, removeAsset]
    );

    return (
        <div className="Asset">
            <div>
                <h1>{asset.name}</h1>
                <p>{asset.symbol}</p>
                <p>{asset.address}</p>
                <p>{asset.amount}</p>
            </div>
            <button onClick={() => deleteAsset(asset)}>Delete</button>
        </div>
    );
}