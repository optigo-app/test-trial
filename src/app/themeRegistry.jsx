"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "./createEmotionCache";
import { HydrationFix } from "./clients/HydrationClient";
import TanstackQueryclient from "./clients/TanStackQuery";

const clientSideEmotionCache = createEmotionCache();

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function ThemeRegistry({ children }) {
    return (
        <CacheProvider value={clientSideEmotionCache}>
            <TanstackQueryclient>
                <body className={`${geistSans.variable} ${geistMono.variable}`}>
                    <CssBaseline />
                    <HydrationFix />

                    {children}
                </body>
            </TanstackQueryclient>
        </CacheProvider>
    );
}
