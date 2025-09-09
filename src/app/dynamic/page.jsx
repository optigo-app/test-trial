import React from 'react'
import DynamicPage1 from '../components/Home/DynamicHomePage/DynamicPage1'

const page = () => {
    // Sonasons Theme == 1
    const theme = 1;
    const pageType = "dynamic";

    return (
        <div>
            <DynamicPage1 theme={theme} pageType={pageType} />
        </div>
    )
}

export default page
