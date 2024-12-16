
// // // // import React, { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// // // // import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// // // // import { Link } from "react-router-dom";

// // // // const CreateWallet = () => {
// // // //   const [walletName, setWalletName] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// // // //   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
// // // //   const [errors, setErrors] = useState({
// // // //     walletName: "",
// // // //     password: "",
// // // //     confirmPassword: "",
// // // //   });

// // // //   const [criteria, setCriteria] = useState({
// // // //     hasUppercase: false,
// // // //     hasLowercase: false,
// // // //     hasNumber: false,
// // // //     hasMinLength: false,
// // // //   });

// // // //   const navigate = useNavigate();

// // // //   const validatePassword = (password) => {
// // // //     setCriteria({
// // // //       hasUppercase: /[A-Z]/.test(password),
// // // //       hasLowercase: /[a-z]/.test(password),
// // // //       hasNumber: /[0-9]/.test(password),
// // // //       hasMinLength: password.length >= 8,
// // // //     });
// // // //   };

// // // //   const handleCreateWallet = () => {
// // // //     const newErrors = {
// // // //       walletName: "",
// // // //       password: "",
// // // //       confirmPassword: "",
// // // //     };

// // // //     if (!walletName.trim()) {
// // // //       newErrors.walletName = "Enter a valid Name";
// // // //     }
// // // //     if (!password) {
// // // //       newErrors.password = "Enter the password";
// // // //     } else if (
// // // //       !criteria.hasUppercase ||
// // // //       !criteria.hasLowercase ||
// // // //       !criteria.hasNumber ||
// // // //       !criteria.hasMinLength
// // // //     ) {
// // // //       newErrors.password = "Password not meeting criteria";
// // // //     }
// // // //     if (!confirmPassword) {
// // // //       newErrors.confirmPassword = "Re-enter the password";
// // // //     } else if (password !== confirmPassword) {
// // // //       newErrors.confirmPassword = "Password didn't match";
// // // //     }

// // // //     setErrors(newErrors);

// // // //     if (!newErrors.walletName && !newErrors.password && !newErrors.confirmPassword) {
// // // //       return true; // Return true if validation passes
// // // //     }

// // // //     return false; // Return false if validation fails
// // // //   };

// // // //   return (
// // // //     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// // // //       {/* Top Section */}
// // // //       <div className="w-full flex items-center justify-center py-2 relative">
// // // //         <button
// // // //           onClick={() => navigate(-1)}
// // // //           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// // // //         >
// // // //           <img src="/arrow-left.svg" alt="Go Back" />
// // // //         </button>
// // // //         <h1 className="text-lg font-semibold">Create Wallet</h1>
// // // //       </div>

// // // //       {/* Input Section: Wallet Name */}
// // // //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// // // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // // //           <input
// // // //             type="text"
// // // //             value={walletName}
// // // //             onChange={(e) => {
// // // //               setWalletName(e.target.value);
// // // //               setErrors({ ...errors, walletName: "" });
// // // //             }}
// // // //             placeholder="Enter your wallet name"
// // // //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// // // //           />
// // // //           {errors.walletName && (
// // // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.walletName}</p>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* Input Section: Password */}
// // // //       <div className="flex flex-col items-center mt-8 w-full bg-black">
// // // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // // //           <input
// // // //             type={isPasswordVisible ? "text" : "password"}
// // // //             value={password}
// // // //             onChange={(e) => {
// // // //               setPassword(e.target.value);
// // // //               setErrors({ ...errors, password: "" });
// // // //               validatePassword(e.target.value);
// // // //             }}
// // // //             placeholder="Set your password"
// // // //             className="w-full h-full text-white text-sm bg-transparent border-none placeholder-neutral-400 focus:outline-none"
// // // //           />
// // // //           <button
// // // //             type="button"
// // // //             onClick={() => setIsPasswordVisible(!isPasswordVisible)}
// // // //             className="absolute top-4 right-4 text-white text-lg"
// // // //           >
// // // //             {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// // // //           </button>
// // // //           {errors.password && (
// // // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.password}</p>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* Password Criteria */}
// // // //       <div className="grid grid-cols-2 gap-2 px-1 text-sm text-white mt-8">
// // // //         <div className={`flex items-center ${criteria.hasUppercase ? "text-green-400" : ""}`}>
// // // //           {criteria.hasUppercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Uppercase
// // // //         </div>
// // // //         <div className={`flex items-center ${criteria.hasLowercase ? "text-green-400" : ""}`}>
// // // //           {criteria.hasLowercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Lowercase
// // // //         </div>
// // // //         <div className={`flex items-center ${criteria.hasNumber ? "text-green-400" : ""}`}>
// // // //           {criteria.hasNumber ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Number
// // // //         </div>
// // // //         <div className={`flex items-center ${criteria.hasMinLength ? "text-green-400" : ""}`}>
// // // //           {criteria.hasMinLength ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; At least 8 characters
// // // //         </div>
// // // //       </div>

