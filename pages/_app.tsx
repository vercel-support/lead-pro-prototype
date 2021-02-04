import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { AuthProvider } from "contexts/Auth";
import { AppContext } from "contexts/App";
import Router from "next/router";
import NProgress from "nprogress";
import { NextSeo } from "next-seo";
import {theme} from "theme";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function CustomApp({ Component, pageProps }) {
  const [isLauncherOpen, setLauncherState] = useState(false);

  return (
    
      
        <ChakraProvider theme={theme}>
          <NextSeo title="Lead Pro" />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;300;400;500;600;700&display=swap" rel="stylesheet"/>
          </Head>

          <Component {...pageProps} />
        </ChakraProvider>
      
    
  );
}

export default CustomApp;
