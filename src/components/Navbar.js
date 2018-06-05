import React from 'react'
import '../css/Navbar.css'

class Navbar extends React.Component {
  render () {
    const { cart } = this.props
    const totalQty = cart.reduce((carry, item) => carry + item.qty, 0)
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">MuzikStore</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto"></ul>
          {/* <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          <span className="cart-icon-wrapper">
            <span className="oi oi-cart"></span>
            <span className="badge badge-pill badge-primary">{totalQty}</span>
          </span>
        </div>
      </nav>
    )
  }
}

export default Navbar