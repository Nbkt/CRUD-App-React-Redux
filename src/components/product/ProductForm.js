import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ProductForm = ({product, allManufacturers, onSave, onDelete, onChange, saving, deleting, errors}) => {
  return (

    <form>
      <h1>Manage Product</h1>
      <TextInput
      name="title"
      label="Title"
      value={product.title}
      onChange={onChange}
      error={errors.title}/>

      <SelectInput
      name="manufacturerId"
      label="Manufacturer"
      value={product.manufacturerId}
      defaultOption="Select Manufacturer"
      options={allManufacturers}
      onChange={onChange}
      error={errors.manufacturerId}/>

      <TextInput
      name="category"
      label="Cateogry"
      value={product.category}
      onChange={onChange}
      error={errors.category}/>


      <input
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      onClick= {onSave}/>

      <input
      type="submit"
      disabled={deleting}
      value={deleting ? 'Deleting...' : 'Delete'}
      className="btn btn-danger button-crud"
      onClick= {onDelete}/>
    </form>

  );
};

ProductForm.propTypes = {
  product: React.PropTypes.object.isRequired,
  allManufacturers : React.PropTypes.array,
  onSave : React.PropTypes.func.isRequired,
  onDelete : React.PropTypes.func.isRequired,
  onChange : React.PropTypes.func.isRequired,
  saving : React.PropTypes.bool,
  deleting : React.PropTypes.bool,
  errors : React.PropTypes.object
};

export default ProductForm;
