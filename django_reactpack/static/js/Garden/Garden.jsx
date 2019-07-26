import React from 'react'
import ReactDOM from 'react-dom'

import GardenMain from "./GardenMain";

let pretendLoadTimeout = setTimeout(() => {
    ReactDOM.render(
        <GardenMain garden={JSON.parse(window.garden)} />,
        document.getElementById('garden__react')
    );
}, 800);
