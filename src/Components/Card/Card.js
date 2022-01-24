import React from 'react';
import { IconContext } from 'react-icons';
import { MdAttachFile, MdOutlineInsertComment } from 'react-icons/md';

import './Card.css';
import CardLabel from './CardLabel/CardLabel';
import CardMembers from './CardMembers/CardMembers';

function Card() {
    return (
        <div className='card'>
            <div className='card__img'>
                <img 
                    src='https://images.unsplash.com/photo-1505327191481-d31e1fb4ff79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                    alt=''
                />
            </div>
            <h2 className='card__title'>✋🏿 Move anything 'ready' here</h2>
            <div className='card__labels'>
                <CardLabel color='#ff0000' text='Newtext'/>
                <CardLabel color='#00ffaa' text='Newtext'/>
                <CardLabel color='#ff00ff' text='text'/>
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

export default Card
