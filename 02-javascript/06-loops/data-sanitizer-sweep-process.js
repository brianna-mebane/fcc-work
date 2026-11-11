function sanitizeLog(entry, disallowedCharacters) {
  entry = entry.split("");

  for (const char of entry) {
    if (disallowedCharacters.includes(char)) {
      const index = entry.indexOf(char);
      entry[index] = "#";
    }
  }

  return entry.join("");
}

function cleanLogs(logs, disallowedCharacters) {
  const totalEntries = logs.length;
  let sanitizedEntries = 0;
  let informationalEntries = 0;

  for (let i = 0; i < logs.length; i++) {
    if (logs[i].includes("$")) {
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    } else if (logs[i][0] === "/") {
      informationalEntries++;
      continue;
    } else {
      logs[i] = sanitizeLog(logs[i], disallowedCharacters);
      sanitizedEntries++;
    }
  }

  return `Total Entry Count: ${totalEntries}. Sanitized Entry Count: ${sanitizedEntries}. Informational Entry Count: ${informationalEntries}. Finished sanitizing logs.`;
}
