import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import CartItem from './CartItem'

class Cart extends Component {
  render () {
    const { cart, products, onRemoveFromCart, onCartItemPlusOne, onCartItemMinusOne } = this.props
    return (
      <Grid container spacing={8}>
        <List>
          {cart.map(
            (item, i) => <CartItem
              key={i}
              product={products.find(p => p.id === item.id)}
              item={item}
              onRemoveFromCart={onRemoveFromCart}
              onCartItemPlusOne={onCartItemPlusOne}
              onCartItemMinusOne={onCartItemMinusOne} />
          )}
        </List>
      </Grid>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
  products: PropTypes.array,
  onRemoveFromCart: PropTypes.func,
  onCartItemPlusOne: PropTypes.func,
  onCartItemMinusOne: PropTypes.func
}

export default Cart
