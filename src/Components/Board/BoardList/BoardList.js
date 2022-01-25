import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import './BoardList.css'
import Card from '../Card/Card';
import AddAnother from '../AddAnother/AddAnother';

function BoardList({title, cards, dragNDropFunctions}) {
    return (
        <div className='boardList'>
            <div className='boardList__header'>
                <h2 className='boardList--title'>{title}</h2>
                <IconContext.Provider value={{color: "var(--gray-3)"}}>
                    <BsThreeDots /> 
                </IconContext.Provider>
            </div>
            <div className='boardList__content'>
                {
                    cards.map((card, _) =>{
                        return <Card 
                                    key={card.id}
                                    id={card.id}
                                    title={card.title} 
                                    cover={card.cover} 
                                    labels={card.labels} 
                                    dragNDropFunctions={dragNDropFunctions}
                                />
                    })
                }
                <AddAnother elementName={'card'}/>
            </div>
        </div>
    )
}

export default BoardList
