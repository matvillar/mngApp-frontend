import { useQuery } from '@apollo/client'; // gql is a function that allows us to write queries in the client, useQuery is a hook that allows us to use the query
import RowClient from './RowClient';
import { GET_CLIENTS } from '../queries/clientQuery';
import LoadingSpinner from './LoadingSpinner';

export default function TheClients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Something is wrong</p>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <RowClient key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
