import React, {Component} from 'react';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { ...props.item, count: 1 }
    }
    this.props.calculateTotal(parseFloat(props.item.price.replace(/^\$/, '')))
  }
  

  render() {
    let {item} = this.state;
    return (
      <li>{item.name} {item.price}
        <button onClick={this.changeCount.bind(this, 1)}> + </button>
        {item.count}
        <button onClick={item.count != 1? this.changeCount.bind(this,-1): this.removeItem.bind(this, item.id)}>-</button>
      </li>
)
  }
  removeItem = (key) => {
    let { removeFromCart } = this.props;
     
    removeFromCart(key);
    this.props.calculateTotal(parseFloat(this.state.item.price.replace(/^\$/, '') * (-1)))

  }
  changeCount = (value) => {
    this.setState(({item}) => ({item: {...item, count:item.count+value}}));
    this.props.calculateTotal(parseFloat(this.state.item.price.replace(/^\$/, '')*value))
  }
}

export default CartItem;