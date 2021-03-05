import '../styles/globals.css'
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <Header/>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