// // // //       {/* Confirm Password */}
// // // //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// // // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // // //           <input
// // // //             type={isConfirmPasswordVisible ? "text" : "password"}
// // // //             value={confirmPassword}
// // // //             onChange={(e) => {
// // // //               setConfirmPassword(e.target.value);
// // // //               setErrors({ ...errors, confirmPassword: "" });
// // // //             }}
// // // //             placeholder="Re-enter your password"
// // // //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// // // //           />
// // // //           <button
// // // //             type="button"
// // // //             onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
// // // //             className="absolute top-4 right-4 text-white text-lg"
// // // //           >
// // // //             {isConfirmPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// // // //           </button>
// // // //           {errors.confirmPassword && (
// // // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.confirmPassword}</p>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* Create Wallet Button */}
// // // //       <div className="flex items-center justify-center mt-[84px] w-full">
// // // //         <Link
// // // //           to="/backupmnemonics"
// // // //           onClick={(e) => {
// // // //             if (!handleCreateWallet()) {
// // // //               e.preventDefault();
// // // //             }
// // // //           }}
// // // //           className="flex items-center justify-center mt-12 py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// // // //           style={{
// // // //             boxShadow:
// // // //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// // // //           }}
// // // //         >
// // // //           Create Wallet
// // // //         </Link>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CreateWallet;




// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// // // import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// // // import { Link } from "react-router-dom";
// // // import CryptoJS from "crypto-js";

// // // const CreateWallet = () => {
// // //   const [walletName, setWalletName] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// // //   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
// // //   const [errors, setErrors] = useState({
// // //     walletName: "",
// // //     password: "",
// // //     confirmPassword: "",
// // //   });

// // //   const [criteria, setCriteria] = useState({
// // //     hasUppercase: false,
// // //     hasLowercase: false,
// // //     hasNumber: false,
// // //     hasMinLength: false,
// // //   });

// // //   const navigate = useNavigate();

// // //   // Function to validate the password
// // //   const validatePassword = (password: string) => {
// // //     setCriteria({
// // //       hasUppercase: /[A-Z]/.test(password),
// // //       hasLowercase: /[a-z]/.test(password),
// // //       hasNumber: /[0-9]/.test(password),
// // //       hasMinLength: password.length >= 8,
// // //     });
// // //   };

// // //   // Check if the session cookie has expired
// // //   const checkSession = () => {
// // //     const sessionCookie = localStorage.getItem("sessionCookie");
// // //     const storedPassword = localStorage.getItem("hashedPassword");

// // //     if (!sessionCookie && storedPassword) {
// // //       postPassword(storedPassword);
// // //     }
// // //   };

// // //   // Post the stored password to reauthenticate
// // //   const postPassword = (hashedPassword: string) => {
// // //     // Mock example of a reauthentication process
// // //     console.log("Reauthenticating with password:", hashedPassword);
// // //     // Add your backend API call here if needed
// // //   };

// // //   // Function to handle wallet creation
// // //   const handleCreateWallet = () => {
// // //     const newErrors = {
// // //       walletName: "",
// // //       password: "",
// // //       confirmPassword: "",
// // //     };

