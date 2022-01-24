import React from 'react';
import styled from 'styled-components';
import './SmallAvatar.css';

function SmallAvatar({small, imgSrc}) {
    return (
        <Container small={small}>
            {/* <img 
                className="smallAvatar__image" 
                src="https://images.unsplash.com/photo-1612601006505-1254db3e290d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80" alt="" /> */}
                <Img 
                    src='https://images.unsplash.com/photo-1612601006505-1254db3e290d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80'
                    alt=''
                    small={small}
                />
        </Container>
    )
}
const Container = styled.div`
    width: ${props => props.small ? '28' : '32'}px;
    height: ${props => props.small ? '28' : '32'}px;
    margin-right: 10px;
    background-color: var(--gray-bg-1);
    border-radius: var(--radius-1); 
`
const Img = styled.img`
    width: ${props => props.small ? '28' : '32'}px;
    height: ${props => props.small ? '28' : '32'}px;
    object-fit: cover;
    border-radius: var(--radius-1);

`

export default SmallAvatar;
