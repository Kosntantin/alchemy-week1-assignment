const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");

const PRIVATE_KEY = "3be6cba329ef59390056e94c688c6849996a85e19d426fd8ba7a4fab45be2e18";
const message = "Sending 10 to 1cecfd49a8284f87aad8";
const hash = keccak256(utf8ToBytes(message))

const sig = secp256k1.sign(hash, PRIVATE_KEY)

console.log(`Signature is\nr: ${sig.r}\ns: ${sig.s}\nrecovery: ${sig.recovery}`)