// // //     if (!walletName.trim()) {
// // //       newErrors.walletName = "Enter a valid Name";
// // //     }
// // //     if (!password) {
// // //       newErrors.password = "Enter the password";
// // //     } else if (
// // //       !criteria.hasUppercase ||
// // //       !criteria.hasLowercase ||
// // //       !criteria.hasNumber ||
// // //       !criteria.hasMinLength
// // //     ) {
// // //       newErrors.password = "Password not meeting criteria";
// // //     }
// // //     if (!confirmPassword) {
// // //       newErrors.confirmPassword = "Re-enter the password";
// // //     } else if (password !== confirmPassword) {
// // //       newErrors.confirmPassword = "Password didn't match";
// // //     }

// // //     setErrors(newErrors);

// // //     if (!newErrors.walletName && !newErrors.password && !newErrors.confirmPassword) {
// // //       const hashedPassword = CryptoJS.SHA256(password).toString();
// // //       localStorage.setItem("hashedPassword", hashedPassword);

// // //       // Mock setting session cookie
// // //       localStorage.setItem("sessionCookie", "valid");

// // //       console.log("Wallet created successfully!");
// // //       return true;
// // //     }

// // //     return false;
// // //   };

// // //   // useEffect(() => {
// // //   //   checkSession();
// // //   // }, []);

// // //   return (
// // //     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// // //       {/* Top Section */}
// // //       <div className="w-full flex items-center justify-center py-2 relative">
// // //         <button
// // //           onClick={() => navigate(-1)}
// // //           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// // //         >
// // //           <img src="/arrow-left.svg" alt="Go Back" />
// // //         </button>
// // //         <h1 className="text-lg font-semibold">Create Wallet</h1>
// // //       </div>

// // //       {/* Input Section: Wallet Name */}
// // //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // //           <input
// // //             type="text"
// // //             value={walletName}
// // //             onChange={(e) => {
// // //               setWalletName(e.target.value);
// // //               setErrors({ ...errors, walletName: "" });
// // //             }}
// // //             placeholder="Enter your wallet name"
// // //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// // //           />
// // //           {errors.walletName && (
// // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.walletName}</p>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Input Section: Password */}
// // //       <div className="flex flex-col items-center mt-8 w-full bg-black">
// // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // //           <input
// // //             type={isPasswordVisible ? "text" : "password"}
// // //             value={password}
// // //             onChange={(e) => {
// // //               setPassword(e.target.value);
// // //               setErrors({ ...errors, password: "" });
// // //               validatePassword(e.target.value);
// // //             }}
// // //             placeholder="Set your password"
// // //             className="w-full h-full text-white text-sm bg-transparent border-none placeholder-neutral-400 focus:outline-none"
// // //           />
// // //           <button
// // //             type="button"
// // //             onClick={() => setIsPasswordVisible(!isPasswordVisible)}
// // //             className="absolute top-4 right-4 text-white text-lg"
// // //           >
// // //             {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// // //           </button>
// // //           {errors.password && (
// // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.password}</p>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Password Criteria */}
// // //       <div className="grid grid-cols-2 gap-2 px-1 text-sm text-white mt-8">
// // //         <div className={`flex items-center ${criteria.hasUppercase ? "text-green-400" : ""}`}>
// // //           {criteria.hasUppercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Uppercase
// // //         </div>
// // //         <div className={`flex items-center ${criteria.hasLowercase ? "text-green-400" : ""}`}>
// // //           {criteria.hasLowercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Lowercase
// // //         </div>
// // //         <div className={`flex items-center ${criteria.hasNumber ? "text-green-400" : ""}`}>
// // //           {criteria.hasNumber ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Number
// // //         </div>
// // //         <div className={`flex items-center ${criteria.hasMinLength ? "text-green-400" : ""}`}>
// // //           {criteria.hasMinLength ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; At least 8 characters
// // //         </div>
// // //       </div>

