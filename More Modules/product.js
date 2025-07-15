// Debugging in NodeJS

function calculateTotal(products) {
  let total = 0;

  products.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
}

const productList = [
  { name: "Shoes", price: 50, quantity: 2 },
  { name: "Hat", price: 25, quantity: 1 },
  { name: "Gloves", price: 30, quantity: 2 },
];

//expected result => 100=25=60 = 185
const grandTotal = calculateTotal(productList);
console.log('Grand Total: ',grandTotal);
