const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");

app.use(cors());
app.use(express.json());

const balances = {
  "85745629bc178ed14082": 100,
  "4a906ebf9ad0f13f829b": 50,
  "1cecfd49a8284f87aad8": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount, r, s, recovery } = req.body;

  if (!validateSigniture(sender, recipient, amount, r, s, recovery)) {
    res.status(401).send("Invalid signature")
    return
  }

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

function validateSigniture(sender, recipient, amount, r, s, recovery) {
  const message = `Sending ${amount} to ${recipient}`;
  const hash = keccak256(utf8ToBytes(message))
  const sig = new secp256k1.Signature(BigInt(r), BigInt(s))
  sig.recovery = parseInt(recovery)
  const pubKey = sig.recoverPublicKey(hash)
  let pubKeyHex = pubKey.toHex()
  let verified = secp256k1.verify(sig, hash, pubKey.toRawBytes());
  let slice = pubKeyHex.slice(pubKeyHex.length - 20)
  return verified && slice === sender
}