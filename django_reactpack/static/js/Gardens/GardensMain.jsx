import React from 'react';

// Deps
import { Card } from 'semantic-ui-react';

// Children
import GardenCard from "../Components/GardenCard";

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
    return (
        <div>
            <Card.Group>
                {DUMMY_GARDENS.map(garden => <GardenCard key={garden.id} garden={garden} />)}
            </Card.Group>
        </div>
    );
}

export default GardensMain;
