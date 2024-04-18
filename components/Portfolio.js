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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: ;
  padding: 15px;
  text-align: center;
  background: ;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0; // Start invisible to let animation show change
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
    transition: color 1.3s ease;
    color: #FFC003;
  }

  p {
    transition: color 1.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover h3, &:hover p {
    opacity: 0.6; // Change color on hover for text
  }
`;


const PortfolioContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching portfolio data:', error));
  }, []);

  const categories = [...new Set(items.map(item => item.category))]; // Extract unique categories


  return (
    <div>
      {categories.map(category => (
        <Section key={category}>
          <SectionTitle style={{padding: '1em', color: '#FFC003', fontSize: '2.5em', textTransform: 'uppercase'}}>{category}</SectionTitle>
          <PortfolioContainer>
            {items.filter(item => item.category === category).map(filteredItem => (
              <ProductCard key={filteredItem.id}>
                <img src={filteredItem.image} alt={filteredItem.name} />
                <h3>{filteredItem.brand}</h3>
                <p>{filteredItem.description}</p>
              </ProductCard>
            ))}
          </PortfolioContainer>
        </Section>
      ))}
    </div>
  );
};

export default Portfolio;
