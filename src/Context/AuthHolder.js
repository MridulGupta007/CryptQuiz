import React, { useState, useEffect } from 'react';
import { AuthProvider, CHAIN } from "@arcana/auth";


const auth = new AuthProvider(`${process.env.REACT_APP_APP_ADDRESS}`, {
    network: 'testnet',
    position: 'right',
    theme: 'light',
    alwaysVisible: true,
    chainConfig: {
        chainId: CHAIN.POLYGON_MUMBAI_TESTNET,
        rpcUrl: 'https://polygon-rpc.com',
    },
})


export default function AuthHolder() {

    const [initialized, setInitialized] = useState(false)
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [account, setAccount] = useState(null);

    const initializeAuth = async () => {
        await auth.init();
        setInitialized(true);
    };

    //Social Login

    const login = async (socialType) => {
        if (initialized) {
            await auth.loginWithSocial(socialType);
            setLoggedIn(true);
        }
    };

    //Email Link/ Passwordless login
    const loginWithLink = async (email) => {
        if (initialized) {
            await auth.loginWithLink(email);
            setLoggedIn(true);
        }
    };

    //Getting user Accounts
    const getAccounts = async () => {
        if (initialized) {
            try {
                const accounts = await auth.provider.request({ method: 'eth_accounts' })
                console.log({ accounts })
                return (accounts)
            }
            catch (e) {
                console.log(`error ${e}`)
            }
        }
    };

    //Logout
    const logout = async () => {
        if (initialized && loggedIn) {
            await auth.logout();
            setLoggedIn(false);
        }
    };

    function setHooks() {
        auth.provider.on('connect', async (params) => {
            console.log({ type: 'connect', params: params })

            const isLoggedIn = await auth.isLoggedIn()
            setLoggedIn(isLoggedIn)

            const acc = await getAccounts();
            setAccount(acc[0])
        })
        auth.provider.on('accountsChanged', (params) => {
            //Handle
            console.log({ type: 'accountsChanged', params: params })
        })
        auth.provider.on('chainChanged', async (params) => {
            console.log({ type: 'chainChanged', params: params })
        })
    }

    // Initializing Auth
    const initialize = async () => {
        setLoading(true)
        await initializeAuth();
        setLoading(false)
    };
    useEffect(() => {
        initialize();
    }, []);

    // Setting LoggedIn status
    useEffect(() => {
        const checkLogin = async () => {
            await auth.init();
            setHooks()
        };
        checkLogin();
    }, [initialized, loggedIn, loading]);

    useEffect(() => {
        if (initialized && loggedIn) {
            const TempGetAccounts = async () => {
                const acc = await getAccounts();
                setAccount(acc[0])
            }
            TempGetAccounts()
        }

    }, [initialized, loggedIn, loading]);

    useEffect(()=>{
        const addHyperSpace = async () => {
            try{
              await auth.provider.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xC45',
                  chainName: 'Filecoin - Hyperspace testnet',
                  rpcUrls: ['https://filecoin-hyperspace.chainstacklabs.com/rpc/v1', 'https://api.hyperspace.node.glif.io/rpc/v1'],
                  blockExplorerUrls: ['https://hyperspace.filfox.info/en', ],
                  nativeCurrency: {
                    name: 'USD',
                    symbol: '$', // 2-6 characters long
                    decimals: 18
                  }
                }]
              })
            } catch(e){
              console.log(e)
            }
          }
          
          if (loggedIn)
            addHyperSpace()
    },[loggedIn])

    return {
        initializeAuth,
        login,
        loginWithLink,
        getAccounts,
        logout,
        loading,
        initialized,
        loggedIn,
        account,
        auth
    };
}