function updateRecords(records, id, prop, value) {
    if (value.length == 0) {
        delete records[id][prop];
    } else if (prop != "tracks" && value.length !== 0) {
        records[id][prop] = value;
    } else if (prop == "tracks" && value.length !== 0 && records[id].hasOwnProperty("tracks") == false) {
        records[id]["tracks"] = [];
        records[id]["tracks"].push(value);
    } else if (prop == "tracks" && value.length && records[id].hasOwnProperty("tracks")) {
        records[id]["tracks"].push(value);
    }

    return records;
}