import React, { useState, useRef } from 'react';


import './Board.css';
import BoardHeader from '../../Components/Board/BoardHeader/BoardHeader';
import Header from '../../Components/Header/Header';
import BoardList from '../../Components/Board/BoardList/BoardList';
import AddAnotherList from '../../Components/Board/AddAnother/AddAnother';
import { cards } from './BoardLogic'
import { MdSettingsInputAntenna } from 'react-icons/md';


function Board() {
    
    const boardNode = useRef();
    const draggedNode = useRef();
    const [boardData, setBoardData] = useState(cards)
    const draggingItemInfos = useRef({
        card_id: null,
        fromList_index: null,
        card_index: null
    });
    const [isDragging, setIsDragging] = useState(false)

    const handleDragStart = ({
        e, 
        card_id, 
        draggedFromList_index, 
        draggedCard_index,
    }) => {
        draggingItemInfos.current.fromList_index = draggedFromList_index;
        draggingItemInfos.current.card_index = draggedCard_index;

        draggedNode.current = e.target
        draggedNode.current.addEventListener('dragend', (e) => handleDragEnd(e))
        setTimeout( () => {
            draggingItemInfos.current.card_id = card_id,
            setIsDragging(true)
        }, 100)
        
        
        // console.log('DragStart ...',)
    };

    function handleDragEnter({
        e,
        enteredList_index,
        enteredCard_index,
    }) {
        const draggedFromList_index = draggingItemInfos.current.fromList_index;
        const draggedCard_index = draggingItemInfos.current.card_index

        console.log("Entered info ..", {enteredCard_index, enteredList_index,});
        // console.log("Dragged info ..", {draggedCard_index, draggedFromList_index,});

        // console.log(enteredCard_index !== draggedCard_index || enteredList_index !==  draggedFromList_index);

        if(enteredCard_index !== draggedCard_index || enteredList_index !==  draggedFromList_index) {
            console.log("On..........");
            setBoardData(
                old => {
                    let newList = JSON.parse(JSON.stringify(old))
                    const draggedCard = newList[draggedFromList_index].cards.splice(
                        draggedCard_index, 1
                    )
                    draggedCard[0] && newList[enteredList_index].cards.splice(
                        enteredCard_index, 0, draggedCard[0]
                    )
                    return newList
                }
                )
                draggingItemInfos.current.fromList_index =  enteredList_index
                draggingItemInfos.current.card_index = enteredCard_index
        }
        // console.log(draggingItem.current)
    }
    function handleDragEnd (e) {
        setTimeout( () => boardNode.current.addEventListener('dragover', (e) => e.preventDefault()), 100)
        setIsDragging(false)
        draggingItemInfos.current.card_id = null
        draggedNode.current.removeEventListener('dragend', handleDragEnd)
        draggedNode.current = null
    }
    const dragNDropFunctions = {
        isDragging,
        draggingItemInfos, 
        handleDragStart,
        handleDragEnd,
        handleDragEnter
    };
    return (
        <div className='board' ref={boardNode}>
            <Header />
            <div className='board__container'>
                <BoardHeader />
                <div className='board__body'>
                    <div className='board__body--container'>
                        {
                            boardData.map((list, i) => {
                                return <BoardList 
                                            key={list.list_id}
                                            id={list.list_id}
                                            list_index={i}
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
