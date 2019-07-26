import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const GardenCard = props => {
    const { garden } = props;

    return (
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
    )
}

export default GardenCard;
