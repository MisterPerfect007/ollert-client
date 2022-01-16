import React from 'react';
import styled from 'styled-components';

import './CardLabel.css';


function CardLabel({color, text}) {
    return (
        <Label color={color}>
            <LabelText color={color}>{text}</LabelText>
        </Label>
    )
}

const Label = styled.div`
    display: inline-block;
    padding: 2px 11px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: var(--radius-2);
    background-color: ${ props => props.color + '20'};
`
const LabelText = styled.p`
    color: ${props => props.color};
    font-family: Noto Sans;
    font-size: 10px;
`

export default CardLabel;
