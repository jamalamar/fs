import React from 'react';
import styled from 'styled-components';

import Nav from '../components/Nav'

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
  max-width: 960px;
`;

const Title = styled.h1`
  font-size: 3em;
  color: #FFC003;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 1.2em;
  color: #666;
  line-height: 1.6;
  text-align: justify;
`;

const About = () => {
  return (
    <div>
      <Nav/>
      
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

