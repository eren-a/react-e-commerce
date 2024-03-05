import React from 'react'
import furniture from './img/main/furniture.jpg'
import outdoor from './img/main/outdoor.jpg'
import technology from './img/main/technology.jpg'

function Type() {
  return (
    <>
      <div className="furniture">
            <a href="/react-e-commerce/#/all?type=furniture">
                <img src={furniture} alt=""></img>
                <p>Furniture</p>
            </a>
        </div>

        <div className="outdoor">
            <a href="/react-e-commerce/#/all?type=outdoor">
                <img src={outdoor} alt=""></img>
                <p>Outdoor</p>
            </a>
        </div>

        <div className="technology">
            <a href="/react-e-commerce/#/all?type=technology">
                <img src={technology} alt=""></img>
                <p>Technology</p>
            </a>
        </div>
    </>
  );
}

export default Type
