import "../styles/globals.css";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
import Header from "../components/Header";
import { AuthProvider } from "../components/authContext";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
