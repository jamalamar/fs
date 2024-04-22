import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); // Makes the grid responsive
  gap: 10px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 0px solid #ccc; // Set a light grey border
  padding: 15px;
  text-align: center;
  background: #000; // Set background to black;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  h3 {
    font-size: 2em;
    background: -webkit-linear-gradient(#FFC003, #000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 10px;
  }

  p {
    transition: color 0.3s ease;
    color: #fff;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover p, &:hover p {
    color: #fff; // Change text color on hover
    opacity: 0.5;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 3em;
  color: #FFC003;
  margin-bottom: 20px;
  padding-left: 1em;
  padding-top: 1em;
  text-transform: uppercase;
`;

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching portfolio data:', error));
  }, []);

  const categories = [...new Set(items.map(item => item.category))];

  return (
    <div>
      {categories.map(category => (
        <Section key={category}>
          <SectionTitle>{category}</SectionTitle>
          <PortfolioGrid>
            {items.filter(item => item.category === category).map(filteredItem => (
              <ProductCard key={filteredItem.id}>
                <img src={filteredItem.image} alt={filteredItem.name} />
                <h3>{filteredItem.brand}</h3>
                <p>{filteredItem.description}</p>
              </ProductCard>
            ))}
          </PortfolioGrid>
        </Section>
      ))}
    </div>
  );
};

export default Portfolio;