// // //       {/* Confirm Password */}
// // //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // //           <input
// // //             type={isConfirmPasswordVisible ? "text" : "password"}
// // //             value={confirmPassword}
// // //             onChange={(e) => {
// // //               setConfirmPassword(e.target.value);
// // //               setErrors({ ...errors, confirmPassword: "" });
// // //             }}
// // //             placeholder="Re-enter your password"
// // //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// // //           />
// // //           <button
// // //             type="button"
// // //             onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
// // //             className="absolute top-4 right-4 text-white text-lg"
// // //           >
// // //             {isConfirmPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// // //           </button>
// // //           {errors.confirmPassword && (
// // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.confirmPassword}</p>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Create Wallet Button */}
// // //       <div className="flex items-center justify-center mt-[84px] w-full">
// // //         <Link
// // //           to="/backupmnemonics"
// // //           onClick={(e) => {
// // //             if (!handleCreateWallet()) {
// // //               e.preventDefault();
// // //             }
// // //           }}
// // //           className="flex items-center justify-center mt-12 py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// // //           style={{
// // //             boxShadow:
// // //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// // //           }}
// // //         >
// // //           Create Wallet
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CreateWallet;


// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// // import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import CryptoJS from "crypto-js";

// // const CreateWallet = () => {
// //   const [walletName, setWalletName] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// //   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
// //   const [errors, setErrors] = useState({
// //     walletName: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   const [criteria, setCriteria] = useState({
// //     hasUppercase: false,
// //     hasLowercase: false,
// //     hasNumber: false,
// //     hasMinLength: false,
// //   });

// //   const navigate = useNavigate();

// //   // Function to validate the password
// //   const validatePassword = (password) => {
// //     setCriteria({
// //       hasUppercase: /[A-Z]/.test(password),
// //       hasLowercase: /[a-z]/.test(password),
// //       hasNumber: /[0-9]/.test(password),
// //       hasMinLength: password.length >= 8,
// //     });
// //   };

// //   // Function to handle wallet creation
// //   const handleCreateWallet = () => {
// //     const newErrors = {
// //       walletName: "",
// //       password: "",
// //       confirmPassword: "",
// //     };

// //     if (!walletName.trim()) {
// //       newErrors.walletName = "Enter a valid Name";
// //     }
// //     if (!password) {
// //       newErrors.password = "Enter the password";
// //     } else if (
// //       !criteria.hasUppercase ||
// //       !criteria.hasLowercase ||
// //       !criteria.hasNumber ||
// //       !criteria.hasMinLength
// //     ) {
// //       newErrors.password = "Password not meeting criteria";
// //     }
// //     if (!confirmPassword) {
// //       newErrors.confirmPassword = "Re-enter the password";
// //     } else if (password !== confirmPassword) {
// //       newErrors.confirmPassword = "Password didn't match";
// //     }

// //     setErrors(newErrors);

// //     if (!newErrors.walletName && !newErrors.password && !newErrors.confirmPassword) {
// //       const hashedPassword = CryptoJS.SHA256(password).toString();
// //       localStorage.setItem(walletName, hashedPassword);

// //       console.log("Wallet created successfully with name:", walletName);
// //       console.log("Hashed Password saved:", hashedPassword);
// //       return true;
// //     }

// //     return false;
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
// //         <h1 className="text-lg font-semibold">Create Wallet</h1>
// //       </div>

// //       {/* Input Section: Wallet Name */}
// //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// //           <input
// //             type="text"
// //             value={walletName}
// //             onChange={(e) => {
// //               setWalletName(e.target.value);
// //               setErrors({ ...errors, walletName: "" });
// //             }}
// //             placeholder="Enter your wallet name"
// //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// //           />
// //           {errors.walletName && (
// //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.walletName}</p>
// //           )}
// //         </div>
// //       </div>

// //       {/* Input Section: Password */}
// //       <div className="flex flex-col items-center mt-8 w-full bg-black">
// //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// //           <input
// //             type={isPasswordVisible ? "text" : "password"}
// //             value={password}
// //             onChange={(e) => {
// //               setPassword(e.target.value);
// //               setErrors({ ...errors, password: "" });
// //               validatePassword(e.target.value);
// //             }}
// //             placeholder="Set your password"
// //             className="w-full h-full text-white text-sm bg-transparent border-none placeholder-neutral-400 focus:outline-none"
// //           />
// //           <button
// //             type="button"
// //             onClick={() => setIsPasswordVisible(!isPasswordVisible)}
// //             className="absolute top-4 right-4 text-white text-lg"
// //           >
// //             {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// //           </button>
// //           {errors.password && (
// //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.password}</p>
// //           )}
// //         </div>
// //       </div>

