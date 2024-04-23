import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
  font-family: 'Lora', serif;
`;

const HeroContainer = styled.div`
    font-family: 'Lora', serif;  
    height: 90vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.div`
  background-image: url('${props => props.image}');
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  transition: opacity 2s ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
`;

const TextOverlay = styled.div`
  position: absolute;
  color: white;
  font-size: 8vh;
  text-align: center;
  width: 80%;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 1s ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
`;

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { url: 'https://fraternityspirits.com/wp-content/uploads/2024/03/Untitled-design-40.png', text: 'FRATERNITY SPIRITS WORLD' },
    { url: 'https://fraternityspirits.com/wp-content/uploads/2024/03/Certified-ara.png', text: 'A Unique Liquid Union' },
    { url: 'https://fraternityspirits.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-12-at-1.02.49-AM.jpeg', text: 'Crafting Excellence Since 1998' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <HeroContainer>
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <HeroImage image={image.url} show={index === currentImage} />
          <TextOverlay show={index === currentImage}>{image.text}</TextOverlay>
        </React.Fragment>
      ))}
    </HeroContainer>
  );
};

export default Hero;
