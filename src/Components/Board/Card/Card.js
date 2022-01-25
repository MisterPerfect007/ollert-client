import React from 'react';
import { IconContext } from 'react-icons';
import { MdAttachFile, MdOutlineInsertComment } from 'react-icons/md';

import './Card.css';
import CardLabel from './CardLabel/CardLabel';
import CardMembers from './CardMembers/CardMembers';


function Card({id, title, cover, labels, dragNDropFunctions}) {
    const { handleDragStart, draggingItem, handleDragEnd } = dragNDropFunctions

    return (
        <div 
            className='card'
            draggable
            onDragStart={(e) => handleDragStart(e, id)}
        >
            {
                draggingItem === id && <div className='card_dragging'></div>
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
                    labels.map((label, i) => {
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
