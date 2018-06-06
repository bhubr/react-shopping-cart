import React, { Component } from 'react'
import Paginator from './Paginator'
import ProductTable from './ProductTable'

const PER_PAGE = 3

class PaginatedProductTable extends Component {
  render() {
    console.log(this.props)
    const { products, onAddToCart, match: { params: { page } } } = this.props
    const index = ! page || page === 1 ? 0 : page - 1
    const sliceStart = index * PER_PAGE
    const pageProducts = products.slice(sliceStart, sliceStart + PER_PAGE)
    return (
      <div>
        <ProductTable products={pageProducts} onAddToCart={onAddToCart} />
        <div className="row">
          <Paginator items={products} perPage={PER_PAGE} index={index} />
        </div>
      </div>
    )
  }
}

export default PaginatedProductTable