
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>CRUD App</h1>
        <p>React, Redux Lorem ipsum dolor sit amet, consectetur.</p>
        <Link to="about" className="btn btn-primary btn-lg">About</Link>
        <Link to="products" className="btn btn-primary btn-lg button-crud">Products</Link>

      </div>
    );
  }
}

export default HomePage;
