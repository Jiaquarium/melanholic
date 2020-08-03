import React from 'react';

export const siteTitle = "melanholic";
export const siteDescription = "melanholic the game.";

const HeadMetadata = () => (
    <>
        <meta property="og:description" content={siteDescription} />
        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:image"
          content="/images/icon-ids_600x600.png"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
    </>
);

export default HeadMetadata;