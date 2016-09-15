import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProductListRow = ({product}) => {
  return (
    <tr>
      <td><Link to={'/product/' + product.id}>{product.title}</Link></td>
      <td><Link to={'/manufacturer/' + product.manufacturerId}>{product.manufacturerId}</Link></td>
      <td>{product.category}</td>
      <td><a href={product.linkHref} target="_blank">View</a></td>

    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
