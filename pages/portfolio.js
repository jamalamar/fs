import { useState, useEffect } from 'react';

import Nav from '../components/Nav';
import Portfolio from '../components/Portfolio';


export default function PortfolioPage() {

  return (
    <div>
      <Nav />
      <h1>Our Products</h1>
      <div>
        <Portfolio />
      </div>
    </div>
  );
}
