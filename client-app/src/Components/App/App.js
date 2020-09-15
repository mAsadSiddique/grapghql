import React from 'react';
import './App.css';
import client from '../../Config/gql_config';
import { ApolloProvider } from '@apollo/client';
import Books from './Book/Books';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <h2>My first Apollo app 🚀</h2> */}
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;
