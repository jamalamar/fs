import Nav from '../components/Nav';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 90vh;
  background: url('/public/images/hero-bg.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
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
`;

const ProductCard = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Sample data for demonstration
const products = [
  { id: 1, name: 'Spirit A', description: 'Exquisite flavor of ...', image: '/public/images/product1.jpg' },
  { id: 2, name: 'Spirit B', description: 'Rich and smooth ...', image: '/public/images/product2.jpg' },
  { id: 3, name: 'Spirit C', description: 'Bold and classic ...', image: '/public/images/product3.jpg' },
];


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

// Example testimonial data
const testimonials = [
  { id: 1, quote: "Fraternity Spirits has the best selection that meets all our needs!", author: "Jane Doe" },
  { id: 2, quote: "Absolutely love the flavors of their new collection!", author: "John Smith" }
];

const CallToAction = styled.section`
  background: #333;
  color: white;
  text-align: center;
  padding: 50px 20px;
`;


export default function Home() {
  return (
    <div>
    <Nav />
    <HeroSection>
      <div>
        <Heading>Welcome to Fraternity Spirits</Heading>
        <SubHeading>Discover our world-class spirits crafted with passion and precision.</SubHeading>
      </div>
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
      <button style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: 'gold', border: 'none', cursor: 'pointer' }}>Contact Us</button>
    </CallToAction>
  </div>
  );
}