// //       {/* Password Criteria */}
// //       <div className="grid grid-cols-2 gap-2 px-1 text-sm text-white mt-8">
// //         <div className={`flex items-center ${criteria.hasUppercase ? "text-green-400" : ""}`}>
// //           {criteria.hasUppercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Uppercase
// //         </div>
// //         <div className={`flex items-center ${criteria.hasLowercase ? "text-green-400" : ""}`}>
// //           {criteria.hasLowercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Lowercase
// //         </div>
// //         <div className={`flex items-center ${criteria.hasNumber ? "text-green-400" : ""}`}>
// //           {criteria.hasNumber ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Number
// //         </div>
// //         <div className={`flex items-center ${criteria.hasMinLength ? "text-green-400" : ""}`}>
// //           {criteria.hasMinLength ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; At least 8 characters
// //         </div>
// //       </div>

// //       {/* Confirm Password */}
// //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// //           <input
// //             type={isConfirmPasswordVisible ? "text" : "password"}
// //             value={confirmPassword}
// //             onChange={(e) => {
// //               setConfirmPassword(e.target.value);
// //               setErrors({ ...errors, confirmPassword: "" });
// //             }}
// //             placeholder="Re-enter your password"
// //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// //           />
// //           <button
// //             type="button"
// //             onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
// //             className="absolute top-4 right-4 text-white text-lg"
// //           >
// //             {isConfirmPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// //           </button>
// //           {errors.confirmPassword && (
// //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.confirmPassword}</p>
// //           )}
// //         </div>
// //       </div>

// //       {/* Create Wallet Button */}
// //       <div className="flex items-center justify-center mt-[84px] w-full">
// //         <Link
// //           to="/backupmnemonics"
// //           onClick={(e) => {
// //             if (!handleCreateWallet()) {
// //               e.preventDefault();
// //             }
// //           }}
// //           className="flex items-center justify-center mt-12 py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// //           style={{
// //             boxShadow:
// //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// //           }}
// //         >
// //           Create Wallet
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateWallet;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import CryptoJS from "crypto-js";

// // Type for errors state
// const CreateWallet = () => {
//   const [walletName, setWalletName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
//   const [errors, setErrors] = useState({
//     walletName: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [criteria, setCriteria] = useState({
//     hasUppercase: false,
//     hasLowercase: false,
//     hasNumber: false,
//     hasMinLength: false,
//   });

//   const navigate = useNavigate();

//   // Function to validate the password
//   const validatePassword = (password) => {
//     setCriteria({
//       hasUppercase: /[A-Z]/.test(password),
//       hasLowercase: /[a-z]/.test(password),
//       hasNumber: /[0-9]/.test(password),
//       hasMinLength: password.length >= 8,
//     });
//   };

//   // Function to handle wallet creation
//   const handleCreateWallet = () => {
//     const newErrors = {
//       walletName: "",
//       password: "",
//       confirmPassword: "",
//     };

//     if (!walletName.trim()) {
//       newErrors.walletName = "Enter a valid Name";
//     }
//     if (!password) {
//       newErrors.password = "Enter the password";
//     } else if (
//       !criteria.hasUppercase ||
//       !criteria.hasLowercase ||
//       !criteria.hasNumber ||
//       !criteria.hasMinLength
//     ) {
//       newErrors.password = "Password not meeting criteria";
//     }
//     if (!confirmPassword) {
//       newErrors.confirmPassword = "Re-enter the password";
//     } else if (password !== confirmPassword) {
//       newErrors.confirmPassword = "Password didn't match";
//     }

//     setErrors(newErrors);

//     if (!newErrors.walletName && !newErrors.password && !newErrors.confirmPassword) {
//       const hashedPassword = CryptoJS.SHA256(password).toString();
//       localStorage.setItem(walletName, hashedPassword);

//       console.log("Wallet created successfully with name:", walletName);
//       console.log("Hashed Password saved:", hashedPassword);
//       return true;
//     }

//     return false;
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
//         <h1 className="text-lg font-semibold">Create Wallet</h1>
//       </div>

