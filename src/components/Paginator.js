import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Paginator extends Component {
  render () {
    const { items, perPage, index } = this.props
    const numPages = Math.ceil(items.length / perPage)
    const pages = []
    for (let p = 1 ; p <= numPages ; p++) {
      const to = p === 1 ? '/' : `/page/${p}`
      const className = 'page-item' + (index + 1 === p ? ' active' : '')
      pages.push(<li key={p} className={className}><Link className="page-link" to={to}>{p}</Link></li>)
    }
    return (
      <nav aria-label="Page navigation example" style={{margin: '20px auto'}}>
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          {pages}
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    )
  }
}

export default Paginator

