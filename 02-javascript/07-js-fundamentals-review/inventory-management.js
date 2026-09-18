const inventory = [];

function findProductIndex(productName) {
  productName = productName.toLowerCase();

  for (const item of inventory) {
    if (item.name === productName) {
      return inventory.indexOf(item);
    }
  }

  return -1;
}

function addProduct(product) {
  product.name = product["name"].toLowerCase();
  let found = false;

  for (const item of inventory) {
    if (item.name === product.name) {
      item.quantity += product.quantity;
      console.log(`${product.name} quantity updated`);
      found = true;
      break;
    }
  }
  
  if (found === false) {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}
