import React from 'react';
import ContentLoader from "react-content-loader"


function BookLoadingBlock() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="137" cy="128" r="128" />
            <rect x="2" y="269" rx="0" ry="0" width="280" height="24" />
            <rect x="3" y="303" rx="6" ry="6" width="280" height="84" />
            <rect x="3" y="408" rx="7" ry="7" width="113" height="32" />
            <rect x="154" y="401" rx="20" ry="20" width="126" height="50" />
        </ContentLoader>
    )
}

export default BookLoadingBlock;