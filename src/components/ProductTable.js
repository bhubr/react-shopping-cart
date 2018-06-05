import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'
import Grid from '@material-ui/core/Grid'

class ProductTable extends Component {
  render () {
    const { products, onAddToCart } = this.props
    return (
      <Grid container spacing={8}>
        {products.map((p, i) => <ProductItem key={i} product={p} onAddToCart={onAddToCart} />)}
      </Grid>
    )
  }
}

ProductTable.propTypes = {
  products: PropTypes.array,
  onAddToCart: PropTypes.func
}

export default ProductTable
