// components/Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const SocialMedia = styled.div`
  margin-bottom: 20px;

  a {
    margin: 0 10px;
  }
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 0.75rem;
`;

const Footer = () => (
  <FooterContainer>
    <SocialMedia>
      <a href="https://facebook.com">
        <img src="/images/facebook-icon.png" alt="Facebook" style={{width: '24px', height: '24px'}} />
      </a>
      <a href="https://twitter.com">
        <img src="/images/twitter-icon.png" alt="Twitter" style={{width: '24px', height: '24px'}} />
      </a>
      <a href="https://instagram.com">
        <img src="/images/instagram-icon.png" alt="Instagram" style={{width: '24px', height: '24px'}} />
      </a>
    </SocialMedia>
    <Copyright>
      &copy; {new Date().getFullYear()} Fraternity Spirits. All rights reserved.
    </Copyright>
  </FooterContainer>
);

export default Footer;
