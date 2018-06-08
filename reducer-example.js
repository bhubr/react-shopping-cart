const initialState = {
  cart: [
    { id: 20, qty: 1 },
    { id: 40, qty: 1 }
  ]
}

const action1 = {
  type: 'ADD_TO_CART',
  productId: 70
}

const reducer = (state, action) => {

  if(action.type === 'ADD_TO_CART') {
    const { cart } = state
    const { productId } = action

    // Créer une copie du cart
    // [...cart]   -> utilisation de l'opérateur spread
    const newCart = [...cart]

    // Déterminer si le produit identifié par productId
    // a déjà été ajouté au panier
    const indexInCart = newCart.findIndex(
      item => item.id === productId
    )
    // Si le produit n'était pas dans le panier, l'ajouter
    if(indexInCart === -1) {
      newCart.push({ id: productId, qty: 1 })
    }
    // Sinon, augmenter la quantité de 1
    else {
      newCart[indexInCart].qty += 1
    }

    return {
      cart: newCart
    }

  }

  // Par défaut, si le type de l'action ne matche aucun des
  // if au-dessus, on retourne le state.
  // "EN VRAI" on utilisera switch
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
  return state

}

const state1 = reducer(initialState, action1)

console.log('Etat initial (2 items dans le panier')
console.log(initialState)
console.log('Etat apres action1 (ajout produit avec id 70)')
console.log(state1)

const state2 = reducer(state1, action1)

console.log('Etat apres action1 répétée une 2ème fois')
console.log(state2)