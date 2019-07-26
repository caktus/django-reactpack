import React from 'react';
import styled from "styled-components";
import GardenCard from './GardenCard';


const GroupStyled = styled.div`
    display: flex;
    padding: 2rem 4rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;


const CardGroup = props => (
    <GroupStyled>
        {props.items.map(item => <GardenCard key={item.id} garden={item} />)}
    </GroupStyled>
)

export default CardGroup;
