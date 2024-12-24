





// // // // import React, { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { generateMnemonic } from "bip39";
// // // // import { QRCodeCanvas } from "qrcode.react";
// // // // import { Buffer } from "buffer";
// // // // import { FiCopy } from "react-icons/fi";
// // // // import { BsQrCodeScan } from "react-icons/bs";
// // // // import { toast } from "react-toastify";
// // // // import CryptoJS from "crypto-js";

// // // // // Polyfill Buffer for Webpack 5+
// // // // window.Buffer = Buffer;

// // // // const BackupMnemonic = () => {
// // // //     const [mnemonic] = useState(generateMnemonic());
// // // //     const [isQrVisible, setIsQrVisible] = useState(false);
// // // //     const navigate = useNavigate();

// // // //     // Retrieve hashed password from localStorage
// // // //     const getHashedPassword = () => {
// // // //         const walletName = localStorage.getItem("walletName");  // Assuming walletName is saved in localStorage
// // // //         if (walletName) {
// // // //             return localStorage.getItem(walletName);  // Get the hashed password for this wallet
// // // //         }
// // // //         return null;
// // // //     };

// // // //     // Encrypt mnemonic and store in local storage (only the current active wallet)
// // // //     const storeEncryptedMnemonic = (mnemonic) => {
// // // //         const hashedPassword = getHashedPassword();  // Retrieve the hashed password from localStorage
// // // //         if (!hashedPassword) {
// // // //             toast.error("Password not found, please create a wallet first.");
// // // //             return;
// // // //         }

// // // //         // Use hashed password as salt for encryption
// // // //         const encryptedMnemonic = CryptoJS.AES.encrypt(mnemonic, hashedPassword).toString();

// // // //         // Clear previous wallet data to ensure only the current wallet is stored
// // // //         localStorage.removeItem("mnemonic");

// // // //         // Store the new encrypted mnemonic
// // // //         localStorage.setItem("mnemonic", encryptedMnemonic);
// // // //     };

// // // //     const copyToClipboard = () => {
// // // //         // toast.success("Mnemonic copied to clipboard!");
// // // //         navigator.clipboard.writeText(mnemonic).then(() => {
// // // //             toast.success("Mnemonic copied to clipboard!");
// // // //         });
// // // //     };

// // // //     const handleBackup = () => {
// // // //         storeEncryptedMnemonic(mnemonic);
// // // //         navigate("/verify-mnemonic", { state: { mnemonic } });
// // // //     };

// // // //     return (
// // // //         <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// // // //             {/* Top Section */}
// // // //             <div className="w-full flex items-center justify-center py-2 relative">
// // // //                 <button
// // // //                     onClick={() => navigate(-1)}
// // // //                     className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// // // //                 >
// // // //                     <img src="/arrow-left.svg" alt="Go Back" />
// // // //                 </button>
// // // //                 <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
// // // //             </div>

// // // //             <div className="flex items-center bg-transparent justify-center">
// // // //                 <p className="px-4 text-sm text-white bg-transparent text-center leading-relaxed mt-6">
// // // //                     Please write down the following words in the correct order.
// // // //                 </p>
// // // //             </div>



// // // //             {/* Mnemonic Section */}
// // // //             <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
// // // //                 <div className="grid grid-cols-3 gap-2 w-full">
// // // //                     {mnemonic.split(" ").map((word, index) => (
// // // //                         <div
// // // //                             key={index}
// // // //                             className="bg-[#29271F]  text-center p-2 rounded-md border border-[#252118] text-sm text-white"
// // // //                         >
// // // //                             {word}
// // // //                         </div>
// // // //                     ))}
// // // //                 </div>
// // // //                 <button
// // // //                     onClick={copyToClipboard}
// // // //                     className="mt-4 px-4 py-1 bg-[#1e1e1e] from-yellow-400 to-red-200 text-white font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
// // // //                 >
// // // //                     <FiCopy className="text-lg text-yellow-400" />
// // // //                     Copy Mnemonic
// // // //                 </button>
// // // //             </div>

// // // //             {/* QR Code Section */}
// // // //             <button
// // // //                 onClick={() => setIsQrVisible(true)}
// // // //                 className="mt-6 px-4 py-3 bg-[#1e1e1e] bg-opacity-90 text-white font-semibold rounded-lg hover:brightness-110 flex items-center justify-center gap-2"
// // // //             >
// // // //                 <BsQrCodeScan className="text-lg text-yellow-400" />
// // // //                 Mnemonic QR Code
// // // //             </button>



