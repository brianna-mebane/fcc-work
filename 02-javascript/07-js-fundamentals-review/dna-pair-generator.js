const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

function pairElement(strand) {
  const matches = [];

  for (const s of strand) {
    const match = [s, pairs[s]];
    matches.push(match);
  }

  return matches;
}
