const express = require("express");
const CryptoJS = require("crypto-js");

const app = express();

app.get("/", (req, res) => {
  const message = "Hello, world!";
  const key = "alan!1004";

  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
  const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);

  res.send(`Encrypted message: ${encryptedMessage}<br>Decrypted message: ${decryptedMessage}`);
});

app.listen(3000, () => console.log("Server listening on port 3000"));