import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import ProductData from '../API/ProductData';

class App extends Component {
  state = {
    showStockItems: false,
    filterValue: ''
  };

  toggleStockProducts = e => {
    this.setState({ showStockItems: e.target.checked });
  };

  filterSearchProducts = e => {
    this.setState({ filterValue: e.target.value });
  };
  
  filterProducts = (data, { showStockItems, filterValue }) => {
    return data
      .filter(item => {
        if (showStockItems) {
          if (item.stocked) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      })
      .filter(item => {
        if (filterValue) {
          return (
            item.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
        } else {
          return true;
        }
      });
  };
  render() {
    this.productData = this.filterProducts([...ProductData], this.state);

    return (
      <div>
        <SearchBar
          {...this.state}
          toggleStockProducts={this.toggleStockProducts}
          filterSearchProducts={this.filterSearchProducts}
        />
        <ProductTable data={this.productData} />
      </div>
    );
  }
}
export default App;
