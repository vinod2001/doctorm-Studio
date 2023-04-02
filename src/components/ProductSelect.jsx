import React from 'react';
import PropTypes from 'prop-types';
import { PatchEvent, set, unset } from 'sanity';
import Search from "./Search";

const ProductSelect = React.forwardRef((props) => {
  const {onChange } = props;

  const handleChange = React.useCallback(
    // useCallback will help with performance
    (event, hit) => {
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(hit ? set(hit) : unset()))
    },
    [onChange]
  )

  return (
    <Search handleItemSelect={handleChange} />
  );
});

ProductSelect.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.shape({
      list: PropTypes.arrayOf(PropTypes.any),
      documentType: PropTypes.string,
    }).isRequired,
  }).isRequired,
  document: PropTypes.objectOf(PropTypes.any).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ProductSelect;
