import React, {PropTypes} from 'react';
import ProductListRow from './ProductListRow';


const ProductList = ({products, sortProductsByTitle, sortProductsByCategory, sortProductsByManufacturer}) => {

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th onClick={sortProductsByTitle} className="no-wrap">Title <i className="fa fa-fw fa-sort"></i></th>
            <th onClick={sortProductsByManufacturer} className="no-wrap"><span className="iwt">Manufacturer <i className="fa fa-fw fa-sort"></i></span></th>
            <th onClick={sortProductsByCategory} className="no-wrap">Category <i className="fa fa-fw fa-sort"></i></th>

            <th className="no-wrap">Link</th>
            
          </tr>
        </thead>
        <tbody>
          {products.map(product =>
            <ProductListRow key={product.id} product={product}/>
          )}
        </tbody>

      </table>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  sortProductsByCategory: PropTypes.func.isRequired,
  sortProductsByTitle: PropTypes.func.isRequired,
  sortProductsByManufacturer: PropTypes.func.isRequired

};

export default ProductList;
