import "@/styles/globals.css";

import "antd/dist/reset.css";
import Head from "next/head";
import { Nav } from "@/components/Header/Nav";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}
