import React from 'react';
import styled from 'styled-components';

const SectionStyled = styled.div`
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: center;
`

const HeaderStyled = styled.h1`
    
`;

const SectionHeader = props => (
    <SectionStyled>
        <HeaderStyled>{props.children}</HeaderStyled>
    </SectionStyled>
)

export default SectionHeader;