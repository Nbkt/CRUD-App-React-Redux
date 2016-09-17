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

    this.state = {
      sortedT: false,
      sortedM: false,
      sortedC: false
    };

    this.sortProductsByTitle = this.sortProductsByTitle.bind(this);
    this.sortProductsByManufacturer = this.sortProductsByManufacturer.bind(this);
    this.sortProductsByCategory = this.sortProductsByCategory.bind(this);

  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({products: Object.assign({}, nextProps.products)});
  // }

  productRow(product, index) {
    return <div key={index}>{product.title}</div>;
  }

  redirectToAddProductPage() {
   browserHistory.push('/product');
  }

  sortProductsByTitle(event) {
    event.preventDefault();
    if(this.state.sortedT) {
      this.setState({ sortedT: false });
    } else {
      this.setState({ sortedT: true });
    }
    this.props.actions.sortProductsByTitle(this.props.products, this.state.sortedT);

  }

  sortProductsByManufacturer(event) {
    event.preventDefault();
    if(this.state.sortedM) {
      this.setState({ sortedM: false });
    } else {
      this.setState({ sortedM: true });
    }
    this.props.actions.sortProductsByManufacturer(this.props.products, this.state.sortedM);

  }

  sortProductsByCategory(event) {
    event.preventDefault();
    if(this.state.sortedC) {
      this.setState({ sortedC: false });
    } else {
      this.setState({ sortedC: true });
    }
    this.props.actions.sortProductsByCategory(this.props.products, this.state.sortedC);

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
        sortProductsByTitle={this.sortProductsByTitle}
        sortProductsByManufacturer={this.sortProductsByManufacturer}
        sortProductsByCategory={this.sortProductsByCategory}

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
