let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
    const firstNames = [];

    for (let i = 0; i < contacts.length; i++) {
        firstNames.push(contacts[i].firstName);
    }

    for (let i = 0; i < contacts.length; i++) {
        if (!firstNames.includes(name)) {
            return "No such contact";
        } else if (contacts[i].firstName == name) {
            if (contacts[i].hasOwnProperty(property) == false) {
                return "No such property";
            } else return contacts[i][property];
        }
    }
}