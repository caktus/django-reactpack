import React from 'react';

// Children
import CardGroup from "../Components/CardGroup";
import SectionHeader from '../Components/SectionHeader';

const DUMMY_GARDENS = [
    {
        id: 1,
        name: "My Vegetable Garden",
        description: "It's full of all my veg",
        plots_num: 12,
        plants_num: 74,
    },
    {
        id: 2,
        name: "Flowers!",
        description: "Such pretty flowers, you'll luv it",
        plots_num: 3,
        plants_num: 12,
    },
]

const GardensMain = props => {
    console.log("props.gardens: ", props.gardrens);
    return (
        <div>
            <SectionHeader>My Gardens!</SectionHeader>
            <CardGroup items={DUMMY_GARDENS} />
        </div>
    );
}

export default GardensMain;
