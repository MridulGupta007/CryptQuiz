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
                console.log("before")
                const accounts = await auth.provider.request({ method: 'eth_accounts' })
                console.log({ accounts })
                console.log("after")
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
            if (await auth.isLoggedIn()) {
                setLoggedIn(true);
            }
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

    return {
        initializeAuth,
        login,
        loginWithLink,
        getAccounts,
        logout,
        loading,
        initialized,
        loggedIn,
        account
    };
}