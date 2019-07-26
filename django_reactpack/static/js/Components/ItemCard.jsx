import React from 'react';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react'

const CardWrapperStyled = styled.div`
    margin: 2rem 0;
    width: 40%;
    display: flex;
    justify-content: center;
`;

const CardButtonWrapper = styled.div`
    transition: all .1s;
    &:hover {
        transform: translate(2px, -2px);
        box-shadow: -2px 2px 5px 0px rgba(189,189,189,0.5);
    }

    &:active {
        transform: translate(-2px, 2px);
        box-shadow: none;
    }
`

const Item = props => {
    const { item } = props;

    const getItemUrl = () => {
        const itemType = props.type;
        const url = window.location.href.split('/')
        url[url.length - 2] = `${itemType}/${item.id}`;
        return url.join("/")
    }

    return (
        <CardWrapperStyled>
            <CardButtonWrapper>
                <Card href={getItemUrl()}>
                    <Image src={item.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{item.name}</Card.Header>
                        {item.beds_num 
                            ? <Card.Meta>
                                <span className='date'>{item.beds_num ? `${item.beds_num} Beds` : ""}</span>
                              </Card.Meta>
                            : null
                        }
                        <Card.Description>
                            {item.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                            <Icon name='tree' />
                            {item.plants} Plants
                    </Card.Content>
                </Card>
            </CardButtonWrapper>
        </CardWrapperStyled>
    )
}

export default Item;
