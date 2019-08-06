import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// PAGES
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';

// COMPONENTS
import AppHeader from './components/AppHeader/AppHeader';

const App = () => {
  return (
    <div>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items/:id" component={Product} />
        <Route path="/items" component={ProductList} />
      </Switch>
    </div>
  );
};

export default App;
