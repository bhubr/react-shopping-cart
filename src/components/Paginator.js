import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from '../vendor/Pagination'

class Paginator extends Component {
  constructor (props) {
    super(props)
    const { items, perPage, index } = this.props
    const total = Math.ceil(items.length / perPage)
    this.state = {
      total,
      display: 5
    }
  }
  render () {
    const { history } = this.props
    // const pages = []
    // for (let p = 1 ; p <= numPages ; p++) {
    //   const to = p === 1 ? '/' : `/page/${p}`
    //   const className = 'page-item' + (index + 1 === p ? ' active' : '')
    //   pages.push(<li key={p} className={className}><Link className="page-link" to={to}>{p}</Link></li>)
    // }
    return (
      <Pagination
        total = { this.state.total }
        current = { this.props.index + 1 }
        display = { this.state.display }
        onChange = { number => history.push(`/page/${number}`) }
      />
      // <nav aria-label="Page navigation example" style={{margin: '20px auto'}}>
      //   <ul className="pagination">
      //     <li className="page-item"><a className="page-link" href="#">Previous</a></li>
      //     {pages}
      //     <li className="page-item"><a className="page-link" href="#">Next</a></li>
      //   </ul>
      // </nav>
    )
  }
}

export default withRouter(Paginator)

