import React from 'react';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react'

const CardWrapperStyled = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
`;

const CardButtonWrapper = styled.div`
    /* transition: all .1s;
    &:hover {
        transform: translate(2px, -2px);
        box-shadow: -2px 2px 5px 0px rgba(189,189,189,0.5);
    }

    &:active {
        transform: translate(-2px, 2px);
        box-shadow: none;
    } */
`

const Item = props => {
    const { item } = props;

    const handleCardClick = () => {
        console.log("clicked item: ", item.id)
    }

    return (
        <CardWrapperStyled>
            <CardButtonWrapper>
                <Card onClick={handleCardClick}>
                    <Image src={item.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{item.name}</Card.Header>
                    </Card.Content>
                </Card>
            </CardButtonWrapper>
        </CardWrapperStyled>
    )
}

export default Item;
