import { useRouter } from "next/router";
import en from "./en/index.js";
import vi from "./vi/index.js";

const useTrans = () => {
  const { locale } = useRouter();
  // console.log('current locale', locale)
  const trans = locale === "vi" ? vi : en;
  return trans;
};

export default useTrans;
