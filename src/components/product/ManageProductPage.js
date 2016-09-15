
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import { manufacturersFormattedForDropdown } from '../../selectors/selectors';
import ProductForm from './ProductForm';
import toastr from 'toastr';

export class ManageProductPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      product: Object.assign({}, props.product),
      errors: {},
      deleting: false,
      saving: false
    };
    this.updateProductState = this.updateProductState.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.product != 'undefined') {
      if (this.props.product.id !== nextProps.product.id ) {
        //necessary to populate form when existing course is loaded directly.
        this.setState({product: Object.assign({}, nextProps.product)});
      }
    }
  }

  updateProductState(event) {
    const field = event.target.name;
    let product = this.state.product;
    product[field] = event.target.value;
    return this.setState({product: product});
  }

  productFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.product.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveProduct(event) {
    event.preventDefault();

    if (!this.productFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveProduct(this.state.product)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({ saving: false });
    });
  }

  deleteProduct(event) {
    event.preventDefault();

    this.setState({ deleting: true });
    this.props.actions.deleteProduct(this.state.product)
    .then(() => this.redirectDelete())
    .catch(error => {
      toastr.error(error);
      this.setState({ deleting: false });
    });
  }



  redirectDelete() {
    this.setState({ deleting: false });
    toastr.success('Product Deleted');
    this.context.router.push('/products');
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Product saved');
    this.context.router.push('/products');
  }

  render() {
    return (
      <ProductForm
      onChange={this.updateProductState}
      onSave={this.saveProduct}
      onDelete={this.deleteProduct}
      allManufacturers={this.props.manufacturers}
      product={this.state.product}
      errors={this.state.errors}
      saving={this.state.saving}
      deleting={this.state.deleting}
      />
    );
  }
}

ManageProductPage.propTypes = {
  product: PropTypes.object,
  manufacturers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//pull in the react router context so router is available on this.context.router.
ManageProductPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getProductById(products, id) {
  const product = products.filter(product => product.id == id);
  if (product) return product[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.params.id; //from the path '/product/:id'
  let product = {id: '', linkHref: '', title: '', manufacturerId: '', category: ''};

  if (productId && state.products.length > 0) {
    product = getProductById(state.products, productId);
  }

  return {
    product : product,
    manufacturers: manufacturersFormattedForDropdown(state.manufacturers)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageProductPage);
