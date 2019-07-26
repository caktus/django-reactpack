import React from 'react';
import styled from 'styled-components';
// import SectionHeader from '../Components/SectionHeader';
import CardGroup from '../Components/CardGroup';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

// const DUMMY_BEDS = [
//     {
//         id: 1,
//         name: "Cilantro",
//         description: "OMG I luv cilantro",
//         plants_num: 3,
//         image: 'https://cdn.pixabay.com/photo/2014/12/22/00/02/garden-576622_960_720.png'
//     },
//     {
//         id: 2,
//         name: "Squash!",
//         description: "All the squashes",
//         plants_num: 2,
//         image: 'https://cdn.pixabay.com/photo/2014/12/22/00/02/garden-576622_960_720.png'
//     },
// ]

const GardenMain = props => {
    const { pk, fields } = props.garden[0];
    const { name, description } = fields;

    const buildBeds = () => props.beds.map(bed => ({
            id: bed.pk,
            name: bed.fields.name,
            length: bed.fields.length,
            solar_requirements: bed.fields.solar_requirements,
            image: 'https://image.shutterstock.com/image-vector/set-stylized-vector-vegetables-pumpkins-600w-1155012772.jpg'
        }))

    return (
        <div>
            <HeaderWrapper>
                <h1>{name}</h1>
                <p>{description}</p>
            </HeaderWrapper>
            <CardGroup type="bed" items={buildBeds()} />
        </div>
    );
}

export default GardenMain
