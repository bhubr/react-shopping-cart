import React, { Component } from 'react'

class UserAddForm extends Component {

  render () {
    const { user } = this.props
    return (
      <form onSubmit={this.props.onAddUser}>
        <h3>New user</h3>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input type="text" className="form-control" id="firstName" placeholder="John" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input type="text" className="form-control" id="lastName" placeholder="Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="twitter">Twitter username</label>
          <input type="text" className="form-control" id="twitter" placeholder="@johndoe" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">Add</button>
        </div>
      </form>
    )
  }
}

export default UserAddForm
