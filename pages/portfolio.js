import { useState, useEffect } from 'react';
import Nav from '../components/Nav';

export default function Portfolio() {
  // Simulating fetching data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock data for the demonstration
    setProducts([
      { id: 1, name: 'Spirit A', description: 'Description of Spirit A' },
      { id: 2, name: 'Spirit B', description: 'Description of Spirit B' },
      { id: 3, name: 'Spirit C', description: 'Description of Spirit C' },
    ]);
  }, []);

  return (
    <div>
      <Nav />
      <h1>Our Products</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
