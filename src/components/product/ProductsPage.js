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

    this.sortProductByTitle = this.sortProductByTitle.bind(this);
    this.sortProductByManufacturer = this.sortProductByManufacturer.bind(this);
    this.sortProductByCategory = this.sortProductByCategory.bind(this);

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

  sortProductByTitle(event) {
    event.preventDefault();
    if(this.state.sortedT) {
      this.setState({ sortedT: false });
    } else {
      this.setState({ sortedT: true });
    }
    this.props.actions.sortProductByTitle(this.props.products, this.state.sortedT);

  }

  sortProductByManufacturer(event) {
    event.preventDefault();
    if(this.state.sortedM) {
      this.setState({ sortedM: false });
    } else {
      this.setState({ sortedM: true });
    }
    this.props.actions.sortProductByManufacturer(this.props.products, this.state.sortedM);

  }

  sortProductByCategory(event) {
    event.preventDefault();
    if(this.state.sortedC) {
      this.setState({ sortedC: false });
    } else {
      this.setState({ sortedC: true });
    }
    this.props.actions.sortProductByCategory(this.props.products, this.state.sortedC);

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
        sortProductByTitle={this.sortProductByTitle}
        sortProductByManufacturer={this.sortProductByManufacturer}
        sortProductByCategory={this.sortProductByCategory}

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
