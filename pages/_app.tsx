import "@/styles/globals.css";
import "@fontsource/dm-sans";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ActualWork</title>

        {/* <link rel="shortcut icon" href="favicon.png" /> */}

        <meta
          name="viewport"
          key="main"
          content="width=device-width, initial-scale=1.0"
        />

        <meta name="title" content="ActualWork — Build & ship in public" />
        <meta
          name="description"
          content="Document your weekly progress of building your project in public. Simply add your weekly goals, share it on twitter and build.          "
        />

        <meta property="og:type" content="website" key="og-type" />
        <meta
          property="og:url"
          content="https://actualwork.xyz/"
          key="og-url"
        />
        <meta
          property="og:title"
          content="ActualWork — Build & ship in public"
          key="og-title"
        />
        <meta
          property="og:description"
          content="Document your weekly progress of building your project in public. Simply add your weekly goals, share it on twitter and build.          "
          key="og-desc"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/pXJTLKrv/act-og.png"
          key="og-image"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://actualwork.xyz/"
          key="twt-url"
        />
        <meta
          property="twitter:title"
          content="ActualWork — Build & ship in public"
          key="twt-title"
        />
        <meta
          property="twitter:description"
          content="Document your weekly progress of building your project in public. Simply add your weekly goals, share it on twitter and build.          "
          key="twt-desc"
        />
        <meta
          property="twitter:image"
          content="https://i.postimg.cc/pXJTLKrv/act-og.png"
          key="twt-img"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
