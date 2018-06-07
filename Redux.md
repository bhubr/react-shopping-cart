# Introduction à Redux

On va voir commment Redux pourrait nous aider à rendre l'état de notre
application de magasin en ligne plus simple à gérer.

URL du repo: [https://github.com/bhubr/react-shopping-cart](https://github.com/bhubr/react-shopping-cart)

## Partie 1 : principes (live coding du mardi 4/6/2018)

Le tag `add-to-cart` permet de reprendre l'application à un état antérieur :
- avant qu'elle ne soit convertie de Bootstrap à Material UI... Note que ce changement n'a rien à voir avec la gestion du state, c'est juste de la cosmétique :D
- à un moment où on n'avait mis que `onAddToCart()` sur le composant App pour gérer l'ajout d'un produit au panier

Pour retrouver ce tag / commit : `git checkout add-to-cart`

Pour voir le code sur GitHub [c'est ici](https://github.com/bhubr/react-shopping-cart/tree/652876fd083af393de425d46097a625c715c53f9/src).

### Le problème

Le composant App gère un état global, incluant pour l'instant le panier du visiteur, `cart`, qui est un tableau contenant des objets comme `{ id: 30, qty: 2 }`, où l'`id` est celui d'un produit, et `qty` le nombre de fois qu'il apparaît dans le panier.

C'est le composant `ProductItem` qui permet l'ajout d'un produit au panier, via un bouton "Add to cart".

Pour que le composant App puisse être "informé" de l'ajout d'un produit au panier,
on a passé, via les props, une fonction `onAddToCart`, depuis App, jusqu'à `ProductItem`,
en passant par toute la hiérarchie de composants. Quand on clique sur "Add to cart", le "handler"
ou gestionnaire de l'évènement `click` ne fait qu'appeler la fonction `onAddToCart` reçue via les
props, en lui passant l'`id` du produit.

Même si notre "hiérarchie" de composants n'est pas encore très "profonde", le fait de devoir
passer une fonction depuis "tout en haut" jusque "tout en bas", semble un peu fastidieux, voire... lourd !

### Comment Redux peut nous aider

Les principes de Redux, dans les grandes lignes :
- L'état global de l'application est conservé par un "store" (magasin).
- On peut appliquer des *actions* pour informer le store qu'on veut changer l'état.
- Des *reducers* vont, pour chaque action, combiner l'état antérieur et l'action, pour
obtenir un nouvel état.

Un petit dessin pour illustrer tout cela :

![Redux state, action, reducer](https://raw.githubusercontent.com/bhubr/react-shopping-cart/master/redux-state-action-reducer.png)