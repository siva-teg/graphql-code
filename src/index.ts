import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typedefs";
import { resolvers } from "./schema/resolver";

const server = new ApolloServer({ typeDefs, resolvers, introspection: false });

server.listen().then((url) => {
  console.log(`listening on ${url.url}`);
});
