import React from 'react';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react'

const CardWrapperStyled = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
`;

const GardenCard = props => {
    const { garden } = props;

    return (
        <CardWrapperStyled>
            <Card>
                <Image src='https://media.gettyimages.com/vectors/stylized-garden-vector-id165734990?s=2048x2048' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{garden.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{garden.plots_num}</span>
                    </Card.Meta>
                    <Card.Description>
                        {garden.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='tree' />
                        {garden.plants_num} Plants
                    </a>
                </Card.Content>
            </Card>
        </CardWrapperStyled>
    )
}

export default GardenCard;
