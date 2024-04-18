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
  font-size: 1.4em;
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
  { id: 1, quote: "Fraternity Spirits has the best selection!", author: "Jane Doe" },
  { id: 2, quote: "Absolutely love the flavors!", author: "John Smith" },
  { id: 3, quote: "Their customer service is unmatched.", author: "Alice Johnson" }
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
      <Testimonial key={testimonials[index].id} fadeIn={fadeIn}>
        <p>"{testimonials[index].quote}"</p>
        <strong>- {testimonials[index].author}</strong>
      </Testimonial>
    </TestimonialsContainer>
  );
};

export default Testimonials;
