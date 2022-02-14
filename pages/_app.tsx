import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "@styles/main.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
