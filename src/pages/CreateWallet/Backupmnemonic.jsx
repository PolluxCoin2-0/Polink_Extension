





// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { generateMnemonic } from "bip39";
// // import { QRCodeCanvas } from "qrcode.react";
// // import { Buffer } from "buffer";
// // import { FiCopy } from "react-icons/fi";
// // import { BsQrCodeScan } from "react-icons/bs";
// // import { toast } from "react-toastify";
// // import CryptoJS from "crypto-js";

// // // Polyfill Buffer for Webpack 5+
// // window.Buffer = Buffer;

// // const BackupMnemonic = () => {
// //     const [mnemonic] = useState(generateMnemonic());
// //     const [isQrVisible, setIsQrVisible] = useState(false);
// //     const navigate = useNavigate();

// //     // Retrieve hashed password from localStorage
// //     const getHashedPassword = () => {
// //         const walletName = localStorage.getItem("walletName");  // Assuming walletName is saved in localStorage
// //         if (walletName) {
// //             return localStorage.getItem(walletName);  // Get the hashed password for this wallet
// //         }
// //         return null;
// //     };

// //     // Encrypt mnemonic and store in local storage (only the current active wallet)
// //     const storeEncryptedMnemonic = (mnemonic) => {
// //         const hashedPassword = getHashedPassword();  // Retrieve the hashed password from localStorage
// //         if (!hashedPassword) {
// //             toast.error("Password not found, please create a wallet first.");
// //             return;
// //         }
        
// //         // Use hashed password as salt for encryption
// //         const encryptedMnemonic = CryptoJS.AES.encrypt(mnemonic, hashedPassword).toString();
        
// //         // Clear previous wallet data to ensure only the current wallet is stored
// //         localStorage.removeItem("mnemonic");

// //         // Store the new encrypted mnemonic
// //         localStorage.setItem("mnemonic", encryptedMnemonic);
// //     };

// //     const copyToClipboard = () => {
// //         // toast.success("Mnemonic copied to clipboard!");
// //         navigator.clipboard.writeText(mnemonic).then(() => {
// //             toast.success("Mnemonic copied to clipboard!");
// //         });
// //     };

// //     const handleBackup = () => {
// //         storeEncryptedMnemonic(mnemonic);
// //         navigate("/verify-mnemonic", { state: { mnemonic } });
// //     };

// //     return (
// //         <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// //             {/* Top Section */}
// //             <div className="w-full flex items-center justify-center py-2 relative">
// //                 <button
// //                     onClick={() => navigate(-1)}
// //                     className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// //                 >
// //                     <img src="/arrow-left.svg" alt="Go Back" />
// //                 </button>
// //                 <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
// //             </div>

// //             <div className="flex items-center bg-transparent justify-center">
// //                 <p className="px-4 text-sm text-white bg-transparent text-center leading-relaxed mt-6">
// //                     Please write down the following words in the correct order.
// //                 </p>
// //             </div>



// //             {/* Mnemonic Section */}
// //             <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
// //                 <div className="grid grid-cols-3 gap-2 w-full">
// //                     {mnemonic.split(" ").map((word, index) => (
// //                         <div
// //                             key={index}
// //                             className="bg-[#29271F]  text-center p-2 rounded-md border border-[#252118] text-sm text-white"
// //                         >
// //                             {word}
// //                         </div>
// //                     ))}
// //                 </div>
// //                 <button
// //                     onClick={copyToClipboard}
// //                     className="mt-4 px-4 py-1 bg-[#1e1e1e] from-yellow-400 to-red-200 text-white font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
// //                 >
// //                     <FiCopy className="text-lg text-yellow-400" />
// //                     Copy Mnemonic
// //                 </button>
// //             </div>

// //             {/* QR Code Section */}
// //             <button
// //                 onClick={() => setIsQrVisible(true)}
// //                 className="mt-6 px-4 py-3 bg-[#1e1e1e] bg-opacity-90 text-white font-semibold rounded-lg hover:brightness-110 flex items-center justify-center gap-2"
// //             >
// //                 <BsQrCodeScan className="text-lg text-yellow-400" />
// //                 Mnemonic QR Code
// //             </button>



// //             {isQrVisible && (
// //                 <div className="fixed inset-0 bg-transparent w-full bg-opacity-80 backdrop-blur-md flex items-center justify-center">
// //                     <div className="bg-[#ffff] bg-opacity-20 text-white p-6 rounded-lg relative max-w-[90%] w-[300px] text-center">
// //                         <h2 className="text-lg text-black font-bold mb-4">Mnemonic QR Code</h2>
// //                         <div className="flex items-center justify-center">
// //                             <QRCodeCanvas
// //                                 value={mnemonic.split(" ").join(" ")} // Ensures proper encoding
// //                                 size={200}
// //                                 className="w-full max-w-[200px]"
// //                             />
// //                         </div>
// //                         <button
// //                             onClick={() => setIsQrVisible(false)}
// //                             className="mt-4 px-4 py-2 bg-gradient-to-r w-full from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
// //                         >
// //                             Close
// //                         </button>
// //                     </div>
// //                 </div>
// //             )}

// //             {/* Already Backup Button */}
// //             <div className="flex items-center justify-center mt-[52px] w-full">
// //                 <button
// //                     onClick={handleBackup}
// //                     className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// //                     style={{
// //                         boxShadow:
// //                             "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// //                     }}
// //                 >
// //                     Already Backup
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default BackupMnemonic;





// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// // import { QRCodeCanvas } from "qrcode.react";
// // import { Buffer } from "buffer";
// // import { FiCopy } from "react-icons/fi";
// // import { BsQrCodeScan } from "react-icons/bs";
// // import { toast } from "react-toastify";
// // import EC from "elliptic";
// // import hdkey from "hdkey";
// // import CryptoJS from "crypto-js";

// // // Polyfill Buffer for Webpack 5+
// // window.Buffer = Buffer;

