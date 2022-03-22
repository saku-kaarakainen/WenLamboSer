// Modified from:
// https://github.com/MetaMask/React-MetaMask-Login-Button/blob/master/src/index.js
import { Button } from "@material-ui/core";
import React, { Component, useEffect, useState } from "react";
import { Fragment } from "react";
import Web3 from "web3";
import isDesiredNetwork from "./isDesiredNetwork";
import { browserName, isMobile } from 'react-device-detect';

var path = window.location.href;

function LoginButton() {
    const [show, setShow] = useState(false);
    const [install, setInstall] = useState(false);
    const [isMetaMask, setIsMetaMask] = useState(false);
    const [isLoginMetaMask, setIsLoginMetaMask] = useState(false);
    const [isDesiredNetwork, setIsDesiredNetwork] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    
    //this.handleShow = this.handleShow.bind(this);
    //this.handleClose = this.handleClose.bind(this);
    //this.network = this.network.bind(this);
    //this.mount = this.mount.bind(this);
    //this.init = this.init.bind(this);

    useEffect(() => {
        // componentwillmount 
        if (typeof Web3 !== "undefined") {
            setInstall(false);
            window.ethereum.on("networkChanged", (accounts: any) => {
                if (accounts === "3") {
                    setIsLogin(true)
                    setIsDesiredNetwork(true)
                    setIsMetaMask(true)
                    setIsLoginMetaMask(true)
                } else {
                    setIsLogin(false)
                    setIsDesiredNetwork(false)
                    setIsMetaMask(false)
                    setIsLoginMetaMask(false)
                }
            });
        } else {
            setInstall(true)
        }
    
        // mount
        if (typeof Web3 !== "undefined") {
            setIsMetaMask(false)
            init();
        } else {
            if (!isMobile) {
                window.open("http://fwd.metamask.io/" + "?" + path);

                switch (browserName.toLowerCase()) {
                    case "firefox":
                        window.open(
                            "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/",
                            "_blank"
                        );

                        break;

                    case "chrome":
                        window.open(
                            "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
                            "_blank"
                        );
                        break;

                    case "opera":
                        window.open(
                            "https://addons.opera.com/en/extensions/details/metamask/",
                            "_blank"
                        );

                        break;
                }
            }

            setIsMetaMask(true)
        }
    })

    async function init() {
        try {
            const accounts = await window.ethereum.enable();
            setIsDesiredNetwork(true)
            setIsMetaMask(false)
            network();
        } catch (error) {
            setIsMetaMask(false)
            setIsLoginMetaMask(false)
        }
        window.ethereum.on("accountsChanged", (accounts: any) => {
            if (accounts.length === 1) {
                setIsLogin(false)
                setIsDesiredNetwork(false)
                setIsMetaMask(false)
                setIsLoginMetaMask(true)
            } else {
                setIsLogin(true)
                setIsDesiredNetwork(false)
                setIsMetaMask(false)
                setIsLoginMetaMask(false)
            }
        });
    }

    function network() {
        // If a web3 instance is already provided by Meta Mask.
        if (window.ethereum.networkVersion === "3") {
            setIsLogin(true)
        } else {
            window.ethereum.on("networkChanged", (accounts: any) => {
                if (accounts === "3") {
                    setIsLogin(true)
                    setIsDesiredNetwork(false)
                    setIsMetaMask(false)
                    setIsLoginMetaMask(false)
                } else {
                    setIsLogin(false)
                    setIsDesiredNetwork(true)
                    setIsMetaMask(false)
                    setIsLoginMetaMask(false)
                }
            });
        }
    }

    function handleClose() {
        window.location.reload();
        setShow(false);
    }

    let content;
    if (isMetaMask) {
        content = (
            <div>
                <p>Install MetaMask to Sign in</p>
            </div >
        )
    } else if (isLoginMetaMask) {
        content = (
            <div>
                <p>Login into MetaMask
                    <br />
                </p>
            </div>
        )
    } else if (isDesiredNetwork) {
        content = isDesiredNetwork
    } else if (isLogin) {
        content = (
            <div>
                <p>Signed in with MetaMask
                    <br />
                </p>
            </div>)
    } else if (isMobile) {
        content = <Fragment>Mobile coming soon!</Fragment>;
    }

    return (
        <div>
            <Button onClick={() => setShow(true)}>
                {install ? "Install MetaMask" : "Connect with MetaMask"}
            </Button>
            {content}
        </div>
    ); 
}