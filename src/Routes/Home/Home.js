import React from 'react';
import './Home.css';
import BoardHeader from '../../Components/BoardHeader/BoardHeader';
import Header from '../../Components/Header/Header';

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="home__container">
                <BoardHeader />
            </div>
        </div>
    )
}

export default Home
