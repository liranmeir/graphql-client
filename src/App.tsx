import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Posts from './components/Posts';

const queryClient = new QueryClient()

const App = ()=>{
  return (<QueryClientProvider client={queryClient}>
      <Posts></Posts>
  </QueryClientProvider>)
}

export default App;
