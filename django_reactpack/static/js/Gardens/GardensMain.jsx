import React from 'react';

// Children
import CardGroup from "../Components/CardGroup";
import SectionHeader from '../Components/SectionHeader';

const DUMMY_GARDENS = [
    {
        id: 1,
        name: "My Vegetable Garden",
        description: "It's full of all my veg",
        beds_num: 12,
        plants_num: 74,
        image: 'https://media.gettyimages.com/vectors/stylized-garden-vector-id165734990?s=2048x2048'
    },
    {
        id: 2,
        name: "Flowers!",
        description: "Such pretty flowers, you'll luv it",
        beds_num: 3,
        plants_num: 12,
        image: 'https://media.gettyimages.com/vectors/stylized-garden-vector-id165734990?s=2048x2048'
    },
]

const GardensMain = props => {
    console.log("props.gardens: ", props.gardens);
    return (
        <div>
            <SectionHeader>My Gardens!</SectionHeader>
            <CardGroup type="garden" items={DUMMY_GARDENS} />
        </div>
    );
}

export default GardensMain;
