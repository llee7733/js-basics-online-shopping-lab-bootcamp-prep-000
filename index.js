var cart = [];
  
function getCart() {
 return cart;
}

function setCart(newCart) {
  cart = newCart;
  return cart;
}

function addToCart(item) {
 const price = Math.floor(Math.random() * 100)
 cart.push({[item]:price});
 console.log('${item} has been added to your cart.')
 
 return cart;// write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
