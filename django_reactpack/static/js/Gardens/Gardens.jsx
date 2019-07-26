import React from 'react'
import ReactDOM from 'react-dom'

// Children
import GardensMain from './GardensMain';

const Gardens = props => {
    return <GardensMain {...props}/>
}


const element = <Gardens name="these gardens!" />;
ReactDOM.render(
    element,
    document.getElementById('gardens__react')
);