// // // //             {isQrVisible && (
// // // //                 <div className="fixed inset-0 bg-transparent w-full bg-opacity-80 backdrop-blur-md flex items-center justify-center">
// // // //                     <div className="bg-[#ffff] bg-opacity-20 text-white p-6 rounded-lg relative max-w-[90%] w-[300px] text-center">
// // // //                         <h2 className="text-lg text-black font-bold mb-4">Mnemonic QR Code</h2>
// // // //                         <div className="flex items-center justify-center">
// // // //                             <QRCodeCanvas
// // // //                                 value={mnemonic.split(" ").join(" ")} // Ensures proper encoding
// // // //                                 size={200}
// // // //                                 className="w-full max-w-[200px]"
// // // //                             />
// // // //                         </div>
// // // //                         <button
// // // //                             onClick={() => setIsQrVisible(false)}
// // // //                             className="mt-4 px-4 py-2 bg-gradient-to-r w-full from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
// // // //                         >
// // // //                             Close
// // // //                         </button>
// // // //                     </div>
// // // //                 </div>
// // // //             )}

// // // //             {/* Already Backup Button */}
// // // //             <div className="flex items-center justify-center mt-[52px] w-full">
// // // //                 <button
// // // //                     onClick={handleBackup}
// // // //                     className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// // // //                     style={{
// // // //                         boxShadow:
// // // //                             "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// // // //                     }}
// // // //                 >
// // // //                     Already Backup
// // // //                 </button>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default BackupMnemonic;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// import { QRCodeCanvas } from "qrcode.react";
// import { Buffer } from "buffer";
// import { FiCopy } from "react-icons/fi";
// import { BsQrCodeScan } from "react-icons/bs";
// import { toast } from "react-toastify";
// import EC from "elliptic";
// import CryptoJS from "crypto-js";
// import bs58check from 'bs58check';
// import * as secp256k1 from 'secp256k1';
// import { BIP32Factory } from 'bip32';
// import * as ecc from "tiny-secp256k1";

// // Polyfill Buffer for Webpack 5+
// window.Buffer = Buffer;

// // Initialize elliptic curve secp256k1
// const ec = new EC.ec("secp256k1");

// // Initialize BIP32 with tiny-secp256k1
// const bip32 = BIP32Factory(ecc);

// const BackupMnemonic = () => {
//   const [mnemonic] = useState(() => generateMnemonic());
//   const [isQrVisible, setIsQrVisible] = useState(false);
//   const navigate = useNavigate();

//   const getHashedPassword = () => {
//     const walletName = localStorage.getItem("walletName");
//     return walletName ? localStorage.getItem(walletName) : null;
//   };

//   const hexToPoxAddress = (hexAddress) => {
//     const decodedHex = Buffer.from(hexAddress, 'hex');
//     const base58Address = bs58check.encode(decodedHex);
//     return base58Address;
//   };

//   const generateKeys = (mnemonic, path = "m/44'/195'/0'/0/0") => {
//     const seed = mnemonicToSeedSync(mnemonic);

//     // Create HD wallet from seed (BIP32)
//     const root = bip32.fromSeed(seed);

//     // Derive the path
//     const child = root.derivePath(path);

//     const privateKey = child.privateKey.toString("hex");
//     const keyPair = ec.keyFromPrivate(privateKey);
//     const publicKey = keyPair.getPublic('hex').slice(2);

//     const keccak256 = CryptoJS.SHA3(CryptoJS.enc.Hex.parse(publicKey), { outputLength: 256 }).toString();
//     const poxAddressHex = "37" + keccak256.slice(-40); // POX address
//     const poxAddressBase58 = hexToPoxAddress(poxAddressHex);

//     return { privateKey, publicKey, poxAddressHex, poxAddressBase58 };
//   };

//   const storeEncryptedKeys = (mnemonic, path) => {
//     const hashedPassword = getHashedPassword();
//     if (!hashedPassword) {
//       toast.error("Password not found. Please create a wallet first.");
//       return;
//     }
//     const { privateKey, publicKey, poxAddressHex, poxAddressBase58 } = generateKeys(mnemonic, path);
//     const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
//     const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();
//     const encryptedMnemonic = CryptoJS.AES.encrypt(mnemonic, hashedPassword).toString();

//     console.log({ encryptedPrivateKey, encryptedPublicKey, encryptedMnemonic });

//     localStorage.setItem("encryptedMnemonic", encryptedMnemonic);
//     localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
//     localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
//     localStorage.setItem("poxAddress", poxAddressHex);
//     localStorage.setItem("poxAddressBase58", poxAddressBase58);

