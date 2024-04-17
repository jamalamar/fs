import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <Link href="/" legacyBehavior><a>Home</a></Link>
    <Link href="/about" legacyBehavior><a>About Us</a></Link>
    <Link href="/portfolio" legacyBehavior><a>Portfolio</a></Link>
    <Link href="/contact" legacyBehavior><a>Contact</a></Link>
  </nav>
);

export default Nav;
