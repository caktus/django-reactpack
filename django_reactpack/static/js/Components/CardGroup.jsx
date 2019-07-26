import React from 'react';
import styled from "styled-components";
import ItemCard from './ItemCard';
import PlantCard from './PlantCard';


const GroupStyled = styled.div`
    display: flex;
    padding: 2rem 4rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
`;


const CardGroup = props => (
    <GroupStyled>
            {props.items.map(item => {
                if (props.type == 'plant') return <PlantCard key={item.id} type={props.type} item={item} />
                return <ItemCard key={item.id} type={props.type} item={item} />
            })}
    </GroupStyled>
)

export default CardGroup;
