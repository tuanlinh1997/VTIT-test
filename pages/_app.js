import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "antd/dist/reset.css";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  return <Component {...pageProps} />;
}
