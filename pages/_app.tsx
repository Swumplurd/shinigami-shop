import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ThemeLayout } from "../components/layouts/ThemeLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeLayout>
        <Component {...pageProps} />
      </ThemeLayout>
    </Provider>
  );
}
