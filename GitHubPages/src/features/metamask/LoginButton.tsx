import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import Button from '@mui/material/Button';
import { ReactComponent as Icon } from './Icon.svg'
import { useDispatch, useSelector } from "react-redux";
import connectionHelper from "../../app/connectionHelper";

// TODO: CSS - use module
const connectButtonStyle = {
    color: 'white',
    background: 'black none repeat scroll 0% 0%',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px'
}

type Props = {
    addAsset: (asset: IAsset) => void;
};
export default function LoginButton() { 
    const metamaskConnection = useSelector((state: any) => state.connections.metamaskConnection) as IConnection
    const dispatch: AppDispatch = useDispatch()

    if (metamaskConnection.connected) {
        return (<div>
            <i style={{fontSize:'0.8em'}}>(uses test data)</i> Connected with <span>{metamaskConnection.address}</span> (chain id: {metamaskConnection.chainId ?? 'undefined'}) 
        </div>)
    }

    return (
        <Button variant="contained" onClick={() => connectionHelper.connectToMetamask(metamaskConnection, dispatch)} style={connectButtonStyle} >
            <Icon className='icon' style={{marginRight:'0.5em'}} /> Connect metamask
        </Button>
    )
}
