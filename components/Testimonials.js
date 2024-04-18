import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const TestimonialsContainer = styled.div`
  background: #f0f0f0;
  padding: 50px 20px;
  text-align: center;
  font-size: 1em;
`;

const Testimonial = styled.div`
  opacity: 0; // Start with hidden testimonial
  animation: ${props => props.fadeIn ? fadeIn : fadeOut} 1s linear forwards;
  transition: visibility 0s 1s, opacity 1s linear;
  visibility: ${props => props.fadeIn ? 'visible' : 'hidden'};
  max-width: 600px;
  margin: auto;
  font-style: italic;
  padding: 20px;
`;

const testimonials = [
  { id: 1, quote: "ProWein 2024 stands as a beacon of innovation, quality, and knowledge exchange in the world of wines and spirits. This event serves as an invaluable opportunity to connect with experts, professionals, and enthusiasts from across the globe.", author: "Prowein 2024" },
  { id: 2, quote: "ARA certification promotes environmentally responsible practices in the tequila industry through the Agave Responsable Ambiental initiative. ", author: "CORRALEJO ARA CERTIFICATION STEP FORWARD IN SUSTAINABILITY" },
  { id: 3, quote: "Using sound waves to enhance yeast performance improves flavor by optimizing fermentation for a richer taste profile.", author: "DEEPING INTO SOUNDS WITH RON PROHIBIDO" }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const cycleTestimonials = setTimeout(() => {
      setFadeIn(false);
      setTimeout(() => {
        setFadeIn(true);
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 1000); // Wait for the fade out to complete before changing testimonial
    }, 3000); // Change testimonials every 3 seconds

    return () => clearTimeout(cycleTestimonials);
  }, [index]);

  return (
    <TestimonialsContainer>
      <h1 style={{paddingTop: '', fontSize: '1.5em', textAlign: 'center', color: '#FFC003'}}>
        TESTIMONIALS
      </h1>
      <Testimonial key={testimonials[index].id} fadeIn={fadeIn}>
        <p>"{testimonials[index].quote}"</p>
        <strong>- {testimonials[index].author}</strong>
      </Testimonial>
    </TestimonialsContainer>
  );
};

export default Testimonials;
