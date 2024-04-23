import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

const NavBar = styled.nav`
  background-color: #000;
  color: white;
  padding: 10px 20px;
  position: fixed; // Change from sticky to fixed if appropriate for your layout
  top: 0;
  left: 0; // Ensure it spans from the left edge
  right: 0; // Ensure it spans to the right edge
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  height: 50px;
  padding-right: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: #FFC003;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #000;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    padding: 15px;
    align-items: center;
  }

  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;

    &:hover {
      color: #FFC003;
    }
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    margin-left: 10px;
    color: white;

    &:hover {
      -webkit-mask-image: linear-gradient(black, transparent);
      mask-image: linear-gradient(black, transparent);
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 30px;
    cursor: pointer;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBar>
      <Link href="/" passHref>
          <Logo src="/FSpequeno.png" alt="Fraternity Spirits Logo" />
      </Link>
      <Link href="/" passHref style={{letterSpacing: '7px'}}>
        FRATERNITY <br/> SPIRITS
      </Link>

      <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
      
      <NavLinks isOpen={isOpen}>
        <Link href="/" passHref>HOME</Link>
        <Link href="/about" passHref>ABOUT US</Link>
        <Link href="/portfolio" passHref>PORTFOLIO</Link>
        <Link href="/contact" passHref>CONTACT</Link>
      </NavLinks>
      
      <SocialMediaLinks>
        <Link href="https://www.facebook.com/FraternitySpirits.com" passHref>
          <Logo src="/Facebook.png" alt="Facebook Logo" style={{height: '25px'}}/>
        </Link>
        <Link href="https://www.instagram.com/fraternity_spirits/" passHref>
          <Logo src="/Instagram.png" alt="Instagram Logo" style={{height: '25px'}}/>
        </Link>
      </SocialMediaLinks>
    </NavBar>
  );
};

export default Nav;
