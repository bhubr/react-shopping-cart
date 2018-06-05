import React, { Component } from 'react'
import UserRow from './UserRow'

class UserTable extends Component {

  render () {
    const { users } = this.props
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Twitter</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((u, i) => <UserRow key={i} user={u} onDelete={this.props.onDeleteUser} />)
          }
        </tbody>
      </table>
    )
  }
}

export default UserTable
