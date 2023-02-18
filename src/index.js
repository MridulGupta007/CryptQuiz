import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet, walletConnectWallet } from "@rainbow-me/rainbowkit/wallets";
import { ArcanaConnector } from "@arcana/auth-wagmi";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "@wagmi/core/chains";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";



export const ArcanaRainbowConnector = ({ chains }) => {
    return {
        id: "arcana-auth",
        name: "Arcana Wallet",
        iconUrl: "",
        iconBackground: "#101010",
        createConnector: () => {
            const connector = new ArcanaConnector({
                chains,
                options: {
                    // appId parameter refers to App Address value in the Dashboard
                    appId: `${process.env.REACT_APP_APP_ADDRESS}`,
                },
            });
            return {
                connector,
            };
        },
    };
};

const connectors = (chains) =>
    connectorsForWallets([
        {
            groupName: "Recommended",
            wallets: [ArcanaRainbowConnector({ chains }), walletConnectWallet({ chains }), metaMaskWallet({ chains })],
        },
    ]);

const { chains, provider } = configureChains(
    [polygon, polygonMumbai],
    [publicProvider()]
);

const wagmiClient = createClient({
    autoConnect: true,
    connectors: connectors(chains),
    provider,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <App />
            </RainbowKitProvider>
        </WagmiConfig>
    </React.StrictMode>
);

reportWebVitals();
