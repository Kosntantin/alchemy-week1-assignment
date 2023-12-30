const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");

const PRIVATE_KEY = "3be6cba329ef59390056e94c688c6849996a85e19d426fd8ba7a4fab45be2e18";
const message = "Sending 10 to 1cecfd49a8284f87aad8";
const hash = keccak256(utf8ToBytes(message))

const sig = secp256k1.sign(hash, PRIVATE_KEY)
// const sig = new secp256k1.Signature(tmp.r, tmp.s)
// sig.recovery = tmp.recovery
// const pubKey = sig.recoverPublicKey(hash)

// console.log(secp256k1.verify(sig, hash, pubKey.toRawBytes()))
console.log(`Signature is\nr: ${sig.r}\ns: ${sig.s}\nrecovery: ${sig.recovery}`)