import React from 'react';
import styled from 'styled-components';
// Semantic-UI
import { Item } from 'semantic-ui-react'
// Children
import PlantItem from './PlantItem';

const PlantListStyled = styled(Item.Group)`
    width: 100%;
    padding: 2rem 4rem;
`;

const PlantList = props => (
    <PlantListStyled>
        {props.plants.map(plant => <PlantItem plant={plant} />)}
    </PlantListStyled>
)

export default PlantList;
