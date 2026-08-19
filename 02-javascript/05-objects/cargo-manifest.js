function normalizeUnits(manifest) {
    const newManifest = {};
    
    newManifest.containerId = manifest.containerId;
    newManifest.destination = manifest.destination;
    newManifest.weight = manifest.weight;
    newManifest.unit = manifest.unit;
    newManifest.hazmat = manifest.hazmat;

    if (newManifest.unit == "lb") {
        newManifest.weight = newManifest.weight * 0.45;
        newManifest.unit = "kg";
    }

    return newManifest;
}

function validateManifest(manifest) {
    const newManifest = {};

    if (manifest.hasOwnProperty("containerId") == false) {
        newManifest.containerId = "Missing";
    } else if (Number.isInteger(manifest.containerId) == false || Number.isNaN(manifest.containerId) || manifest.containerId <= 0) {
        newManifest.containerId = "Invalid";
    }

    if (manifest.hasOwnProperty("destination") == false) {
        newManifest.destination = "Missing";
    } else if (typeof manifest.destination != "string" || manifest.destination.trim() == "") {
        newManifest.destination = "Invalid";
    }

    if (manifest.hasOwnProperty("weight") == false) {
        newManifest.weight = "Missing";
    } else if (typeof manifest.weight != "number" || Number.isNaN(manifest.weight) || manifest.weight < 0) {
        newManifest.weight = "Invalid";
    }

    if (manifest.hasOwnProperty("unit") == false) {
        newManifest.unit = "Missing";
    } else if (manifest.unit != "lb" && manifest.unit != "kg") {
        newManifest.unit = "Invalid";
    }

    if (manifest.hasOwnProperty("hazmat") == false) {
        newManifest.hazmat = "Missing";
    } else if (typeof manifest.hazmat != "boolean") {
        newManifest.hazmat = "Invalid";
    }

    return newManifest;
}

function processManifest(manifest) {

}