import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';



class ProductsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  productRow(product, index) {
    return <div key={index}>{product.title}</div>;
  }

  redirectToAddProductPage() {
   browserHistory.push('/product');
  }




  render() {
    const {products} = this.props;
    return (
      <div>
        <h1>Products</h1>
        <input
        type="submit"
        value="Add Product"
        className="btn btn-primary"
        onClick={this.redirectToAddProductPage}
       />
        <ProductList
        products={products}
        onDelete={this.deleteProduct}
        />
      </div>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    products : state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsPage);
