import React from 'react'
import ProductList from './ProductList.js'
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import Bottom from '../components/Bottom.js';


function ProductContainer() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    return (
        <>
            <NavBar />
            <ProductList type={type} />

            <Bottom />
        </>
    )
}

export default ProductContainer