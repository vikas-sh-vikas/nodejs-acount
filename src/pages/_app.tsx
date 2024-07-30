import "@/styles/globals.css";
import { NextComponentType, NextPageContext } from "next";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & { getLayout: any };
}) {

  const getLayout = Component.getLayout || ((page: any) => page);


  const renderComponent = getLayout(
    <div className="layout">
      <Component {...pageProps} />
    </div>
  );

  return (
    <div>
      {renderComponent}
    </div>
  // <Component {...pageProps} />
  )
}
