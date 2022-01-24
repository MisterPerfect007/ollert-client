import React from 'react';
import './SmallAddBtn.css';
import styled from 'styled-components';

function SmallAddBtn({size}) {
    return (
        <Wrapper size={size}>
            +
        </Wrapper>
    )
}
const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-1);
        color: var(--main-white);
        width: ${props => props.size === 'sm' ? '28' : '32'}px;
        height: ${props => props.size === 'sm' ? '28' : '32'}px;
        font-weight: 600;
        font-size: ${props => props.size === 'sm' ? '18' : '20'}px;
        background-color: var(--main-blue);
        user-select: none;
        cursor: pointer;
    `


export default SmallAddBtn;
