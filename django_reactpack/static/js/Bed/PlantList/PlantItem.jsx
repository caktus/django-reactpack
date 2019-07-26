import React from 'react';
// import styled from 'styled-components';
// Semantic UI
import { Item } from 'semantic-ui-react'


const PlantItem = props => {
    const { plant } = props;

    return (
        <Item>
            <Item.Image size='tiny' src='https://t4.ftcdn.net/jpg/01/75/28/77/500_F_175287734_RbHW82WX36MSPH1qqsBMF2vPNeQ9Twhk.jpg' />

            <Item.Content>
                <Item.Header as='a'>{plant.name || "Plant name"}</Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>
                    a description of the plant
                </Item.Description>
                <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default PlantItem