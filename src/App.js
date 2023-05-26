import Header from './components/Header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; // InMemoryCache shows the data in the cache no need to refresh the page
import TheClients from './components/TheClients';
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <TheClients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
