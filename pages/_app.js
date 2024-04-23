import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../app/globals.css';

// This is the global style that will be applied across all pages
const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
    font-family: 'Playfair Display', serif;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Nav/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
