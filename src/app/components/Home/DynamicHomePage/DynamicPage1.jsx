import React from "react";

import Header from "../../layout/Header/Header";
import Difference from "../../sections/Difference/Difference";
import Hero from "../../sections/Hero/Hero";
import Album from "../../sections/Album/Album";
import BestSeller from "../../sections/Bestseller/BestSeller";
import Trending from "../../sections/Trending/Trending";
import Footer from "../../layout/Footer/Footer";

// Sonasons Theme == 1
const theme = 1;
const pageType = "dynamic";

const DynamicPage1 = () => {
    return (
        <>
            {/* <Header theme={theme} /> */}
            <Hero theme={theme} pageType={pageType} />
            <Difference theme={theme} pageType={pageType} />
            <Album theme={theme} pageType={pageType} />
            <BestSeller theme={theme} pageType={pageType} />
            <Trending theme={theme} pageType={pageType} />
            <Footer theme={theme} pageType={pageType} />
        </>
    );
};

export default DynamicPage1;