// // // Initialize elliptic curve secp256k1
// // const ec = new EC.ec("secp256k1");

// // const BackupMnemonic = () => {
// //   const [mnemonic] = useState(generateMnemonic());
// //   const [isQrVisible, setIsQrVisible] = useState(false);
// //   const navigate = useNavigate();

// //   // Retrieve hashed password from localStorage
// //   const getHashedPassword = () => {
// //     const walletName = localStorage.getItem("walletName"); // Assuming walletName is saved in localStorage
// //     if (walletName) {
// //       return localStorage.getItem(walletName); // Get the hashed password for this wallet
// //     }
// //     return null;
// //   };

// //   // Convert mnemonic to seed and generate keys
// //   const generateKeys = (mnemonic) => {
// //     const seed = mnemonicToSeedSync(mnemonic); // Convert mnemonic to seed
// //     const root = hdkey.fromMasterSeed(seed); // Create HD wallet from seed

// //     // Derive the standard POX path
// //     const path = "m/44'/195'/0'/0/0";
// //     const child = root.derive(path);

// //     // Generate private key
// //     const privateKey = child.privateKey.toString("hex");

// //     // Generate public key
// //     const keyPair = ec.keyFromPrivate(privateKey);
// //     const publicKey = keyPair.getPublic("hex").slice(2); // Remove the leading '04'

// //     // Hash the public key using Keccak256
// //     const publicKeyBytes = CryptoJS.enc.Hex.parse(publicKey);
// //     const keccak256 = CryptoJS.SHA3(publicKeyBytes, { outputLength: 256 }).toString();

// //     // Generate POX address (last 20 bytes of hash with '37' prefixed)
// //     const poxAddressHex = "37" + keccak256.substring(24);

// //     return { privateKey, publicKey, poxAddressHex };
// //   };

// //   // Encrypt and store keys in localStorage
// //   const storeEncryptedKeys = (mnemonic) => {
// //     const hashedPassword = getHashedPassword(); // Retrieve the hashed password from localStorage
// //     if (!hashedPassword) {
// //       toast.error("Password not found, please create a wallet first.");
// //       return;
// //     }

// //     // Generate keys
// //     const { privateKey, publicKey, poxAddressHex } = generateKeys(mnemonic);

// //     // Encrypt private key and public key
// //     const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
// //     const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();

// //     // Clear previous wallet data
// //     localStorage.removeItem("mnemonic");

// //     // Store encrypted keys
// //     localStorage.setItem("mnemonic", mnemonic);
// //     localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
// //     localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
// //     localStorage.setItem("poxAddress", poxAddressHex);

