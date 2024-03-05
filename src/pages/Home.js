import React from 'react'
import NavBar from '../components/NavBar';
import Type from '../components/Type';
import NewestProducts from '../components/NewestProducts';
import MostPopular from '../components/MostPopular';
import Bottom from '../components/Bottom';


function Home() {
    return (<>
        <NavBar />

        <div className="type-container">
            <Type />
        </div>

        <div className="new-products-container">
            <NewestProducts />
        </div>

        <div className="popular-container">
            <MostPopular />
        </div>

        <Bottom />
    </>
    );

}

export default Home
