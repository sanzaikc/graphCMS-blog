import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";

const GRAPHQL_URI =
  "https://api-ap-south-1.graphcms.com/v2/cl4c541jr3lb701z66q4b6y6k/master";

const cache = new InMemoryCache();

// persisting cache for offline use
persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

export const client = new ApolloClient({
  cache,
  uri: GRAPHQL_URI,
});
