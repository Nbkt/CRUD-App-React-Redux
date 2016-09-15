import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ProductsPage from './components/product/ProductsPage';
import ManageProductPage from './components/product/ManageProductPage'; //eslint-disable-line import/no-named-as-default

// import ManufacturersPage from './components/manufacturer/ManufacturersPage';
// import ManageManufacturerPage from './components/manufacturer/ManageManufacturerPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path="products" component={ProductsPage} />
    <Route path="product" component={ManageProductPage} />
    <Route path="product/:id" component={ManageProductPage} />

    {/* <Route path="manufacturers" component={ManufacturersPage} />
      <Route path="manufacturer" component={ManageManufacturerPage} />
    <Route path="manufacturer/:id" component={ManageManufacturerPage} /> */}

    <Route path="about" component={AboutPage} />

  </Route>
);
