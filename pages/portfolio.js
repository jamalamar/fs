import { useState, useEffect } from 'react';

import Nav from '../components/Nav';
import Portfolio from '../components/Portfolio';


export default function PortfolioPage() {

  return (
    <div>
      
      <Nav />

      <h1 style={{padding: '1em', fontSize: '3em', textAlign: 'center'}}>
        OUR PRODUCTS
      </h1>
      <p style={{margin: '1em', fontSize: '1.5em', textAlign: 'center', opacity: '0.6'}}>
        "Fraternity Spirits World began its journey in the spirits industry with a focus on premium international and Mexican spirits, aiming to share their rich heritage and exceptional quality on a global scale. "
      </p>
      
      <div>
        <Portfolio />
      </div>

    </div>
  );
}
