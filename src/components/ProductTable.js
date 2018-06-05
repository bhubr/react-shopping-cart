import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductTable extends Component {
  render() {
    const { products, onAddToCart } = this.props
    return (
      <div className="row">
        {products.map((p, i) => <ProductItem key={i} product={p} onAddToCart={onAddToCart} />)}
      </div>
    )
  }
}

export default ProductTable