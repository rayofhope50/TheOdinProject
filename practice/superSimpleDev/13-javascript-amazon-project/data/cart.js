export const cart = [];

export function addToCart(productId, productQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += Number(productQuantity.value);
  } else {
    cart.push({
      productId,
      quantity: Number(productQuantity.value),
    });
  }
}
