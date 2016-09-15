import React, {PropTypes} from 'react';
import ProductListRow from './ProductListRow';


const ProductList = ({products, sortProductByTitle, sortProductByCategory, sortProductByManufacturer}) => {

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th onClick={sortProductByTitle} className="no-wrap">Title <i className="fa fa-fw fa-sort"></i></th>
            <th onClick={sortProductByManufacturer} className="no-wrap"><span className="iwt">Manufacturer <i className="fa fa-fw fa-sort"></i></span></th>
            <th onClick={sortProductByCategory} className="no-wrap">Category <i className="fa fa-fw fa-sort"></i></th>

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
  sortProductByCategory: PropTypes.func.isRequired,
  sortProductByTitle: PropTypes.func.isRequired,
  sortProductByManufacturer: PropTypes.func.isRequired

};

export default ProductList;
