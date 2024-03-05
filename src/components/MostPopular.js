import React from 'react'
import product1 from "./img/product1.avif"
import product6 from "./img/product6.avif"
import product5 from "./img/product5.avif"

function MostPopular() {
  return (
    <>
      <p>Our most popular products</p>
        <div className="products">
            <div className="product1">
                <a href="/react-e-commerce/#/product?id=1">
                    <img src={product1} alt=""></img>
                </a>
            </div>

            <div className="product2">
                <a href="/react-e-commerce/#/product?id=6">
                    <img src={product6} alt=""></img>
                </a>
            </div>

            <div className="product3">
                <a href="/react-e-commerce/#/product?id=5">
                    <img src={product5} alt=""></img>
                </a>
            </div>
        </div>
        <a href="/react-e-commerce/#/all">See more...</a>
    </>
  )
}

export default MostPopular
