/* global localStorage */
class CartStorage {
  constructor () {
    const cartsJSON = localStorage.getItem('cartJSON')
    try {
      this.carts = JSON.parse(cartsJSON) || {}
    } catch (e) {
      this.carts = {}
    }
  }
  get (user = null) {
    if (!user) {
      return this.carts['guest'] || []
    }
    return this.carts[user.id] || []
  }
  set (user, cart) {
    const key = user ? user.id : 'guest'
    this.carts[key] = cart
    localStorage.setItem('cartJSON', JSON.stringify(this.carts))
  }
}

export default CartStorage
