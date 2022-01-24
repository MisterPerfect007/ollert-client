import React from 'react'
import styled from 'styled-components'

import SmallAddBtn from '../../SmallAddBtn/SmallAddBtn'
import SmallAvatar from '../../SmallAvatar/SmallAvatar'

function CardMembers() {
    return (
        <Wrapper>
            <SmallAvatar small={true} />
            <SmallAddBtn size='sm'/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export default CardMembers
