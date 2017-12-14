import React from 'react';
const style = {
  display: 'block'
};
const SearchBar = props => {
  return (
    <div>
      <input
        type="text"
        value={props.filterValue}
        onChange={props.filterSearchProducts}
      />
      <label style={style}>
        <input
          type="checkbox"
          checked={props.showStockItems}
          onChange={props.toggleStockProducts}
        />{' '}
        Only show items in stock
      </label>
    </div>
  );
};
export default SearchBar;
