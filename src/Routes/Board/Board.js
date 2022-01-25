import React, { useState, useRef } from 'react';


import './Board.css';
import BoardHeader from '../../Components/Board/BoardHeader/BoardHeader';
import Header from '../../Components/Header/Header';
import BoardList from '../../Components/Board/BoardList/BoardList';
import AddAnotherList from '../../Components/Board/AddAnother/AddAnother';
import { cards } from './BoardLogic'


function Board() {

    const draggedNode = useRef();
    const [draggingItem, setDraggingItem] = useState(null);
    const handleDragStart = (e, id) => {
        draggedNode.current = e.target
        draggedNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout( () => setDraggingItem(id), 100)
        
        console.log('DragStart ...',)
    }
    const handleDragEnd = (e) => {
        setDraggingItem(null)
        draggedNode.current.removeEventListener('dragend', handleDragEnd)
        draggedNode.current = null
    }
    const dragNDropFunctions = {
        draggingItem, 
        setDraggingItem, 
        handleDragStart,
        handleDragEnd,
    };
    return (
        <div className='board'>
            <Header />
            <div className='board__container'>
                <BoardHeader />
                <div className='board__body'>
                    <div className='board__body--container'>
                        {
                            cards.map((list, i) => {
                                return <BoardList 
                                            key={list.list_id}
                                            title={list.list_title}
                                            cards={list.cards}
                                            dragNDropFunctions={dragNDropFunctions}
                                        />
                            })
                        }
                        <AddAnotherList elementName={'list'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board
