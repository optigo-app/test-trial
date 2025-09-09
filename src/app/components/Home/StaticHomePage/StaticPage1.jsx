import React from "react";

import Header from "../../layout/Header/Header";
import Difference from "../../sections/Difference/Difference";
import Hero from "../../sections/Hero/Hero";
import Album from "../../sections/Album/Album";
import BestSeller from "../../sections/Bestseller/BestSeller";
import Trending from "../../sections/Trending/Trending";
import Footer from "../../layout/Footer/Footer";

const StaticPage1 = ({ theme, pageType }) => {

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

export default StaticPage1;
