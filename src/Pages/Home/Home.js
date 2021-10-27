import React from 'react';
import Dishes from '../../Containers/Dishes/Dishes';
import Header from '../../Containers/Header/Header';
import Orders from '../../Containers/Orders/Orders';
import HomeWrapper from './HomeWrapper';

const Home = () => {

    return (
        <HomeWrapper>
            <div className="p-4 pb-0 dishes">
                <Header />
                <Dishes />
            </div>
            <Orders />
        </HomeWrapper>
    )
}

export default Home;