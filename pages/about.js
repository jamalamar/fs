import React from 'react';
import styled from 'styled-components';

import Nav from '../components/Nav'


const HeroSection = styled.div`
  height: 90vh;
  width: 100%;
  background: url('https://fraternityspirits.com/wp-content/uploads/2024/03/Certified-ara-1.png') no-repeat center center/cover; // Replace with your actual image URL
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff; // Text color for visibility against backgrounds
`;

const HeroContent = styled.div`
  max-width: 600px; // Ensures the text is not overly wide on larger screens
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1); // Semi-transparent background for text readability
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.5rem;
`;

const Logo = styled.img`
  height: 100px;
  margin-top: 80px;
`;

const AboutContainer = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  margin-bottom: 40px;
  width: 80%;
  max-width: 940px;
`;

const Title = styled.h1`
  font-size: 3em;
  background: -webkit-linear-gradient(#FFC003, #000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 1.2em;
  color: #fff;
  line-height: 1.6;
  text-align: justify;
`;

const About = () => {
  return (
    <div>
      <Nav/>

      <HeroSection>
        <HeroContent>
          <HeroTitle style={{color: '#fff'}}>FRATERNITY SPIRITS WORLD</HeroTitle>
          <HeroText>The importance of exploring and discovering</HeroText>
          <Logo src="/FSpequeno.png"/>
        </HeroContent>
      </HeroSection>
      
    <AboutContainer>
      <Section>
        <Title>Discover Our Identity</Title>
        <Text>
          Fraternity Spirits was founded on the principle of bringing exceptional spirit brands to a global audience. Our dedication to quality and innovation has driven us from the very beginning and continues to drive us into the future.
        </Text>
      </Section>
     
      <Section>
        <Title>Mission</Title>
        <Text>
          Our mission is to inspire a passion for premium spirits around the world through innovation, community engagement, and uncompromising quality. We strive to bring you unique experiences that are as rewarding as they are memorable.
        </Text>
      </Section>
      
      <Section>
        <Title>Vision</Title>
        <Text>
          Our vision is to be recognized globally as the benchmark for excellence in the spirit industry. We envision a future where our brands and experiences ignite the spirit of celebration in every corner of the world.
        </Text>
      </Section>
    </AboutContainer>
    </div>
  );
};

export default About;

