let email = "michaela@gmail.com";

function maskEmail(email) {
    let pound = email.indexOf("@");
    let mask = email.slice(1, pound - 1);
    let maskLength = mask.length;

    return email.replace(mask, "*".repeat(maskLength));
}

console.log(maskEmail(email));