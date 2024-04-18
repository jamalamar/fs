import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const ProductCard = styled.div`
  background: ;
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
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
          <SectionTitle>{category}</SectionTitle>
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
