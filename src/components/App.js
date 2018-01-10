



import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ShoppingCart from './ShoppingCart';

import ProductData from '../API/ProductData';

class App extends Component {
  state = {
    productsList: ProductData.map((item) => ({ ...item, isAddedToCart:false})),
    showStockItems: false,
    filterValue: ''
  };
  
  removeFromCart = (key) => {
    this.setState(({productsList}) => ({
      productsList : productsList.map((item) => {
        if(item.id === key) { 
          item.isAddedToCart = false
        }
        return item
        })
    }));
  };
  addToCart = (key) => {
    
    this.setState(({ productsList }) => ({

      productsList: productsList.map((item) => {
        if (item.id === key) {
          item.isAddedToCart = true
        }
        return item
      })
    }));
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
    this.productData = this.filterProducts(this.state.productsList, this.state);
    return (
      <div>
        <SearchBar
          {...this.state}
          toggleStockProducts={this.toggleStockProducts}
          filterSearchProducts={this.filterSearchProducts}
        />
        <ProductTable data={this.productData} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
        <ShoppingCart productData={this.state.productsList.filter((item) => item.isAddedToCart)} removeFromCart = {this.removeFromCart}/>
      </div>
    );
  }
}
export default App;
