import React from 'react'
import SingleProduct from './SingleProduct.js'
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import MostPopular from '../components/MostPopular.js';
import Bottom from '../components/Bottom.js';


function SingleContainer() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = parseInt(queryParams.get('id'));

    return (
        <>
            <NavBar />
            <SingleProduct id={id} />

            <div className="popular-container">
                <MostPopular />
            </div>

            <Bottom />
        </>
    )
}

export default SingleContainer
