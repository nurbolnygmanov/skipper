import { AppProvider } from "@/providers/app-provider";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = {
  Component: NextPageWithLayout;
} & AppProps;

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const pageContent = getLayout(<Component {...pageProps} />);
  
  return <AppProvider>{pageContent}</AppProvider>;
}
