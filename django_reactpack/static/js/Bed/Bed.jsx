import React from 'react'
import ReactDOM from 'react-dom'

import BedMain from './BedMain';

ReactDOM.render(
    <BedMain bed={window.bed} />,
    document.getElementById('bed__react')
);
