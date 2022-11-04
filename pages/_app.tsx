import { NextPage } from "next";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeLayout } from "../components/layouts";
import { store } from "../store";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <ThemeLayout>
        <Component {...pageProps} />
      </ThemeLayout>
    </Provider>
  );
}
