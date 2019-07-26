import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import CardGroup from '../Components/CardGroup';


const DUMMY_BEDS = [
    {
        id: 1,
        name: "Cilantro",
        description: "OMG I luv cilantro",
        plants_num: 3,
        image: 'https://cdn.pixabay.com/photo/2014/12/22/00/02/garden-576622_960_720.png'
    },
    {
        id: 2,
        name: "Squash!",
        description: "All the squashes",
        plants_num: 2,
        image: 'https://cdn.pixabay.com/photo/2014/12/22/00/02/garden-576622_960_720.png'
    },
]

const GardenMain = props => {
    console.log("props.garden: ", props.garden);
    return (
        <div>
            <SectionHeader>My Garden!</SectionHeader>
            <CardGroup type="bed" items={DUMMY_BEDS} />
        </div>
    );
}

export default GardenMain
