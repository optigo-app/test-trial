"use client";

import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "./createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({ children }) {
    return (
        <CacheProvider value={clientSideEmotionCache}>
            <CssBaseline />
            {children}
        </CacheProvider>
    );
}
