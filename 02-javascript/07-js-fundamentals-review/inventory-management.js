const inventory = [];

function findProductIndex(product) {
  product = product.toLowerCase();

  for (const item of inventory) {
    if (item.name === product) {
      return inventory.indexOf(item);
    }
  }

  return -1;
}
