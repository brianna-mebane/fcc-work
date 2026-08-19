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

}

function processManifest(manifest) {

}