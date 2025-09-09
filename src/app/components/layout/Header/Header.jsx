"use client";
import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Box, Typography, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./Header.scss";
import Image from "next/image";

const Header = () => {

    if (typeof window !== 'undefined') {
        return ""
    }
    
    return (
        <AppBar position="static" className="header">
            <Toolbar className="header__toolbar">
                {/* Left Links */}
                <Box className="header__left">
                    <Button className="nav-link">LOOK BOOK</Button>
                </Box>

                {/* Center Logo */}
                <Box className="header__center">
                    <Typography variant="div" className="logo">
                        <Image width={200} height={80} alt="web logo" src="/webLogo.png" />
                    </Typography>
                    <Box className="categories">
                        <Button className="nav-link">AISTRAL</Button>
                        <Button className="nav-link">KIAN</Button>
                        <Button className="nav-link">LOVENT</Button>
                    </Box>
                </Box>

                {/* Right Links */}
                <Box className="header__right">
                    <Button className="nav-link">ABOUT US</Button>
                    <Button className="nav-link">ACCOUNT</Button>
                    <Button className="nav-link">LOG OUT</Button>
                    <IconButton>
                        <Badge badgeContent={6} color="error">
                            <FavoriteBorderIcon className="icon" />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <SearchIcon className="icon" />
                    </IconButton>
                    <IconButton>
                        <ShoppingCartOutlinedIcon className="icon" />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