// //     toast.success("Keys generated and stored securely!");
// //   };

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(mnemonic).then(() => {
// //       toast.success("Mnemonic copied to clipboard!");
// //     });
// //   };

// //   const handleBackup = () => {
// //     storeEncryptedKeys(mnemonic);
// //     navigate("/verify-mnemonic", { state: { mnemonic } });
// //   };

// //   return (
// //     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// //       {/* Top Section */}
// //       <div className="w-full flex items-center justify-center py-2 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// //         >
// //           <img src="/arrow-left.svg" alt="Go Back" />
// //         </button>
// //         <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
// //       </div>

// //       <div className="flex items-center bg-transparent justify-center">
// //         <p className="px-4 text-sm text-white bg-transparent text-center leading-relaxed mt-6">
// //           Please write down the following words in the correct order.
// //         </p>
// //       </div>

// //       {/* Mnemonic Section */}
// //       <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
// //         <div className="grid grid-cols-3 gap-2 w-full">
// //           {mnemonic.split(" ").map((word, index) => (
// //             <div
// //               key={index}
// //               className="bg-[#29271F] text-center p-2 rounded-md border border-[#252118] text-sm text-white"
// //             >
// //               {word}
// //             </div>
// //           ))}
// //         </div>
// //         <button
// //           onClick={copyToClipboard}
// //           className="mt-4 px-4 py-1 bg-[#1e1e1e] from-yellow-400 to-red-200 text-white font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
// //         >
// //           <FiCopy className="text-lg text-yellow-400" />
// //           Copy Mnemonic
// //         </button>
// //       </div>

// //       {/* QR Code Section */}
// //       <button
// //         onClick={() => setIsQrVisible(true)}
// //         className="mt-6 px-4 py-3 bg-[#1e1e1e] bg-opacity-90 text-white font-semibold rounded-lg hover:brightness-110 flex items-center justify-center gap-2"
// //       >
// //         <BsQrCodeScan className="text-lg text-yellow-400" />
// //         Mnemonic QR Code
// //       </button>

// //       {isQrVisible && (
// //         <div className="fixed inset-0 bg-transparent w-full bg-opacity-80 backdrop-blur-md flex items-center justify-center">
// //           <div className="bg-[#ffff] bg-opacity-20 text-white p-6 rounded-lg relative max-w-[90%] w-[300px] text-center">
// //             <h2 className="text-lg text-black font-bold mb-4">Mnemonic QR Code</h2>
// //             <div className="flex items-center justify-center">
// //               <QRCodeCanvas
// //                 value={mnemonic}
// //                 size={200}
// //                 className="w-full max-w-[200px]"
// //               />
// //             </div>
// //             <button
// //               onClick={() => setIsQrVisible(false)}
// //               className="mt-4 px-4 py-2 bg-gradient-to-r w-full from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Already Backup Button */}
// //       <div className="flex items-center justify-center mt-[52px] w-full">
// //         <button
// //           onClick={handleBackup}
// //           className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// //           style={{
// //             boxShadow:
// //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// //           }}
// //         >
// //           Already Backup
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BackupMnemonic;




// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// // import { QRCodeCanvas } from "qrcode.react";
// // import { Buffer } from "buffer";
// // import { FiCopy } from "react-icons/fi";
// // import { BsQrCodeScan } from "react-icons/bs";
// // import { toast } from "react-toastify";
// // import EC from "elliptic";
// // import hdkey from "hdkey";
// // import CryptoJS from "crypto-js";

// // // Polyfill Buffer for Webpack 5+
// // window.Buffer = Buffer;

// // // Initialize elliptic curve secp256k1
// // const ec = new EC.ec("secp256k1");

// // const BackupMnemonic = () => {
// //   const [mnemonic] = useState(generateMnemonic());
// //   const [isQrVisible, setIsQrVisible] = useState(false);
// //   const navigate = useNavigate();

// //   // Retrieve hashed password from localStorage
// //   const getHashedPassword = () => {
// //     const walletName = localStorage.getItem("walletName"); // Assuming walletName is saved in localStorage
// //     if (walletName) {
// //       return localStorage.getItem(walletName); // Get the hashed password for this wallet
// //     }
// //     return null;
// //   };

// //   // Convert mnemonic to seed and generate keys
// //   const generateKeys = (mnemonic) => {
// //     const seed = mnemonicToSeedSync(mnemonic); // Convert mnemonic to seed
// //     const root = hdkey.fromMasterSeed(seed); // Create HD wallet from seed

// //     // Derive the standard POX path
// //     const path = "m/44'/195'/0'/0/0";
// //     const child = root.derive(path);

// //     // Generate private key
// //     const privateKey = child.privateKey.toString("hex");

// //     // Generate public key
// //     const keyPair = ec.keyFromPrivate(privateKey);
// //     const publicKey = keyPair.getPublic("hex").slice(2); // Remove the leading '04'

// //     // Hash the public key using Keccak256
// //     const publicKeyBytes = CryptoJS.enc.Hex.parse(publicKey);
// //     const keccak256 = CryptoJS.SHA3(publicKeyBytes, { outputLength: 256 }).toString();

// //     // Generate POX address (last 20 bytes of hash with '37' prefixed)
// //     const poxAddressHex = "37" + keccak256.substring(24);

// //     return { privateKey, publicKey, poxAddressHex };
// //   };

// //   // Encrypt and store keys in localStorage
// //   const storeEncryptedKeys = (mnemonic) => {
// //     const hashedPassword = getHashedPassword(); // Retrieve the hashed password from localStorage
// //     if (!hashedPassword) {
// //       toast.error("Password not found, please create a wallet first.");
// //       return;
// //     }

// //     // Generate keys
// //     const { privateKey, publicKey, poxAddressHex } = generateKeys(mnemonic);

// //     // Encrypt private key and public key
// //     const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
// //     const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();

// //     // Clear previous wallet data
// //     localStorage.removeItem("mnemonic");

// //     // Store encrypted keys
// //     localStorage.setItem("mnemonic", mnemonic);
// //     localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
// //     localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
// //     localStorage.setItem("poxAddress", poxAddressHex);

// //     toast.success("Keys generated and stored securely!");
// //   };

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(mnemonic).then(() => {
// //       toast.success("Mnemonic copied to clipboard!");
// //     });
// //   };

// //   const handleBackup = () => {
// //     storeEncryptedKeys(mnemonic);
// //     navigate("/verify-mnemonic", { state: { mnemonic } });
// //   };

// //   return (
// //     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// //       {/* Top Section */}
// //       <div className="w-full flex items-center justify-center py-2 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// //         >
// //           <img src="/arrow-left.svg" alt="Go Back" />
// //         </button>
// //         <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
// //       </div>

// //       <div className="flex items-center bg-transparent justify-center">
// //         <p className="px-4 text-sm text-white bg-transparent text-center leading-relaxed mt-6">
// //           Please write down the following words in the correct order.
// //         </p>
// //       </div>

// //       {/* Mnemonic Section */}
// //       <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
// //         <div className="grid grid-cols-3 gap-2 w-full">
// //           {mnemonic.split(" ").map((word, index) => (
// //             <div
// //               key={index}
// //               className="bg-[#29271F] text-center p-2 rounded-md border border-[#252118] text-sm text-white"
// //             >
// //               {word}
// //             </div>
// //           ))}
// //         </div>
// //         <button
// //           onClick={copyToClipboard}
// //           className="mt-4 px-4 py-1 bg-[#1e1e1e] from-yellow-400 to-red-200 text-white font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
// //         >
// //           <FiCopy className="text-lg text-yellow-400" />
// //           Copy Mnemonic
// //         </button>
// //       </div>

// //       {/* QR Code Section */}
// //       <button
// //         onClick={() => setIsQrVisible(true)}
// //         className="mt-6 px-4 py-3 bg-[#1e1e1e] bg-opacity-90 text-white font-semibold rounded-lg hover:brightness-110 flex items-center justify-center gap-2"
// //       >
// //         <BsQrCodeScan className="text-lg text-yellow-400" />
// //         Mnemonic QR Code
// //       </button>

// //       {isQrVisible && (
// //         <div className="fixed inset-0 bg-transparent w-full bg-opacity-80 backdrop-blur-md flex items-center justify-center">
// //           <div className="bg-[#ffff] bg-opacity-20 text-white p-6 rounded-lg relative max-w-[90%] w-[300px] text-center">
// //             <h2 className="text-lg text-black font-bold mb-4">Mnemonic QR Code</h2>
// //             <div className="flex items-center justify-center">
// //               <QRCodeCanvas
// //                 value={mnemonic}
// //                 size={200}
// //                 className="w-full max-w-[200px]"
// //               />
// //             </div>
// //             <button
// //               onClick={() => setIsQrVisible(false)}
// //               className="mt-4 px-4 py-2 bg-gradient-to-r w-full from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Already Backup Button */}
// //       <div className="flex items-center justify-center mt-[52px] w-full">
// //         <button
// //           onClick={handleBackup}
// //           className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// //           style={{
// //             boxShadow:
// //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// //           }}
// //         >
// //           Already Backup
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BackupMnemonic;





// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// // import { QRCodeCanvas } from "qrcode.react";
// // import { FiCopy } from "react-icons/fi";
// // import { BsQrCodeScan } from "react-icons/bs";
// // import { toast } from "react-toastify";
// // import EC from "elliptic";
// // import hdkey from "hdkey";
// // import CryptoJS from "crypto-js";
// // import { Buffer } from "buffer"; // Import Buffer from buffer

// // // Only run crypto initialization on the client side
// // if (typeof window !== "undefined") {
// //   // Polyfill Buffer for Webpack 5+
// //   window.Buffer = Buffer;
// //   const crypto = require("crypto-browserify");
// //   window.crypto = crypto;
// // }

// // // Initialize elliptic curve secp256k1
// // const ec = new EC.ec("secp256k1");

// // const BackupMnemonic = () => {
// //   const [mnemonic] = useState(generateMnemonic());
// //   const [isQrVisible, setIsQrVisible] = useState(false);
// //   const navigate = useNavigate();

// //   // Retrieve hashed password from localStorage
// //   const getHashedPassword = () => {
// //     const walletName = localStorage.getItem("walletName"); // Assuming walletName is saved in localStorage
// //     if (walletName) {
// //       return localStorage.getItem(walletName); // Get the hashed password for this wallet
// //     }
// //     return null;
// //   };

// //   // Convert mnemonic to seed and generate keys
// //   const generateKeys = (mnemonic) => {
// //     const seed = mnemonicToSeedSync(mnemonic); // Convert mnemonic to seed
// //     const root = hdkey.fromMasterSeed(seed); // Create HD wallet from seed

// //     // Derive the standard POX path
// //     const path = "m/44'/195'/0'/0/0";
// //     const child = root.derive(path);

// //     // Generate private key
// //     const privateKey = child.privateKey.toString("hex");

// //     // Generate public key
// //     const keyPair = ec.keyFromPrivate(privateKey);
// //     const publicKey = keyPair.getPublic("hex").slice(2); // Remove the leading '04'

// //     // Hash the public key using Keccak256
// //     const publicKeyBytes = CryptoJS.enc.Hex.parse(publicKey);
// //     const keccak256 = CryptoJS.SHA3(publicKeyBytes, { outputLength: 256 }).toString();

// //     // Generate POX address (last 20 bytes of hash with '37' prefixed)
// //     const poxAddressHex = "37" + keccak256.substring(24);

// //     return { privateKey, publicKey, poxAddressHex };
// //   };

// //   // Encrypt and store keys in localStorage
// //   const storeEncryptedKeys = (mnemonic) => {
// //     const hashedPassword = getHashedPassword(); // Retrieve the hashed password from localStorage
// //     if (!hashedPassword) {
// //       toast.error("Password not found, please create a wallet first.");
// //       return;
// //     }

// //     // Generate keys
// //     const { privateKey, publicKey, poxAddressHex } = generateKeys(mnemonic);

// //     // Encrypt private key and public key
// //     const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
// //     const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();

// //     // Clear previous wallet data
// //     localStorage.removeItem("mnemonic");

// //     // Store encrypted keys
// //     localStorage.setItem("mnemonic", mnemonic);
// //     localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
// //     localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
// //     localStorage.setItem("poxAddress", poxAddressHex);

// //     toast.success("Keys generated and stored securely!");
// //   };

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(mnemonic).then(() => {
// //       toast.success("Mnemonic copied to clipboard!");
// //     });
// //   };

// //   const handleBackup = () => {
// //     storeEncryptedKeys(mnemonic);
// //     navigate("/verify-mnemonic", { state: { mnemonic } });
// //   };

// //   return (
// //     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// //       {/* Top Section */}
// //       <div className="w-full flex items-center justify-center py-2 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// //         >
// //           <img src="/arrow-left.svg" alt="Go Back" />
// //         </button>
// //         <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
// //       </div>

// //       <div className="flex items-center bg-transparent justify-center">
// //         <p className="px-4 text-sm text-white bg-transparent text-center leading-relaxed mt-6">
// //           Please write down the following words in the correct order.
// //         </p>
// //       </div>

// //       {/* Mnemonic Section */}
// //       <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
// //         <div className="grid grid-cols-3 gap-2 w-full">
// //           {mnemonic.split(" ").map((word, index) => (
// //             <div
// //               key={index}
// //               className="bg-[#29271F] text-center p-2 rounded-md border border-[#252118] text-sm text-white"
// //             >
// //               {word}
// //             </div>
// //           ))}
// //         </div>
// //         <button
// //           onClick={copyToClipboard}
// //           className="mt-4 px-4 py-1 bg-[#1e1e1e] from-yellow-400 to-red-200 text-white font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
// //         >
// //           <FiCopy className="text-lg text-yellow-400" />
// //           Copy Mnemonic
// //         </button>
// //       </div>

// //       {/* QR Code Section */}
// //       <button
// //         onClick={() => setIsQrVisible(true)}
// //         className="mt-6 px-4 py-3 bg-[#1e1e1e] bg-opacity-90 text-white font-semibold rounded-lg hover:brightness-110 flex items-center justify-center gap-2"
// //       >
// //         <BsQrCodeScan className="text-lg text-yellow-400" />
// //         Mnemonic QR Code
// //       </button>

// //       {isQrVisible && (
// //         <div className="fixed inset-0 bg-transparent w-full bg-opacity-80 backdrop-blur-md flex items-center justify-center">
// //           <div className="bg-[#ffff] bg-opacity-20 text-white p-6 rounded-lg relative max-w-[90%] w-[300px] text-center">
// //             <h2 className="text-lg text-black font-bold mb-4">Mnemonic QR Code</h2>
// //             <div className="flex items-center justify-center">
// //               <QRCodeCanvas
// //                 value={mnemonic}
// //                 size={200}
// //                 className="w-full max-w-[200px]"
// //               />
// //             </div>
// //             <button
// //               onClick={() => setIsQrVisible(false)}
// //               className="mt-4 px-4 py-2 bg-gradient-to-r w-full from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Already Backup Button */}
// //       <div className="flex items-center justify-center mt-[52px] w-full">
// //         <button
// //           onClick={handleBackup}
// //           className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// //           style={{
// //             boxShadow:
// //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// //           }}
// //         >
// //           Already Backup
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BackupMnemonic;





// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// // import { QRCodeCanvas } from "qrcode.react";
// // import { Buffer } from "buffer";
// // import { FiCopy } from "react-icons/fi";
// // import { BsQrCodeScan } from "react-icons/bs";
// // import { toast } from "react-toastify";
// // import EC from "elliptic";
// // import * as bip32 from "bip32";
// // import CryptoJS from "crypto-js";

// // // Polyfill Buffer for Webpack 5+
// // window.Buffer = Buffer;

// // // Initialize elliptic curve secp256k1
// // const ec = new EC.ec("secp256k1");

// // const BackupMnemonic = () => {
// //   const [mnemonic] = useState(generateMnemonic());
// //   const [isQrVisible, setIsQrVisible] = useState(false);
// //   const navigate = useNavigate();

// //   // Retrieve hashed password from localStorage
// //   const getHashedPassword = () => {
// //     const walletName = localStorage.getItem("walletName"); // Assuming walletName is saved in localStorage
// //     if (walletName) {
// //       return localStorage.getItem(walletName); // Get the hashed password for this wallet
// //     }
// //     return null;
// //   };

// //   // Convert mnemonic to seed and generate keys
// //   const generateKeys = (mnemonic) => {
// //     const seed = mnemonicToSeedSync(mnemonic); // Convert mnemonic to seed
// //     const root = bip32.fromSeed(seed); // Create HD wallet from seed

// //     // Derive the standard POX path
// //     const path = "m/44'/195'/0'/0/0";
// //     const child = root.derivePath(path);

// //     // Generate private key
// //     const privateKey = child.privateKey.toString("hex");

// //     // Generate public key
// //     const keyPair = ec.keyFromPrivate(privateKey);
// //     const publicKey = keyPair.getPublic("hex").slice(2); // Remove the leading '04'

// //     // Hash the public key using Keccak256
// //     const publicKeyBytes = CryptoJS.enc.Hex.parse(publicKey);
// //     const keccak256 = CryptoJS.SHA3(publicKeyBytes, { outputLength: 256 }).toString();

// //     // Generate POX address (last 20 bytes of hash with '37' prefixed)
// //     const poxAddressHex = "37" + keccak256.substring(24);

// //     return { privateKey, publicKey, poxAddressHex };
// //   };

// //   // Encrypt and store keys in localStorage
// //   const storeEncryptedKeys = (mnemonic) => {
// //     const hashedPassword = getHashedPassword(); // Retrieve the hashed password from localStorage
// //     if (!hashedPassword) {
// //       toast.error("Password not found, please create a wallet first.");
// //       return;
// //     }

// //     // Generate keys
// //     const { privateKey, publicKey, poxAddressHex } = generateKeys(mnemonic);

// //     // Encrypt private key and public key
// //     const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
// //     const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();

// //     // Clear previous wallet data
// //     localStorage.removeItem("mnemonic");

// //     // Store encrypted keys
// //     localStorage.setItem("mnemonic", mnemonic);
// //     localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
// //     localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
// //     localStorage.setItem("poxAddress", poxAddressHex);

// //     toast.success("Keys generated and stored securely!");
// //   };

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(mnemonic).then(() => {
// //       toast.success("Mnemonic copied to clipboard!");
// //     });
// //   };

// //   const handleBackup = () => {
// //     storeEncryptedKeys(mnemonic);
// //     navigate("/verify-mnemonic", { state: { mnemonic } });
// //   };

// //   return (
// //     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// //       {/* Top Section */}
// //       <div className="w-full flex items-center justify-center py-2 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// //         >
// //           <img src="/arrow-left.svg" alt="Go Back" />
// //         </button>
// //         <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
// //       </div>

// //       <div className="flex items-center bg-transparent justify-center">
// //         <p className="px-4 text-sm text-white bg-transparent text-center leading-relaxed mt-6">
// //           Please write down the following words in the correct order.
// //         </p>
// //       </div>

// //       {/* Mnemonic Section */}
// //       <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
// //         <div className="grid grid-cols-3 gap-2 w-full">
// //           {mnemonic.split(" ").map((word, index) => (
// //             <div
// //               key={index}
// //               className="bg-[#29271F] text-center p-2 rounded-md border border-[#252118] text-sm text-white"
// //             >
// //               {word}
// //             </div>
// //           ))}
// //         </div>
// //         <button
// //           onClick={copyToClipboard}
// //           className="mt-4 px-4 py-1 bg-[#1e1e1e] from-yellow-400 to-red-200 text-white font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
// //         >
// //           <FiCopy className="text-lg text-yellow-400" />
// //           Copy Mnemonic
// //         </button>
// //       </div>

// //       {/* QR Code Section */}
// //       <button
// //         onClick={() => setIsQrVisible(true)}
// //         className="mt-6 px-4 py-3 bg-[#1e1e1e] bg-opacity-90 text-white font-semibold rounded-lg hover:brightness-110 flex items-center justify-center gap-2"
// //       >
// //         <BsQrCodeScan className="text-lg text-yellow-400" />
// //         Mnemonic QR Code
// //       </button>

// //       {isQrVisible && (
// //         <div className="fixed inset-0 bg-transparent w-full bg-opacity-80 backdrop-blur-md flex items-center justify-center">
// //           <div className="bg-[#ffff] bg-opacity-20 text-white p-6 rounded-lg relative max-w-[90%] w-[300px] text-center">
// //             <h2 className="text-lg text-black font-bold mb-4">Mnemonic QR Code</h2>
// //             <div className="flex items-center justify-center">
// //               <QRCodeCanvas
// //                 value={mnemonic}
// //                 size={200}
// //                 className="w-full max-w-[200px]"
// //               />
// //             </div>
// //             <button
// //               onClick={() => setIsQrVisible(false)}
// //               className="mt-4 px-4 py-2 bg-gradient-to-r w-full from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Already Backup Button */}
// //       <div className="flex items-center justify-center mt-[52px] w-full">
// //         <button
// //           onClick={handleBackup}
// //           className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// //           style={{
// //             boxShadow:
// //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// //           }}
// //         >
// //           Already Backup
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BackupMnemonic;




// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// // import { QRCodeCanvas } from "qrcode.react";
// // import { Buffer } from "buffer";
// // import { FiCopy } from "react-icons/fi";
// // import { BsQrCodeScan } from "react-icons/bs";
// // import { toast } from "react-toastify";
// // import EC from "elliptic";
// // import { BIP32Factory } from "bip32";
// // import * as secp256k1 from "secp256k1";
// // import CryptoJS from "crypto-js";

// // // Polyfill Buffer for Webpack 5+
// // window.Buffer = Buffer;

// // // Initialize elliptic curve secp256k1
// // const ec = new EC.ec("secp256k1");

// // // Initialize bip32 with secp256k1
// // const bip32 = BIP32Factory(secp256k1);

// // const BackupMnemonic = () => {
// //   const [mnemonic] = useState(generateMnemonic());
// //   const [isQrVisible, setIsQrVisible] = useState(false);
// //   const navigate = useNavigate();

// //   // Retrieve hashed password from localStorage
// //   const getHashedPassword = () => {
// //     const walletName = localStorage.getItem("walletName"); // Assuming walletName is saved in localStorage
// //     if (walletName) {
// //       return localStorage.getItem(walletName); // Get the hashed password for this wallet
// //     }
// //     return null;
// //   };

// //   // Convert mnemonic to seed and generate keys
// //   const generateKeys = (mnemonic) => {
// //     const seed = mnemonicToSeedSync(mnemonic); // Convert mnemonic to seed
// //     const root = bip32.fromSeed(seed); // Create HD wallet from seed

// //     // Derive the standard POX path
// //     const path = "m/44'/195'/0'/0/0";
// //     const child = root.derivePath(path);

// //     // Generate private key
// //     const privateKey = child.privateKey.toString("hex");

// //     // Generate public key
// //     const keyPair = ec.keyFromPrivate(privateKey);
// //     const publicKey = keyPair.getPublic("hex").slice(2); // Remove the leading '04'

// //     // Hash the public key using Keccak256
// //     const publicKeyBytes = CryptoJS.enc.Hex.parse(publicKey);
// //     const keccak256 = CryptoJS.SHA3(publicKeyBytes, { outputLength: 256 }).toString();

// //     // Generate POX address (last 20 bytes of hash with '37' prefixed)
// //     const poxAddressHex = "37" + keccak256.substring(24);

// //     return { privateKey, publicKey, poxAddressHex };
// //   };

// //   // Encrypt and store keys in localStorage
// //   const storeEncryptedKeys = (mnemonic) => {
// //     const hashedPassword = getHashedPassword(); // Retrieve the hashed password from localStorage
// //     if (!hashedPassword) {
// //       toast.error("Password not found, please create a wallet first.");
// //       return;
// //     }

// //     // Generate keys
// //     const { privateKey, publicKey, poxAddressHex } = generateKeys(mnemonic);

// //     // Encrypt private key and public key
// //     const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
// //     const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();

// //     // Clear previous wallet data
// //     localStorage.removeItem("mnemonic");

// //     // Store encrypted keys
// //     localStorage.setItem("mnemonic", mnemonic);
// //     localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
// //     localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
// //     localStorage.setItem("poxAddress", poxAddressHex);

// //     toast.success("Keys generated and stored securely!");
// //   };

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(mnemonic).then(() => {
// //       toast.success("Mnemonic copied to clipboard!");
// //     });
// //   };

// //   const handleBackup = () => {
// //     storeEncryptedKeys(mnemonic);
// //     navigate("/verify-mnemonic", { state: { mnemonic } });
// //   };

// //   return (
// //     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// //       {/* Top Section */}
// //       <div className="w-full flex items-center justify-center py-2 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// //         >
// //           <img src="/arrow-left.svg" alt="Go Back" />
// //         </button>
// //         <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
// //       </div>

// //       <div className="flex items-center bg-transparent justify-center">
// //         <p className="px-4 text-sm text-white bg-transparent text-center leading-relaxed mt-6">
// //           Please write down the following words in the correct order.
// //         </p>
// //       </div>

// //       {/* Mnemonic Section */}
// //       <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
// //         <div className="grid grid-cols-3 gap-2 w-full">
// //           {mnemonic.split(" ").map((word, index) => (
// //             <div
// //               key={index}
// //               className="bg-[#29271F] text-center p-2 rounded-md border border-[#252118] text-sm text-white"
// //             >
// //               {word}
// //             </div>
// //           ))}
// //         </div>
// //         <button
// //           onClick={copyToClipboard}
// //           className="mt-4 px-4 py-1 bg-[#1e1e1e] from-yellow-400 to-red-200 text-white font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
// //         >
// //           <FiCopy className="text-lg text-yellow-400" />
// //           Copy Mnemonic
// //         </button>
// //       </div>

// //       {/* QR Code Section */}
// //       <button
// //         onClick={() => setIsQrVisible(true)}
// //         className="mt-6 px-4 py-3 bg-[#1e1e1e] bg-opacity-90 text-white font-semibold rounded-lg hover:brightness-110 flex items-center justify-center gap-2"
// //       >
// //         <BsQrCodeScan className="text-lg text-yellow-400" />
// //         Mnemonic QR Code
// //       </button>

// //       {isQrVisible && (
// //         <div className="fixed inset-0 bg-transparent w-full bg-opacity-80 backdrop-blur-md flex items-center justify-center">
// //           <div className="bg-[#ffff] bg-opacity-20 text-white p-6 rounded-lg relative max-w-[90%] w-[300px] text-center">
// //             <h2 className="text-lg text-black font-bold mb-4">Mnemonic QR Code</h2>
// //             <div className="flex items-center justify-center">
// //               <QRCodeCanvas
// //                 value={mnemonic}
// //                 size={200}
// //                 className="w-full max-w-[200px]"
// //               />
// //             </div>
// //             <button
// //               onClick={() => setIsQrVisible(false)}
// //               className="mt-4 px-4 py-2 bg-gradient-to-r w-full from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Already Backup Button */}
// //       <div className="flex items-center justify-center mt-[52px] w-full">
// //         <button
// //           onClick={handleBackup}
// //           className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// //           style={{
// //             boxShadow:
// //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// //           }}
// //         >
// //           Already Backup
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BackupMnemonic;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// import { QRCodeCanvas } from "qrcode.react";
// import { Buffer } from "buffer";
// import { FiCopy } from "react-icons/fi";
// import { BsQrCodeScan } from "react-icons/bs";
// import { toast } from "react-toastify";
// import EC from "elliptic";
// import * as bitcoin from "bitcoinjs-lib";
// import BIP32Factory from "bip32";
// import * as tinySecp256k1 from "tiny-secp256k1";
// import CryptoJS from "crypto-js";

// // Polyfill Buffer for Webpack 5+
// window.Buffer = Buffer;

// // Initialize elliptic curve secp256k1
// const ec = new EC.ec("secp256k1");

// // Initialize bip32
// const bip32 = BIP32Factory(tinySecp256k1);

// const BackupMnemonic = () => {
//   const [mnemonic] = useState(generateMnemonic());
//   const [isQrVisible, setIsQrVisible] = useState(false);
//   const navigate = useNavigate();

//   // Retrieve hashed password from localStorage
//   const getHashedPassword = () => {
//     const walletName = localStorage.getItem("walletName"); // Assuming walletName is saved in localStorage
//     if (walletName) {
//       return localStorage.getItem(walletName); // Get the hashed password for this wallet
//     }
//     return null;
//   };

//   // Convert mnemonic to seed and generate keys
//   const generateKeys = (mnemonic) => {
//     const seed = mnemonicToSeedSync(mnemonic); // Convert mnemonic to seed
//     const root = bip32.fromSeed(seed); // Create HD wallet from seed

//     // Derive the standard POX path
//     const path = "m/44'/195'/0'/0/0";
//     const child = root.derivePath(path);

//     // Generate private key
//     const privateKey = child.privateKey.toString("hex");

//     // Generate public key
//     const keyPair = ec.keyFromPrivate(privateKey);
//     const publicKey = keyPair.getPublic("hex").slice(2); // Remove the leading '04'

//     // Hash the public key using Keccak256
//     const publicKeyBytes = CryptoJS.enc.Hex.parse(publicKey);
//     const keccak256 = CryptoJS.SHA3(publicKeyBytes, { outputLength: 256 }).toString();

//     // Generate POX address (last 20 bytes of hash with '37' prefixed)
//     const poxAddressHex = "37" + keccak256.substring(24);

//     return { privateKey, publicKey, poxAddressHex };
//   };

//   // Encrypt and store keys in localStorage
//   const storeEncryptedKeys = (mnemonic) => {
//     const hashedPassword = getHashedPassword(); // Retrieve the hashed password from localStorage
//     if (!hashedPassword) {
//       toast.error("Password not found, please create a wallet first.");
//       return;
//     }

//     // Generate keys
//     const { privateKey, publicKey, poxAddressHex } = generateKeys(mnemonic);

//     // Encrypt private key and public key
//     const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
//     const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();

//     // Clear previous wallet data
//     localStorage.removeItem("mnemonic");

//     // Store encrypted keys
//     localStorage.setItem("mnemonic", mnemonic);
//     localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
//     localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
//     localStorage.setItem("poxAddress", poxAddressHex);

//     toast.success("Keys generated and stored securely!");
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(mnemonic).then(() => {
//       toast.success("Mnemonic copied to clipboard!");
//     });
//   };

//   const handleBackup = () => {
//     storeEncryptedKeys(mnemonic);
//     navigate("/verify-mnemonic", { state: { mnemonic } });
//   };

//   return (
//     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
//       {/* Top Section */}
//       <div className="w-full flex items-center justify-center py-2 relative">
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
//         >
//           <img src="/arrow-left.svg" alt="Go Back" />
//         </button>
//         <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
//       </div>

//       <div className="flex items-center bg-transparent justify-center">
//         <p className="px-4 text-sm text-white bg-transparent text-center leading-relaxed mt-6">
//           Please write down the following words in the correct order.
//         </p>
//       </div>

//       {/* Mnemonic Section */}
//       <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
//         <div className="grid grid-cols-3 gap-2 w-full">
//           {mnemonic.split(" ").map((word, index) => (
//             <div
//               key={index}
//               className="bg-[#29271F] text-center p-2 rounded-md border border-[#252118] text-sm text-white"
//             >
//               {word}
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={copyToClipboard}
//           className="mt-4 px-4 py-1 bg-[#1e1e1e] from-yellow-400 to-red-200 text-white font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
//         >
//           <FiCopy className="text-lg text-yellow-400" />
//           Copy Mnemonic
//         </button>
//       </div>

//       {/* QR Code Section */}
//       <button
//         onClick={() => setIsQrVisible(true)}
//         className="mt-6 px-4 py-3 bg-[#1e1e1e] bg-opacity-90 text-white font-semibold rounded-lg hover:brightness-110 flex items-center justify-center gap-2"
//       >
//         <BsQrCodeScan className="text-lg text-yellow-400" />
//         Mnemonic QR Code
//       </button>

//       {isQrVisible && (
//         <div className="fixed inset-0 bg-transparent w-full bg-opacity-80 backdrop-blur-md flex items-center justify-center">
//           <div className="bg-[#ffff] bg-opacity-20 text-white p-6 rounded-lg relative max-w-[90%] w-[300px] text-center">
//             <h2 className="text-lg text-black font-bold mb-4">Mnemonic QR Code</h2>
//             <div className="flex items-center justify-center">
//               <QRCodeCanvas
//                 value={mnemonic}
//                 size={200}
//                 className="w-full max-w-[200px]"
//               />
//             </div>
//             <button
//               onClick={() => setIsQrVisible(false)}
//               className="mt-4 px-4 py-2 bg-gradient-to-r w-full from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Already Backup Button */}
//       <div className="flex items-center justify-center mt-[52px] w-full">
//         <button
//           onClick={handleBackup}
//           className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
//           style={{
//             boxShadow:
//               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
//           }}
//         >
//           Already Backup
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BackupMnemonic;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { QRCodeCanvas } from "qrcode.react";
import { Buffer } from "buffer";
import { FiCopy } from "react-icons/fi";
import { BsQrCodeScan } from "react-icons/bs";
import { toast } from "react-toastify";
import EC from "elliptic";
import CryptoJS from "crypto-js";

// Polyfill Buffer for Webpack 5+
window.Buffer = Buffer;

// Initialize elliptic curve secp256k1
const ec = new EC.ec("secp256k1");

const BackupMnemonic = () => {
  const [mnemonic] = useState(() => generateMnemonic());
  const [isQrVisible, setIsQrVisible] = useState(false);
  const navigate = useNavigate();

  const getHashedPassword = () => {
    const walletName = localStorage.getItem("walletName");
    return walletName ? localStorage.getItem(walletName) : null;
  };

  const generateKeys = (mnemonic) => {
    const seed = mnemonicToSeedSync(mnemonic);
    const root = ec.keyFromPrivate(seed.slice(0, 32).toString("hex")); // Generate root key pair
    const privateKey = root.getPrivate("hex");
    const publicKey = root.getPublic("hex").slice(2);
    const keccak256 = CryptoJS.SHA3(CryptoJS.enc.Hex.parse(publicKey), { outputLength: 256 }).toString();
    const poxAddressHex = "37" + keccak256.slice(-40); // POX address
    return { privateKey, publicKey, poxAddressHex };
  };

  const storeEncryptedKeys = (mnemonic) => {
    const hashedPassword = getHashedPassword();
    if (!hashedPassword) {
      toast.error("Password not found. Please create a wallet first.");
      return;
    }
    const { privateKey, publicKey, poxAddressHex } = generateKeys(mnemonic);
    const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
    const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();

    localStorage.setItem("mnemonic", mnemonic);
    localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
    localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
    localStorage.setItem("poxAddress", poxAddressHex);

    toast.success("Keys securely stored!");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mnemonic);
      toast.success("Mnemonic copied to clipboard!");
    } catch {
      toast.error("Failed to copy mnemonic.");
    }
  };

  const handleBackup = () => {
    storeEncryptedKeys(mnemonic);
    navigate("/verify-mnemonic", { state: { mnemonic } });
  };

  return (
    <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex items-center justify-center py-2 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 w-8 h-8"
          aria-label="Go back"
        >
          <img src="/arrow-left.svg" alt="Back" />
        </button>
        <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
      </div>

      {/* Instruction */}
      <p className="px-4 text-sm text-center leading-relaxed mt-6">
        Please write down the following words in the correct order.
      </p>

    

             {/* Mnemonic Section */}
            <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
                <div className="grid grid-cols-3 gap-2 w-full">
                    {mnemonic.split(" ").map((word, index) => (
                        <div
                            key={index}
                            className="bg-[#29271F]  text-center p-2 rounded-md border border-[#252118] text-sm text-white"
                        >
                            {word}
                        </div>
                    ))}
                </div>
                <button
                    onClick={copyToClipboard}
                    className="mt-4 px-4 py-1 bg-[#1e1e1e] from-yellow-400 to-red-200 text-white font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
                >
                    <FiCopy className="text-lg text-yellow-400" />
                    Copy Mnemonic
                </button>
            </div>

            {/* QR Code Section */}

            <button
                onClick={() => setIsQrVisible(true)}
                className="mt-6 px-4 py-3 bg-[#1e1e1e] bg-opacity-90 text-white font-semibold rounded-lg hover:brightness-110 flex items-center justify-center gap-2"
            >
                <BsQrCodeScan className="text-lg text-yellow-400" />
                Mnemonic QR Code
            </button>


            

             {isQrVisible && (
                <div className="fixed inset-0 bg-transparent w-full bg-opacity-80 backdrop-blur-md flex items-center justify-center">
                    <div className="bg-[#ffff] bg-opacity-20 text-white p-6 rounded-lg relative max-w-[90%] w-[300px] text-center">
                        <h2 className="text-lg text-black font-bold mb-4">Mnemonic QR Code</h2>
                        <div className="flex items-center justify-center">
                            <QRCodeCanvas
                                value={mnemonic.split(" ").join(" ")} // Ensures proper encoding
                                size={200}
                                className="w-full max-w-[200px]"
                            />
                        </div>
                        <button
                            onClick={() => setIsQrVisible(false)}
                            className="mt-4 px-4 py-2 bg-gradient-to-r w-full from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Already Backup Button */}
            <div className="flex items-center justify-center mt-[52px] w-full">
                <button
                    onClick={handleBackup}
                    className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
                    style={{
                        boxShadow:
                            "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
                    }}
                >
                    Already Backup
                </button>
            </div>
            



    </div>
  );
};

export default BackupMnemonic;