//     toast.success("Keys securely stored!");
//   };

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(mnemonic);
//       toast.success("Mnemonic copied to clipboard!");
//     } catch {
//       toast.error("Failed to copy mnemonic.");
//     }
//   };

//   const handleBackup = () => {
//     const path = "m/44'/195'/0'/0/0"; // Example path, change as needed
//     storeEncryptedKeys(mnemonic, path);
//     navigate("/verify-mnemonic", { state: { mnemonic } });
//   };

//   return (
//     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
//       {/* Header */}
//       <div className="flex items-center justify-center py-2 relative">
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute left-0 w-8 h-8"
//           aria-label="Go back"
//         >
//           <img src="/arrow-left.svg" alt="Back" />
//         </button>
//         <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
//       </div>

//       {/* Instruction */}
//       <p className="px-4 text-sm text-center leading-relaxed mt-6">
//         Please write down the following words in the correct order.
//       </p>

//       {/* Mnemonic Section */}
//       <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
//         <div className="grid grid-cols-3 gap-2 w-full">
//           {mnemonic.split(" ").map((word, index) => (
//             <div
//               key={index}
//               className="bg-[#29271F]  text-center p-2 rounded-md border border-[#252118] text-sm text-white"
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
//                 value={mnemonic.split(" ").join(" ")} // Ensures proper encoding
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






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// import { QRCodeCanvas } from "qrcode.react";
// import { Buffer } from "buffer";
// import { FiCopy } from "react-icons/fi";
// import { BsQrCodeScan } from "react-icons/bs";
// import { toast } from "react-toastify";


// import EC from "elliptic";
// import CryptoJS from "crypto-js";
// import bs58check from 'bs58check';


// window.Buffer = Buffer;



// // Initialize elliptic curve secp256k1
// const ec = new EC.ec("secp256k1");




// const BackupMnemonic = () => {
//   const [mnemonic] = useState(() => generateMnemonic());
//   const [isQrVisible, setIsQrVisible] = useState(false);
//   const navigate = useNavigate();

//   const getHashedPassword = () => {
//     const walletName = localStorage.getItem("walletName");
//     return walletName ? localStorage.getItem(walletName) : null;
//   };


//   const hexToPoxAddress = (hexAddress) => {
//     const decodedHex = Buffer.from(hexAddress, 'hex');
//     const base58Address = bs58check.encode(decodedHex);
//     return base58Address;
//   };




//   const generateKeys = (mnemonic) => {
//     const seed = mnemonicToSeedSync(mnemonic);

//     const root = ec.keyFromPrivate(seed.slice(0, 32).toString("hex")); // Generate root key pair

//     const privateKey = root.getPrivate("hex");
//     const publicKey = root.getPublic("hex").slice(2);
//     const keccak256 = CryptoJS.SHA3(CryptoJS.enc.Hex.parse(publicKey), { outputLength: 256 }).toString();
//     const poxAddressHex = "37" + keccak256.slice(-40); // POX address
//     const poxAddressBase58 = hexToPoxAddress(poxAddressHex);



//     return { privateKey, publicKey, poxAddressHex, poxAddressBase58 };
//   };



//   const storeEncryptedKeys = (mnemonic) => {
//     const hashedPassword = getHashedPassword();
//     if (!hashedPassword) {
//       toast.error("Password not found. Please create a wallet first.");
//       return;
//     }
//     const { privateKey, publicKey, poxAddressHex, poxAddressBase58 } = generateKeys(mnemonic);
//     const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
//     const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();
//     const encryptedMnemonic = CryptoJS.AES.encrypt(mnemonic, hashedPassword).toString();

//     console.log({encryptedPrivateKey, encryptedPublicKey, encryptedMnemonic})

//     localStorage.setItem("encryptedMnemonic", encryptedMnemonic);
//     localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
//     localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
//     localStorage.setItem("poxAddress", poxAddressHex);
//     localStorage.setItem("poxAddressBase58", poxAddressBase58); // Store Base58 address

//     toast.success("Keys securely stored!");
//   };



//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(mnemonic);
//       toast.success("Mnemonic copied to clipboard!");
//     } catch {
//       toast.error("Failed to copy mnemonic.");
//     }
//   };

//   const handleBackup = () => {
//     storeEncryptedKeys(mnemonic);
//     navigate("/verify-mnemonic", { state: { mnemonic } });
//   };


 

//   return (
//     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
//       {/* Header */}
//       <div className="flex items-center justify-center py-2 relative">
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute left-0 w-8 h-8"
//           aria-label="Go back"
//         >
//           <img src="/arrow-left.svg" alt="Back" />
//         </button>
//         <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
//       </div>