//       {/* Input Section: Wallet Name */}
//       <div className="flex flex-col items-center mt-4 w-full bg-black">
//         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
//           <input
//             type="text"
//             value={walletName}
//             onChange={(e) => {
//               setWalletName(e.target.value);
//               setErrors({ ...errors, walletName: "" });
//             }}
//             placeholder="Enter your wallet name"
//             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
//           />
//           {errors.walletName && (
//             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.walletName}</p>
//           )}
//         </div>
//       </div>

//       {/* Input Section: Password */}
//       <div className="flex flex-col items-center mt-8 w-full bg-black">
//         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
//           <input
//             type={isPasswordVisible ? "text" : "password"}
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               setErrors({ ...errors, password: "" });
//               validatePassword(e.target.value);
//             }}
//             placeholder="Set your password"
//             className="w-full h-full text-white text-sm bg-transparent border-none placeholder-neutral-400 focus:outline-none"
//           />
//           <button
//             type="button"
//             onClick={() => setIsPasswordVisible(!isPasswordVisible)}
//             className="absolute top-4 right-4 text-white text-lg"
//           >
//             {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
//           </button>
//           {errors.password && (
//             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.password}</p>
//           )}
//         </div>
//       </div>

//       {/* Password Criteria */}
//       <div className="grid grid-cols-2 gap-2 px-1 text-sm text-white mt-8">
//         <div className={`flex items-center ${criteria.hasUppercase ? "text-green-400" : ""}`}>
//           {criteria.hasUppercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Uppercase
//         </div>
//         <div className={`flex items-center ${criteria.hasLowercase ? "text-green-400" : ""}`}>
//           {criteria.hasLowercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Lowercase
//         </div>
//         <div className={`flex items-center ${criteria.hasNumber ? "text-green-400" : ""}`}>
//           {criteria.hasNumber ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Number
//         </div>
//         <div className={`flex items-center ${criteria.hasMinLength ? "text-green-400" : ""}`}>
//           {criteria.hasMinLength ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; At least 8 characters
//         </div>
//       </div>

//       {/* Confirm Password */}
//       <div className="flex flex-col items-center mt-4 w-full bg-black">
//         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
//           <input
//             type={isConfirmPasswordVisible ? "text" : "password"}
//             value={confirmPassword}
//             onChange={(e) => {
//               setConfirmPassword(e.target.value);
//               setErrors({ ...errors, confirmPassword: "" });
//             }}
//             placeholder="Re-enter your password"
//             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
//           />
//           <button
//             type="button"
//             onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
//             className="absolute top-4 right-4 text-white text-lg"
//           >
//             {isConfirmPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
//           </button>
//           {errors.confirmPassword && (
//             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.confirmPassword}</p>
//           )}
//         </div>
//       </div>

//       {/* Create Wallet Button */}
//       <div className="flex items-center justify-center mt-[84px] w-full">
//         <Link
//           to="/backupmnemonics"
//           onClick={(e) => {
//             if (!handleCreateWallet()) {
//               e.preventDefault();
//             }
//           }}
//           className="flex items-center justify-center mt-12 py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
//           style={{
//             boxShadow:
//               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
//           }}
//         >
//           Create Wallet
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CreateWallet;


// import React, { useState, useEffect } from "react";



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import CryptoJS from "crypto-js";

