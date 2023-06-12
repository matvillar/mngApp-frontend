import Header from './components/Header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; // InMemoryCache shows the data in the cache no need to refresh the page
import TheClients from './components/TheClients';
import Projects from './components/Projects';
import AddClientModal from './components/AddClientModal';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <Projects />
          <TheClients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
