import React, { useState, useLocation } from 'react';
import NavBar from '../components/NavBar';
import product1 from '../components/img/product1.avif';
import product2 from '../components/img/product2.avif';
import product3 from '../components/img/product3.avif';
import product4 from '../components/img/product4.avif';
import product5 from '../components/img/product5.avif';
import product6 from '../components/img/product6.avif';
import product7 from '../components/img/product7.webp';
import product8 from '../components/img/product8.webp';

const Product = ({ name, imageSrc, price, link }) => (
  <div className="product">
    <a href={link}>
      <img src={imageSrc} alt={name} />
      <div className="product-details">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </a>
  </div>
);

function ProductList({ type }) {
  const [category, setCategory] = useState(type || 'all');

  const products = [
    { name: 'Grey Sofa-bed', imageSrc: product1, price: '999€', link: '/react-e-commerce/#/product?id=1', category: 'furniture' },
    { name: 'Wooden Chair', imageSrc: product2, price: '19€', link: '/react-e-commerce/#/product?id=2', category: 'furniture' },
    { name: 'Mint Bed', imageSrc: product3, price: '598€', link: '/react-e-commerce/#/product?id=3', category: 'furniture' },
    { name: 'Grey Sink', imageSrc: product4, price: '290€', link: '/react-e-commerce/#/product?id=4', category: 'furniture' },
    { name: 'Outdoor Set', imageSrc: product5, price: '3450€', link: '/react-e-commerce/#/product?id=5', category: 'outdoor' },
    { name: 'Outdoor Table', imageSrc: product6, price: '5€', link: '/react-e-commerce/#/product?id=6', category: 'outdoor' },
    { name: 'Gaming Mouse', imageSrc: product7, price: '300€', link: '/react-e-commerce/#/product?id=7', category: 'technology' },
    { name: 'Monitor', imageSrc: product8, price: '50€', link: '/react-e-commerce/#/product?id=8', category: 'technology' },
  ];


  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

  const handleCategoryClick = (event, selectedCategory) => {
    event.preventDefault();
    setCategory(selectedCategory);
  };

  return (
    <>
      <NavBar />


      <div className="header-title">
        <a href="/react-e-commerce/#/">
          <svg viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="102.4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path></g></svg>
          return home</a>
      </div>

      <div className="header-types">
        <button onClick={(event) => handleCategoryClick(event, 'all')} style={{ color: category === 'all' ? 'grey' : '', textDecoration: category === 'all' ? 'underline' : '' }}>All</button>
        <button onClick={(event) => handleCategoryClick(event, 'furniture')} style={{ color: category === 'furniture' ? 'grey' : '', textDecoration: category === 'furniture' ? 'underline' : '' }}>Furniture</button>
        <button onClick={(event) => handleCategoryClick(event, 'outdoor')} style={{ color: category === 'outdoor' ? 'grey' : '', textDecoration: category === 'outdoor' ? 'underline' : '' }}>Outdoor</button>
        <button onClick={(event) => handleCategoryClick(event, 'technology')} style={{ color: category === 'technology' ? 'grey' : '', textDecoration: category === 'technology' ? 'underline' : '' }}>Technology</button>
      </div>

      <div className="product-container">
        {filteredProducts.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </>
  )
}

export default ProductList;