// Type for errors state
const CreateWallet = () => {
  const [walletName, setWalletName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({
    walletName: "",
    password: "",
    confirmPassword: "",
  });

  const [criteria, setCriteria] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasMinLength: false,
  });

  const navigate = useNavigate();

  // Function to validate the password
  const validatePassword = (password) => {
    setCriteria({
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasMinLength: password.length >= 8,
    });
  };

  // Function to handle wallet creation
  const handleCreateWallet = () => {
    const newErrors = {
      walletName: "",
      password: "",
      confirmPassword: "",
    };

    if (!walletName.trim()) {
      newErrors.walletName = "Enter a valid Name";
    }
    if (!password) {
      newErrors.password = "Enter the password";
    } else if (
      !criteria.hasUppercase ||
      !criteria.hasLowercase ||
      !criteria.hasNumber ||
      !criteria.hasMinLength
    ) {
      newErrors.password = "Password not meeting criteria";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Re-enter the password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Password didn't match";
    }

    setErrors(newErrors);

    // if (!newErrors.walletName && !newErrors.password && !newErrors.confirmPassword) {
    //   const hashedPassword = CryptoJS.SHA256(password).toString();
    //   localStorage.setItem(walletName, hashedPassword);

    //   // After wallet creation is complete
    //   localStorage.setItem("walletCreated", "true");

    //   console.log("Wallet created successfully with name:", walletName);
    //   console.log("Hashed Password saved:", hashedPassword);
    //   return true;
    // }

    if (!newErrors.walletName && !newErrors.password && !newErrors.confirmPassword) {
      const hashedPassword = CryptoJS.SHA256(password).toString();
      localStorage.setItem(walletName, hashedPassword);

      localStorage.setItem("walletCreated", "true");
    
      // Save wallet name for Dashboard
      localStorage.setItem("walletName", walletName);
    
      console.log("Wallet created successfully with name:", walletName);
      console.log("Hashed Password saved:", hashedPassword);
      return true;
    }

    return false;
  };

  return (
    <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
      {/* Top Section */}
      <div className="w-full flex items-center justify-center py-2 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
        >
          <img src="/arrow-left.svg" alt="Go Back" />
        </button>
        <h1 className="text-lg font-semibold">Create Wallet</h1>
      </div>

      {/* Input Section: Wallet Name */}
      <div className="flex flex-col items-center mt-4 w-full bg-black">
        <div className="relative w-full h-16 p-4 border border-[#252118] rounded-xl">
          <input
            type="text"
            value={walletName}
            onChange={(e) => {
              setWalletName(e.target.value);
              setErrors({ ...errors, walletName: "" });
            }}
            placeholder="Enter your wallet name"
            className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
          />
          {errors.walletName && (
            <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.walletName}</p>
          )}
        </div>
      </div>

      {/* Input Section: Password */}
      <div className="flex flex-col items-center mt-8 w-full bg-black">
        <div className="relative w-full h-16 p-4 border border-[#252118] rounded-xl">
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
              validatePassword(e.target.value);
            }}
            placeholder="Set your password"
            className="w-full h-full text-white text-sm bg-transparent border-none placeholder-neutral-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute top-4 right-4 text-white text-lg"
          >
            {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
          {errors.password && (
            <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.password}</p>
          )}
        </div>
      </div>

      {/* Password Criteria */}
      <div className="grid grid-cols-2 gap-2 px-1 text-sm text-white mt-8">
        <div className={`flex items-center ${criteria.hasUppercase ? "text-green-400" : ""}`}>
          {criteria.hasUppercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Uppercase
        </div>
        <div className={`flex items-center ${criteria.hasLowercase ? "text-green-400" : ""}`}>
          {criteria.hasLowercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Lowercase
        </div>
        <div className={`flex items-center ${criteria.hasNumber ? "text-green-400" : ""}`}>
          {criteria.hasNumber ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Number
        </div>
        <div className={`flex items-center ${criteria.hasMinLength ? "text-green-400" : ""}`}>
          {criteria.hasMinLength ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; At least 8 characters
        </div>
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col items-center mt-4 w-full bg-black">
        <div className="relative w-full h-16 p-4 border border-[#252118] rounded-xl">
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors({ ...errors, confirmPassword: "" });
            }}
            placeholder="Re-enter your password"
            className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
            className="absolute top-4 right-4 text-white text-lg"
          >
            {isConfirmPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
          {errors.confirmPassword && (
            <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      {/* Create Wallet Button */}
      <div className="flex items-center justify-center mt-[84px] w-full">
        <Link
          to="/backupmnemonics"
          onClick={(e) => {
            if (!handleCreateWallet()) {
              e.preventDefault();
            } else {
              // After mnemonic backup and verification
              localStorage.setItem("walletVerified", "true");
            }
          }}
          className="flex items-center justify-center mt-12 py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
          style={{
            boxShadow:
              "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
          }}
        >
          Create Wallet
        </Link>
      </div>
    </div>
  );
};

export default CreateWallet;