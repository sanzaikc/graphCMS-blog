import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URI =
  "https://api-ap-south-1.graphcms.com/v2/cl4c541jr3lb701z66q4b6y6k/master";

export const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});
