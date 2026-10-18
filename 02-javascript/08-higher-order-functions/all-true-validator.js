function isTruthy(input) {
  if (input) {
    return true;
  } else {
    return false;
  }
}

function truthCheck(collection, pre) {
  const allTruthy = collection.every((item) => isTruthy(item[pre]));

  return allTruthy;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot",
);
