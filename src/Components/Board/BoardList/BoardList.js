import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import './BoardList.css'
import Card from '../../Card/Card';

function BoardList() {
    return (
        <div className='boardList'>
            <div className='boardList__header'>
                <h2 className='boardList--title'>Backlog 🤔</h2>
                <IconContext.Provider value={{color: "var(--gray-3)"}}>
                    <BsThreeDots /> 
                </IconContext.Provider>
            </div>
            <div className='boardList__content'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default BoardList
