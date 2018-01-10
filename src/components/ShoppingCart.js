import React,{Component} from 'react';

import CartItem from './CartItem';

class ShoppingCart extends Component {
  state = {
    totalAmount :0
  }

  render(){
    return (
      <div>
      <p>Shopping Cart</p>
      <ul>
          {this.renderShoppingList(this.props.productData)}
      </ul>
      <p>Total Amount payable = ${this.state.totalAmount}</p>
      </div>

    )
  }
  calculateTotal = (amount) => {
    this.setState(({totalAmount}) =>  {
      let total = +(totalAmount + amount).toFixed(2)
      return {
        totalAmount : total
      }
    })
  }
  renderShoppingList = (data) => {

    return data.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={this.props.removeFromCart} calculateTotal={this.calculateTotal} />
    ))
  }
}

export default ShoppingCart;