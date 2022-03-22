import React, { Component, useState, useEffect } from 'react';
import Web3 from 'web3';
import { Button } from '@material-ui/core';

export default function isDesiredNetwork() {
    const [image, setImage] = useState<string>('')
    const [clicked, setClicked] = useState<boolean>(true)
    const [description, setDescription] = useState<string>('')

    useEffect(() => {
        if (clicked) {
            setDescription('Go to the network\'s dropdown and Select Ropsten network')
        } else {
            setImage('')
            setDescription('')
        }
    })

    return (
        <div>
            <Button onClick={(e) => setClicked(!clicked)}> Connect To Ropsten Network</Button>

            <br />
            {image}

            <br />
            {description}
        </div>)
}

