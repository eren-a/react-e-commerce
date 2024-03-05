import React from 'react'
import newestImage from './img/main/newest.jpg'

function NewestProducts() {
  return (
    <>
      <div className="image-left">
            <img src={newestImage} alt=""></img>
        </div>
        <div className="text-right">
            <h3>Discover the Latest in Home Trends!</h3>
            <p>Explore the latest with a warm welcome to the new season, effortlessly refresh your home with a range of home accessories in both traditional and modern styles. From storage solutions to lighting, textiles, and cushions featuring the latest patterns and color trends, there's always something new to discover. Come take a look!</p>
            <a href="/react-e-commerce/#/all">NEWEST PRODUCTS</a>
        </div>
    </>
  );
}

export default NewestProducts
