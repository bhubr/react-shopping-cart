import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Pagination from '../vendor/Pagination'

class Paginator extends Component {
  constructor (props) {
    super(props)
    const { items, perPage } = this.props
    const total = Math.ceil(items.length / perPage)
    this.state = {
      total,
      display: 5
    }
  }
  render () {
    const { history, index } = this.props
    const { display, total } = this.state
    return (
      <Pagination
        total = { total }
        current = { index + 1 }
        display = { display }
        onChange = { number => history.push(`/page/${number}`) }
      />
    )
  }
}

Paginator.propTypes = {
  items: PropTypes.array,
  index: PropTypes.number,
  perPage: PropTypes.number,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}

export default withRouter(Paginator)
