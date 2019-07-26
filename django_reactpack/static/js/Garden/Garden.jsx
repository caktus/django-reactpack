import React from 'react'
import ReactDOM from 'react-dom'

import GardenMain from "./GardenMain";

ReactDOM.render(
    <GardenMain garden={window.garden} />,
    document.getElementById('garden__react')
);

