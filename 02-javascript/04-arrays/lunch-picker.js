const lunches = [];

function addLunchToEnd(lunchList, lunchItem) {
    lunchList.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return lunchList;
}

function addLunchToStart(lunchList, lunchItem) {
    lunchList.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return lunchList;
}

function removeLastLunch(lunchList) {
    if (lunchList.length == 0) {
        console.log("No lunches to remove.");
    } else {
        const lunchItem = lunchList.pop();
        console.log(`${lunchItem} removed from the end of the lunch menu.`);
        return lunchList;
    }
}

function removeFirstLunch(lunchList) {
    if (lunchList.length == 0) {
        console.log("No lunches to remove.");
    } else {
        const lunchItem = lunchList.shift();
        console.log(`${lunchItem} removed from the start of the lunch menu.`);
        return lunchList;
    }
}

function getRandomLunch(lunchList) {
    if (lunchList.length == 0) {
        console.log("No lunches available.");
    } else {
        const randomNum = Math.floor(Math.random() * lunchList.length);
        const randomLunch = lunchList[randomNum];
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }
    
}

function showLunchMenu(lunchList) {
    if (lunchList.length == 0) {
      console.log("The menu is empty.");
    } else {
      let fullList = lunchList.join(", ");
      console.log(`Menu items: ${fullList}`);
    }
}