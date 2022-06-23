import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4rdnmgz0z5i01z3gmvegtla/master",
  cache: new InMemoryCache(),
});
