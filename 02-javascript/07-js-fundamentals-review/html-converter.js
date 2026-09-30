const htmlDict = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function convertHTML(str) {
  const newStr = str.split("");

  for (const s of newStr) {
    if (htmlDict.hasOwnProperty(s)) {
      const i = newStr.indexOf(s);
      newStr.splice(i, 1, htmlDict[s]);
    }
  }

  return newStr.join("");
}
