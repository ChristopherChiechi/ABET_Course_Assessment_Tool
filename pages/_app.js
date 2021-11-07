import "../styles/globals.css";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
import Header from "../components/Header";
import { AuthProvider } from "../components/authContext";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";
//<Component {...pageProps} />
import { useState, useContext, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Header />
        {pageLoading ? <div></div> : <Component {...pageProps} />}
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
