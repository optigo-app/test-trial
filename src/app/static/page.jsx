import React from 'react'
import StaticPage1 from '../components/Home/StaticHomePage/StaticPage1'

const page = () => {
    // Sonasons Theme == 1
    const theme = 1;
    const pageType = "static";

    return (
        <div>
            <StaticPage1 theme={theme} pageType={pageType} />
        </div>
    )
}

export default page
