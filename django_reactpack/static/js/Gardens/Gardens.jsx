import React from 'react'
import ReactDOM from 'react-dom'

// Children
import GardensMain from './GardensMain';

ReactDOM.render(
    <GardensMain gardens={window.gardens} />,
    document.getElementById('gardens__react')
);
