// import { mnemonicToSeedSync } from "bip39";
// import EC from "elliptic";
// import hdkey from "hdkey";
// import CryptoJS from "crypto-js";

// // Initialize elliptic curve secp256k1
// const ec = new EC.ec("secp256k1");

// export const getHashedPassword = () => {
//   const walletName = localStorage.getItem("walletName");
//   if (walletName) {
//     return localStorage.getItem(walletName);
//   }
//   return null;
// };

// export const generateKeys = (mnemonic) => {
//   const seed = mnemonicToSeedSync(mnemonic);
//   const root = hdkey.fromMasterSeed(seed);
//   const path = "m/44'/195'/0'/0/0";
//   const child = root.derive(path);
//   const privateKey = child.privateKey.toString("hex");
//   const publicKey = ec.keyFromPrivate(privateKey).getPublic("hex").slice(2);

//   const publicKeyBytes = CryptoJS.enc.Hex.parse(publicKey);
//   const keccak256 = CryptoJS.SHA3(publicKeyBytes, { outputLength: 256 }).toString();
//   const poxAddressHex = "37" + keccak256.substring(24);

//   return { privateKey, publicKey, poxAddressHex };
// };

// export const encryptAndStoreKeys = (mnemonic, password) => {
//   const { privateKey, publicKey, poxAddressHex } = generateKeys(mnemonic);

//   const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, password).toString();
//   const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, password).toString();

//   localStorage.setItem("mnemonic", mnemonic);
//   localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
//   localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
//   localStorage.setItem("poxAddress", poxAddressHex);
// };
