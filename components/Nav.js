import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: #000; // Black background
  color: white;
  padding: 10px 20px;
  position: sticky; // Ensure navbar is sticky
  top: 0; // Anchor to the top of the viewport
  z-index: 1000; // Higher index to keep navbar on top
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; // Full width of the viewport
`;

const HamburgerIcon = styled.div`
  display: none; // Default to not displayed
  cursor: pointer;

  @media (max-width: 768px) { // Display on small screens
    display: block;
  }
`;

const Logo = styled.img`
  height: 50px; // Adjust size as needed
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    background-color: #000;
    right: 0;
    top: 60px;
    width: 100%;
    align-items: center;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #ccc;
    }
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
      <HamburgerIcon onClick={toggleMenu}>
        ☰
      </HamburgerIcon>
      <NavLinks isOpen={isOpen}>
        <Link href="/" passHref>Home</Link>
        <Link href="/about" passHref>About Us</Link>
        <Link href="/portfolio" passHref>Portfolio</Link>
        <Link href="/contact" passHref>Contact</Link>
      </NavLinks>
    </NavBar>
  );
};

export default Nav;
