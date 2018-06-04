import React, { Component } from 'react'
import UserAddForm from './UserAddForm'
import UserTable from './UserTable'

const initialUsers = [
  { id: 1, firstName: 'Jack', lastName: 'Johnson', email: 'jack@jackjohnsonmusic.net', twitter: 'JJ' },
  { id: 2, firstName: 'John', lastName: 'Mayer', email: 'jm@johnmayer.com', twitter: 'JohnM' }
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: initialUsers,
      nextId: 3
    }
    this.onAddUser = this.onAddUser.bind(this)
    this.onDeleteUser = this.onDeleteUser.bind(this)
  }
  onAddUser (e) {
    e.preventDefault()
    const inputs = e.target.querySelectorAll('input')
    const { users, nextId } = this.state
    const newUser = {}
    for (let input of inputs) {
      newUser[input.id] = input.value
    }
    newUser.id = nextId
    this.setState((prevState, props) => ({
      users: [...users, newUser],
      nextId: nextId + 1
    }))
  }
  onDeleteUser (userId) {
    console.log('delete user', userId)
    const { users } = this.state
    const newUsers = [...users]
    const index = users.findIndex(u => u.id === userId)
    newUsers.splice(index, 1)
    this.setState({
      users: newUsers
    })
  }
  render () {
    return (
      <div className="container">
        <UserAddForm onAddUser={this.onAddUser} />
        <UserTable users={this.state.users} onDeleteUser={this.onDeleteUser} />
      </div>
    )
  }
}

export default App
