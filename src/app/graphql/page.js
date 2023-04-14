import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { gql } from "@apollo/client";

let client = null;
const query = gql`
  query {
    getUser(id: 1) {
      id
      email
      name
      userType
    }
  }
`;

const getClient = () => {
  client = new ApolloClient({
    link: createHttpLink({
      uri: "https://moonshot-user-service.fly.dev/graphql",
    }),
    cache: new InMemoryCache(),
  });

  return client;
};

export default async function Page() {
  const client = getClient();
  const { data } = await client.query({ query });
  return <>{data.getUser.email}</>;
}
