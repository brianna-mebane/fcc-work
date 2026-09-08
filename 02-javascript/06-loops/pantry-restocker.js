const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const shipment = [];
  const skus = [];

  for (let datum of rawData) {
    const parts = datum.split("|");
    const sku = parts[0].trim();

    if (!skus.includes(sku)) {
      skus.push(sku);

      const name = parts[1].trim();
      const qty = parts[2].trim();
      const expires = parts[3].trim();
      const zone = (parts[4]) ? parts[4].trim() : "general";

      shipment.push({
        sku: sku,
        name: name,
        qty: parseInt(qty),
        expires: expires,
        zone: zone
      });
    }
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  const pantrySKUs = [];
  const actions = [];

  for (let food of pantry) {
    pantrySKUs.push(food.sku);
  }

  for (let order of shipment) {
    let type = "";

    if (order.qty <= 0) {
      type = "discard";
    } else if (pantrySKUs.includes(order.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({ type: type, item: order });
  }

  return actions;
}

function groupByZone(actions) {
  const zonedActions = {};

  for (const action of actions) {

    const zone = action.item.zone;

    if (!zonedActions[zone]) {
      zonedActions[zone] = [];
    }

    zonedActions[zone].push(action);
  }

  return zonedActions;

}

function clonePantry(pantry) {
  const newPantry = [];

  for (let item of pantry) {
    newPantry.push({
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone
    });
  }

  return newPantry;
}