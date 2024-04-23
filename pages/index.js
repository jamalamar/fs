import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Link from 'next/link';


import Hero from '../components/Hero';
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel';
import Testimonials from '../components/Testimonials';


const NavBar = styled.nav`
  background-color: #000; // Black background
  color: white;
  padding: 10px 20px;
  position: sticky; // Ensure navbar is sticky
  top: 0; // Anchor to the top of the viewport
  z-index: 1000; // Higher index to keep navbar on top
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; // Full width of the viewport
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  margin-top: 20px;
`;

const FeaturedProducts = styled.section`
  text-align: center;
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  color: white;
`;

const ProductCard = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
`;

const CallToAction = styled.section`
  background: #333;
  color: white;
  text-align: center;
  padding: 50px 20px;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 1rem;
  background-color: #FFC003;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(0.9);
    opacity: 80%;
  }
`;

// Sample data for demonstration
const products = [
  { id: 1, name: 'LEY SECA', description: 'Exquisite flavor of ...', image: 'https://fraternityspirits.com/wp-content/uploads/2023/11/typeelementorsiteurlhttpsfraternityspirits.comwp-jsonelementsidac630d1elTypewidgetisInnerfalseisLockedfalsesettingseditordivdivQuita-6-e1701158404971-768x933.png' },
  { id: 2, name: 'LOS ARANGO', description: 'Rich and smooth ...', image: 'https://fraternityspirits.com/wp-content/uploads/2024/03/Untitled-design-57-768x960.png' },
  { id: 3, name: 'RON PROHIBIDO', description: 'Bold and classic ...', image: 'https://fraternityspirits.com/wp-content/uploads/2024/03/Untitled-design-53-768x960.png' },
  { id: 4, name: 'RESERVA 22', description: 'Bold and classic ...', image: 'https://fraternityspirits.com/wp-content/uploads/2023/11/typeelementorsiteurlhttpsfraternityspirits.comwp-jsonelementsidac630d1elTypewidgetisInnerfalseisLockedfalsesettingseditordivdivQuita-e1701139240847-768x926.png' },
];


export default function Home() {
  return (
    <div>
    
    <Hero />
    
    <h1 style={{paddingTop: '2em', fontSize: '2em', textAlign: 'center', color: '#FFC003'}}>
      BEST SELLERS
    </h1>
    <FeaturedProducts>
      {products.map(product => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </ProductCard>
      ))}
    </FeaturedProducts>
    
    <h1 style={{paddingTop: '2em', fontSize: '1.5em', textAlign: 'center', color: '#FFC003'}}>
      EXPLORE MORE
    </h1>
    <FeaturedProductsCarousel />

    <Testimonials/>

    <CallToAction>
      <h2>Ready to taste the best spirits?</h2>
      <p>Visit our store or contact us directly to learn more!</p>
      <Link href="/contact">
        <CTAButton>Contact Us</CTAButton>
      </Link>
    </CallToAction>
  </div>
  );
}
