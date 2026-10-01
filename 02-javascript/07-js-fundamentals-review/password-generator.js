function generatePassword(passwordLength) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const alphaLength = alphabet.length;

  let password = "";

  while (password.length < passwordLength) {
    let i = Math.floor((Math.random() * alphaLength));

    password += alphabet[i];

  }

  return password;
}

const password = generatePassword(15);
console.log(`Generated password: ${password}`);