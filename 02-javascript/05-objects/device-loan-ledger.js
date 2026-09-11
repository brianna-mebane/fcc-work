const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function checkoutDevice(ledger, assetTag, borrower) {
  if (!(ledger.hasOwnProperty(assetTag))) {
    return { ledger: ledger, message: `Asset tag ${assetTag} not found in the ledger.`};
  } else if (ledger[assetTag].status === "CheckedOut") {
    return { ledger: ledger, message: `Device with asset tag ${assetTag} is already checked out.`};
  } else {
    const updatedLedger = JSON.parse(JSON.stringify(ledger));
    updatedLedger[assetTag].status = "CheckedOut";
    updatedLedger[assetTag].borrower.name = borrower.name;
    updatedLedger[assetTag].borrower.email = borrower.email;
    const confirmationMessage = `Device with the asset tag ${assetTag} has been checked out by ${borrower.name}.`;
    return { ledger: updatedLedger, message: confirmationMessage };
  }
}

function checkinDevice(ledger, assetTag) {
  if (!(ledger.hasOwnProperty(assetTag))) {
    return { ledger, message: `${assetTag} not found in the ledger.`};
  } else {
    const updatedLedger = JSON.parse(JSON.stringify(ledger));
    updatedLedger[assetTag].borrower.name = "";
    updatedLedger[assetTag].borrower.email = "";
    updatedLedger[assetTag].dueDate = "";
    updatedLedger[assetTag].status = "CheckedIn";

    const confirmationMessage = `Device with the asset tag ${assetTag} has been checked in.`;

    return { ledger: updatedLedger, message: confirmationMessage};
  }

}

function listOverdueDevices(ledger, today) {

}

function serializeLedger(ledger) {
  const ledgerJSON = JSON.stringify(ledger);

  return ledgerJSON;
}

function loadLedger(json) {
  const loadedObject = JSON.parse(json);

  return loadedObject;
}