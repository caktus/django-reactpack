import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import PlantList from './PlantList/PlantList'


const DUMMY_PLANTS = [
    {
        id: 1,
        name: "Cilantro",
        image: 'https://media.istockphoto.com/vectors/coriander-or-cilantro-plant-sketch-of-spice-herb-vector-id922836170'
    },
    {
        id: 2,
        name: "Cilantro",
        image: 'https://media.istockphoto.com/vectors/coriander-or-cilantro-plant-sketch-of-spice-herb-vector-id922836170'
    },
    {
        id: 3,
        name: "Cilantro",
        image: 'https://media.istockphoto.com/vectors/coriander-or-cilantro-plant-sketch-of-spice-herb-vector-id922836170'
    },
    {
        id: 4,
        name: "Squash",
        image: 'https://image.shutterstock.com/image-vector/set-stylized-vector-vegetables-pumpkins-600w-1155012772.jpg'
    }, 
    {
        id: 5,
        name: "Squash",
        image: 'https://image.shutterstock.com/image-vector/set-stylized-vector-vegetables-pumpkins-600w-1155012772.jpg'
    },
]

const BedMain = props => {
    return (
        <div>
            <SectionHeader>My Bed!</SectionHeader>
            <PlantList plants={DUMMY_PLANTS} />
        </div>
    );
}

export default BedMain
