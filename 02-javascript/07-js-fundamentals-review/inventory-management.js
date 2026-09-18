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

function removeProduct(prodName, quantity) {
  prodName = prodName.toLowerCase();
  let found = false;

  for (const item of inventory) {
    if (item.name === prodName) {
      found = true;
      const difference = item.quantity - quantity;

      if (difference < 0) {
        console.log(
          `Not enough ${prodName} available, remaining pieces: ${item.quantity}`,
        );
      } else if (difference === 0) {
        item.quantity = 0;
        const itemIndex = findProductIndex(prodName);
        inventory.splice(itemIndex, 1);
      } else {
        item.quantity = item.quantity - quantity;
        console.log(`Remaining ${prodName} pieces: ${item.quantity}`);
      }
    }
  }

  if (found === false) {
    console.log(`${prodName} not found`);
  }
}
