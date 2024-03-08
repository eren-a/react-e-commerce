import React, { useState, useEffect } from 'react';
import product1 from '../components/img/product1.avif';
import product2 from '../components/img/product2.avif';
import product3 from '../components/img/product3.avif';
import product4 from '../components/img/product4.avif';
import product5 from '../components/img/product5.avif';
import product6 from '../components/img/product6.avif';
import product7 from '../components/img/product7.webp';
import product8 from '../components/img/product8.webp';

import product1b from '../components/img/product1b.avif';
import product2b from '../components/img/product2b.avif';
import product3b from '../components/img/product3b.avif';
import product4b from '../components/img/product4b.avif';
import product5b from '../components/img/product5b.avif';
import product6b from '../components/img/product6b.avif';
import product7b from '../components/img/product7b.webp';
import product8b from '../components/img/product8b.webp';

function SingleProduct({ id }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  
    return () => {
      window.scrollTo(0, 0);
    };
  }, [id]);

  const products = [
    { id: 1, name: 'Grey Sofa-bed', imageSrc: product1, thumbSrc: product1b, price: '999€', link: '/react-e-commerce/#/product', category: 'furniture', description: 'A sleek and versatile grey sofa bed that effortlessly combines modern aesthetics with functional design, providing both style and comfort for any living space.' },
    { id: 2, name: 'Wooden Chair', imageSrc: product2, thumbSrc: product2b, price: '19€', link: '/react-e-commerce/#/product', category: 'furniture', description: 'A timeless wooden chair, crafted with precision and elegance, seamlessly blending classic charm with ergonomic sophistication for a perfect seating solution.' },
    { id: 3, name: 'Mint Bed', imageSrc: product3, thumbSrc: product3b, price: '598€', link: '/react-e-commerce/#/product', category: 'furniture', description: 'A refreshing mint bed that adds a touch of tranquility to your bedroom, combining soothing color with contemporary design for a restful and stylish sleep haven.' },
    { id: 4, name: 'Grey Sink', imageSrc: product4, thumbSrc: product4b, price: '290€', link: '/react-e-commerce/#/product', category: 'furniture', description: 'A sophisticated grey sink, seamlessly merging modern aesthetics with practicality, elevating your bathroom or kitchen with understated elegance and versatility.' },
    { id: 5, name: 'Outdoor Set', imageSrc: product5, thumbSrc: product5b, price: '3450€', link: '/react-e-commerce/#/product', category: 'outdoor', description: 'An inviting outdoor set, designed for comfort and durability, perfect for creating a cozy and stylish lounging area in your garden or patio.' },
    { id: 6, name: 'Outdoor Table', imageSrc: product6, thumbSrc: product6b, price: '5€', link: '/react-e-commerce/#/product', category: 'outdoor', description: 'A chic outdoor table, crafted for both functionality and aesthetics, providing a stylish focal point for al fresco dining and entertaining in any outdoor setting.' },
    { id: 7, name: 'Gaming Mouse', imageSrc: product7, thumbSrc: product7b, price: '300€', link: '/react-e-commerce/#/product', category: 'technology', description: 'A precision-engineered gaming mouse designed for immersive gaming experiences, featuring customizable RGB lighting, responsive buttons, and ergonomic design for optimal performance and comfort during intense gameplay.' },
    { id: 8, name: 'Monitor', imageSrc: product8, thumbSrc: product8b, price: '50€', link: '/react-e-commerce/#/product', category: 'technology', description: 'A sleek and high-resolution monitor, offering crisp visuals and immersive display quality to enhance your computing or gaming setup with cutting-edge technology and a modern aesthetic.' },
  ];

  const [mainImage, setMainImage] = useState(products.find(product => product.id === id).imageSrc || '');

  const product = products.find(product => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, imageSrc, thumbSrc, description, price } = product;


  return (
    <>
      <h3>{name}</h3>
      <div className="single-product-container">
        <div className="product-left">
          <div className="main-img">
            <img id="mainImage" src={mainImage} alt={name} />
          </div>
          <div className="small-img">
            <img className="thumbnail" src={imageSrc} onMouseOver={() => setMainImage(imageSrc)} alt={name} />
            <img className="thumbnail" src={thumbSrc} onMouseOver={() => setMainImage(thumbSrc)} alt={name + ' b'} />
          </div>
        </div>
        <div className="product-right">
          <div className="description">
            <p>{description}</p>
          </div>
          <p>{price}</p>
          <div className="buy-button">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
