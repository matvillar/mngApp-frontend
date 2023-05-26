import { gql, useQuery } from '@apollo/client'; // gql is a function that allows us to write queries in the client, useQuery is a hook that allows us to use the query

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export default function TheClients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something is wrong</p>;
  return <>{!loading && !error && <h1>TheClients</h1>}</>;
}
