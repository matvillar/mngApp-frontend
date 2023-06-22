import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; // InMemoryCache shows the data in the cache no need to refresh the page
import BeforeLogin from './components/BeforeLogin';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import OneProject from './pages/OneProject';
import { useAuth0 } from '@auth0/auth0-react';
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
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <>
        <BeforeLogin />
      </>
    );
  } else {
    return (
      <>
        {/* <LoginButton /> */}

        <ApolloProvider client={client}>
          <Router>
            <Header />
            <div className="container">
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/project/:id" element={<OneProject />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
              </Routes>
            </div>
          </Router>
        </ApolloProvider>
      </>
    );
  }
}

export default App;
