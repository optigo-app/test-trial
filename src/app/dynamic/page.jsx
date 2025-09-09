import React from 'react'
import DynamicPage1 from '../components/Home/DynamicHomePage/DynamicPage1'

const page = () => {
    const theme = 1;
    const pageType = "dynamic";

    return (
        <>
            <DynamicPage1 theme={theme} pageType={pageType} />
        </>
    )
}

export default page
