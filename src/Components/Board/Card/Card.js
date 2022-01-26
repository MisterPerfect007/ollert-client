import React from 'react';
import { IconContext } from 'react-icons';
import { MdAttachFile, MdOutlineInsertComment } from 'react-icons/md';

import './Card.css';
import CardLabel from './CardLabel/CardLabel';
import CardMembers from './CardMembers/CardMembers';


function Card({list_index, card_index, card_id, title, cover, labels, dragNDropFunctions}) {
    const {isDragging, handleDragStart, draggingItemInfos, handleDragEnd, handleDragEnter } = dragNDropFunctions

    return (
        <div 
            className='card'
            draggable
            onDragStart={(e) => handleDragStart({
                e: e,
                card_id: card_id, 
                draggedFromList_index: list_index,
                draggedCard_index: card_index
            })}
            onDragEnter={ (e) => handleDragEnter({
                e: e, 
                enteredList_index: list_index,
                enteredCard_index: card_index
            })}
        >
            {
                (isDragging && draggingItemInfos.current.card_id === card_id) && <div className='card_dragging'></div>
            }
            <div className='card__img'>
                <img 
                    src={cover}
                    alt=''
                />
            </div>
            <h2 className='card__title'>{title}</h2>
            <div className='card__labels'>
                {/* <CardLabel color='#ff0000' text='Newtext'/> */}
                {
                    labels && labels.map((label, i) => {
                        return <CardLabel key={i} color={label.color} text={label.title}/>
                    })
                }
            </div>
            <div className='card__bottom'>
                <CardMembers />
                <div className='card__commentAndAttachment'>
                    <div className='card__comment'>
                        <IconContext.Provider value={{color: 'var(--gray-4)', size: '12px'}}>
                            <MdOutlineInsertComment />

                        </IconContext.Provider>
                        <p>2</p>
                    </div>
                    <div className='card__attachment'>
                        <IconContext.Provider value={{color: 'var(--gray-4)', size: '12px'}}>
                            <MdAttachFile />

                        </IconContext.Provider>
                        
                        <p>1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