//       {/* Instruction */}
//       <p className="px-4 text-sm text-center leading-relaxed mt-6">
//         Please write down the following words in the correct order.
//       </p>



//       {/* Mnemonic Section */}
//       <div className="flex flex-col items-center mt-4 w-full bg-[#1e1e1e] bg-opacity-90 p-4 rounded-xl border border-[#252118]">
//         <div className="grid grid-cols-3 gap-2 w-full">
//           {mnemonic.split(" ").map((word, index) => (
//             <div
//               key={index}
//               className="bg-[#29271F]  text-center p-2 rounded-md border border-[#252118] text-sm text-white"
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
//                 value={mnemonic.split(" ").join(" ")} // Ensures proper encoding
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




// import { useState } from "react";
// import { AiOutlineScan } from "react-icons/ai";
// import { IoIosArrowBack } from "react-icons/io";
// import QRCode from "react-qr-code";
// import { useNavigate, useLocation } from "react-router-dom";

// const BackupMnemonic = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const location = useLocation();
//   const { dataObj } = location.state || {};
//   const mnemonicWords = dataObj?.data?.mnemonic.split(" ");
//   console.log({mnemonicWords});

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   const handleVerifyMnemonic = () =>{
//     navigate("/verify-mnemonic",{state:{dataObj}});
//   }

//   return (
//     <div className="relative h-full w-full text-white py-6 px-4 bg-[#1A1A1A]">
//       {/* Header */}
//       <div className="flex flex-row items-center space-x-12 mb-8">
//         <IoIosArrowBack
//           size={25}
//           className="cursor-pointer hover:scale-110 transition-transform"
//           onClick={() => navigate("/create-wallet", { state: { dataObj } })}
//         />
//         <p className="text-white font-bold text-xl">Back Up Mnemonic</p>
//       </div>

//       {/* Instruction */}
//       <p className="text-[#B0B0B0] text-sm mb-4">
//         Please write down the following words in the correct order. Keep them secure and never share them with anyone.
//       </p>

//       {/* Mnemonic Words */}
//       <div className="bg-[#131313F5] border border-white/20 rounded-2xl grid grid-cols-3 gap-4 p-4 mb-6">
//         {mnemonicWords.map((word, index) => (
//           <div
//             key={index}
//             className="bg-[#29271F] text-white py-[10px] px-4 rounded-md text-center font-medium text-sm shadow-lg transform transition-all hover:bg-[#FFBD00] hover:text-[#1A1A1A] hover:scale-105"
//           >
//             {word}
//           </div>
//         ))}
//       </div>

//       {/* Mnemonic QR Code Section */}
//       <div className="bg-[#131313F5] border border-white/20 rounded-2xl 
//       flex flex-row items-center justify-center space-x-2 px-4 py-3 cursor-pointer 
//       transform transition-all hover:scale-105 hover:text-[#29271F]"
//       onClick={toggleModal}>
//         <AiOutlineScan
//           size={25}
//           color="#FFCC00"
//           className="cursor-pointer hover:scale-110 transition-transform"
//         />
//         <p className="text-[#B0B0B0] font-bold text-lg">
//           Mnemonic QR Code
//         </p>
//       </div>


//       {/* Modal */}
//       {isModalOpen && (
//         <div className="absolute w-full inset-0 flex justify-center items-center bg-[#1E1E1E] bg-opacity-80 z-50">
//           <div className="bg-[#1E1E1E] border border-[#FFFFFF1C] rounded-xl p-6 w-full mx-4">
//             <p className="text-white text-lg font-bold text-center mb-4">
//               Mnemonic’s QR Code
//             </p>
//             <div className="flex justify-center mb-4">
//               <div className="w-[150px] h-[150px] bg-[#29271F] rounded-xl flex justify-center items-center">
//                 {/* QR Code Placeholder */}
//                 <QRCode
//     size={256}
//     style={{ height: "auto", maxWidth: "100%", width: "100%" }}
//     value={dataObj?.data?.mnemonic}
//     viewBox={`0 0 256 256`}
//   />
//               </div>
//             </div>
//             <button
//               className="w-full bg-[#FFBC43] rounded-xl py-2 text-lg font-bold text-black hover:bg-[#FFA534] transition-all"
//               onClick={toggleModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="absolute bottom-3 w-full"
//       onClick={handleVerifyMnemonic}>
//         <button
//           className="text-center text-black font-bold text-lg rounded-2xl bg-gradient-to-l from-[#FFBD00] to-[#FFBABA] py-3 cursor-pointer w-[90%] hover:scale-105"
//         >
//           Already Back Up
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
import bs58check from 'bs58check';








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


  const hexToPoxAddress = (hexAddress) => {
    const decodedHex = Buffer.from(hexAddress, 'hex');
    const base58Address = bs58check.encode(decodedHex);
    return base58Address;
  };




  const generateKeys = (mnemonic) => {
    const seed = mnemonicToSeedSync(mnemonic);

    const root = ec.keyFromPrivate(seed.slice(0, 32).toString("hex")); // Generate root key pair

    const privateKey = root.getPrivate("hex");
    const publicKey = root.getPublic("hex").slice(2);
    const keccak256 = CryptoJS.SHA3(CryptoJS.enc.Hex.parse(publicKey), { outputLength: 256 }).toString();
    const poxAddressHex = "37" + keccak256.slice(-40); // POX address
    const poxAddressBase58 = hexToPoxAddress(poxAddressHex);

    // Use a version byte that results in the desired prefix "P"
    // const versionByte = Buffer.from([0x37]); // Example version byte
    // const poxAddressWithVersion = Buffer.concat([versionByte, Buffer.from(poxAddressHex, 'hex')]);
    // const poxAddressBase58 = bs58check.encode(poxAddressWithVersion); // Convert to Base58Check

    return { privateKey, publicKey, poxAddressHex, poxAddressBase58 };
  };


  // const generateKeys = (mnemonic, path = "m/44'/195'/0'/0/0") => {
  //   const seed = mnemonicToSeedSync(mnemonic);

  //   // Create HD wallet from seed (BIP32)
  //   const root = bip32.fromSeed(seed);

  //   // Derive the path
  //   const child = root.derivePath(path);

  //   const privateKey = child.privateKey.toString("hex");
  //   const keyPair = ec.keyFromPrivate(privateKey);
  //   const publicKey = keyPair.getPublic('hex').slice(2);

  //   const keccak256 = CryptoJS.SHA3(CryptoJS.enc.Hex.parse(publicKey), { outputLength: 256 }).toString();
  //   const poxAddressHex = "37" + keccak256.slice(-40); // POX address
  //   const poxAddressBase58 = hexToPoxAddress(poxAddressHex);

  //   return { privateKey, publicKey, poxAddressHex, poxAddressBase58 };
  // };


//   const generateKeys = (mnemonic, path = "m/44'/195'/0'/0/0") => {
//     const seed = mnemonicToSeedSync(mnemonic);
    

//     // Create HD wallet from seed (BIP32)
//     const root = BIP32Factory(secp256k1).fromSeed(seed);

//     // Derive the path
//     const child = root.derivePath(path);

//     const privateKey = child.privateKey.toString("hex");
//     const keyPair = ec.keyFromPrivate(privateKey);
//     const publicKey = keyPair.getPublic('hex').slice(2);

//     const keccak256 = CryptoJS.SHA3(CryptoJS.enc.Hex.parse(publicKey), { outputLength: 256 }).toString();
//     const poxAddressHex = "37" + keccak256.slice(-40); // POX address
//     const poxAddressBase58 = hexToPoxAddress(poxAddressHex);

//     return { privateKey, publicKey, poxAddressHex, poxAddressBase58 };
//   };


  

  const storeEncryptedKeys = (mnemonic) => {
    const hashedPassword = getHashedPassword();
    if (!hashedPassword) {
      toast.error("Password not found. Please create a wallet first.");
      return;
    }
    const { privateKey, publicKey, poxAddressHex, poxAddressBase58 } = generateKeys(mnemonic);
    const encryptedPrivateKey = CryptoJS.AES.encrypt(privateKey, hashedPassword).toString();
    const encryptedPublicKey = CryptoJS.AES.encrypt(publicKey, hashedPassword).toString();
    const encryptedMnemonic = CryptoJS.AES.encrypt(mnemonic, hashedPassword).toString();

    console.log({encryptedPrivateKey, encryptedPublicKey, encryptedMnemonic})

    localStorage.setItem("encryptedMnemonic", encryptedMnemonic);
    localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);
    localStorage.setItem("encryptedPublicKey", encryptedPublicKey);
    localStorage.setItem("poxAddress", poxAddressHex);
    localStorage.setItem("poxAddressBase58", poxAddressBase58); // Store Base58 address

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

//   const handleBackup = () => {
//     const path = "m/44'/195'/0'/0/0"; // Example path, change as needed
//     storeEncryptedKeys(mnemonic, path);
//     navigate("/verify-mnemonic", { state: { mnemonic } });
//   };

 

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
