import React, { Component } from 'react'

class UserRow extends Component {

  render () {
    const { user } = this.props
    return (
      <tr>
        <th scope="row">
          <button className="btn btn-danger" onClick={() => this.props.onDelete(user.id)}>
            <i className="far fa-trash"></i>
          </button>
        </th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>@{user.twitter}</td>
      </tr>
    )
  }
}

export default UserRow
