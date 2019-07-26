import React from 'react'
import ReactDOM from 'react-dom'

// Children
import GardensMain from './GardensMain';

let pretendLoadTimeout = setTimeout(() => {
    ReactDOM.render(
        <GardensMain gardens={JSON.parse(window.gardens)} />,
        document.getElementById('gardens__react')
    );
}, 800);

