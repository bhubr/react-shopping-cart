import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductTable extends Component {
  render() {
    const { products } = this.props
    return (
      <div className="row">
        {products.map((p, i) => <ProductItem key={i} product={p} />)}
      </div>
    )
  }
}

export default ProductTable