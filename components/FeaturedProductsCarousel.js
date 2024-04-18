import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const moveAnimation = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: 50px 0;
`;

const CarouselInner = styled.div`
  display: inline-flex;
  animation: ${moveAnimation} 30s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const ProductCard = styled.div`
  width: 250px;
  flex-shrink: 0;
  margin-right: 15px;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const products = [
  { id: 1, name: 'Spirit A', description: 'Exquisite flavor of ...', image: '/public/images/product1.jpg' },
  { id: 2, name: 'Spirit B', description: 'Rich and smooth ...', image: '/public/images/product2.jpg' },
  { id: 3, name: 'Spirit C', description: 'Bold and classic ...', image: '/public/images/product3.jpg' },
  // Duplicate the products to create a seamless transition
  { id: 4, name: 'Spirit A', description: 'Exquisite flavor of ...', image: '/public/images/product1.jpg' },
  { id: 5, name: 'Spirit B', description: 'Rich and smooth ...', image: '/public/images/product2.jpg' },
  { id: 6, name: 'Spirit C', description: 'Bold and classic ...', image: '/public/images/product3.jpg' },
];

const FeaturedProductsCarousel = () => (
  <CarouselContainer>
    <CarouselInner>
      {products.map(product => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </ProductCard>
      ))}
    </CarouselInner>
  </CarouselContainer>
);

export default FeaturedProductsCarousel;
