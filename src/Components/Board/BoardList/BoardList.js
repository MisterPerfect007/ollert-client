import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import './BoardList.css'
import Card from '../Card/Card';
import AddAnother from '../AddAnother/AddAnother';

function BoardList({list_index, id, title, cards, dragNDropFunctions}) {

    const  {  handleDragEnter } = dragNDropFunctions

    return (
        <div 
            // onDragEnter={() => console.log('List index ', list_index) }
            onDragEnter={() => handleDragEnter({enteredList_index: list_index,})}
            className='boardList'
        >
            <div className='boardList__header'>
                <h2 className='boardList--title'>{title}</h2>
                <IconContext.Provider value={{color: "var(--gray-3)"}}>
                    <BsThreeDots /> 
                </IconContext.Provider>
            </div>
            <div className='boardList__content'>
                {
                    cards.map((card, i) =>{
                        return card && <Card 
                                    key={card.id}
                                    card_id={card.id}
                                    list_index={list_index}
                                    card_index={i}
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
