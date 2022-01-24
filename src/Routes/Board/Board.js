import React from 'react';


import './Board.css';
import BoardHeader from '../../Components/Board/BoardHeader/BoardHeader';
import Header from '../../Components/Header/Header';
import BoardList from '../../Components/Board/BoardList/BoardList';

function Board() {
    return (
        <div className='board'>
            <Header />
            <div className='board__container'>
                <BoardHeader />
                <div className='board__body'>
                    <div className='board__body--container'>
                        <BoardList />
                        {/* <BoardList />
                        <BoardList />
                        <BoardList /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board
