/*
    Global CSS must be importanted into this and ONLY this file to work
*/
import React from 'react';
import '../styles/global.scss';


const App = ({ Component, pageProps }) => {
    return (
        <Component
            {...pageProps}
        />
    )
};

export default App;