import React from 'react';
import './SmallAddBtn.css';
import styled from 'styled-components';

function SmallAddBtn({size}) {
    function giveBtnSize  () {
        if(size === "md") return "32"
        else if(size === "sm") return "28"
    }
    // styled components
    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-1);
        color: var(--main-white);
        width: ${giveBtnSize}px;
        height: ${giveBtnSize}px;
        background-color: var(--main-blue);
    `
    return (
        <Wrapper>
            +
        </Wrapper>
    )
}



export default SmallAddBtn;
