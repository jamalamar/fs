import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Nav from '../components/Nav';
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #00000;
    color: #333;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeroSection = styled.section`
  height: 90vh;
  background: url('/images/hero-bg.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  animation: ${fadeIn} 2s ease-out;
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

const Testimonials = styled.section`
  background: #f0f0f0;
  padding: 50px 20px;
  text-align: center;
`;

const Testimonial = styled.div`
  max-width: 600px;
  margin: auto;
  font-style: italic;
  padding: 20px;
`;

const CallToAction = styled.section`
  background: #333;
  color: white;
  text-align: center;
  padding: 50px 20px;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: gold;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

// Sample data for demonstration
const products = [
  { id: 1, name: 'Spirit A', description: 'Exquisite flavor of ...', image: '/images/product1.jpg' },
  { id: 2, name: 'Spirit B', description: 'Rich and smooth ...', image: '/images/product2.jpg' },
  { id: 3, name: 'Spirit C', description: 'Bold and classic ...', image: '/images/product3.jpg' },
];

// Example testimonial data
const testimonials = [
  { id: 1, quote: "Fraternity Spirits has the best selection that meets all our needs!", author: "Jane Doe" },
  { id: 2, quote: "Absolutely love the flavors of their new collection!", author: "John Smith" }
];


export default function Home() {
  return (
    <div>
    <GlobalStyle />
    
    <Nav />
    
    <HeroSection>
      <HeroContent>
          <Heading>Welcome to Fraternity Spirits</Heading>
          <SubHeading>Discover our world-class spirits crafted with passion and precision.</SubHeading>
        </HeroContent>
    </HeroSection>
    
    <FeaturedProducts>
      {products.map(product => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </ProductCard>
      ))}
    </FeaturedProducts>

    <FeaturedProductsCarousel />
    
    <Testimonials>
      {testimonials.map(testimonial => (
        <Testimonial key={testimonial.id}>
          <p>"{testimonial.quote}"</p>
          <strong>- {testimonial.author}</strong>
        </Testimonial>
      ))}
    </Testimonials>

    <CallToAction>
      <h2>Ready to taste the best spirits?</h2>
      <p>Visit our store or contact us directly to learn more!</p>
      <CTAButton>Contact Us</CTAButton>
    </CallToAction>
  </div>
  );
}
