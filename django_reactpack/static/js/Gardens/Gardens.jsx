import React from 'react'
import ReactDOM from 'react-dom'

// Children
import GardensMain from './GardensMain';

const Gardens = () => {
    return <GardensMain gardens={window.gardens}/>
}


const element = <Gardens name="these gardens!" />;
ReactDOM.render(
    element,
    document.getElementById('gardens__react')
);
