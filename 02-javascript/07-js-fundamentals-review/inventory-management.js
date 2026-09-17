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
