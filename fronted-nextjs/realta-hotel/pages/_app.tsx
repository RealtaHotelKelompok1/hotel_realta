import React from "react";
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from "@/redux/Store";
import { NextUIProvider } from "@nextui-org/react";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <NextUIProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default App;
