

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// // // // // // // import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import CryptoJS from "crypto-js";

// // // // // // // const CreateWallet = () => {
// // // // // // //   const [walletName, setWalletName] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// // // // // // //   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
// // // // // // //   const [errors, setErrors] = useState({
// // // // // // //     walletName: "",
// // // // // // //     password: "",
// // // // // // //     confirmPassword: "",
// // // // // // //   });

// // // // // // //   const [criteria, setCriteria] = useState({
// // // // // // //     hasUppercase: false,
// // // // // // //     hasLowercase: false,
// // // // // // //     hasNumber: false,
// // // // // // //     hasMinLength: false,
// // // // // // //   });

// // // // // // //   const navigate = useNavigate();

// // // // // // //   // Function to validate the password
// // // // // // //   const validatePassword = (password) => {
// // // // // // //     setCriteria({
// // // // // // //       hasUppercase: /[A-Z]/.test(password),
// // // // // // //       hasLowercase: /[a-z]/.test(password),
// // // // // // //       hasNumber: /[0-9]/.test(password),
// // // // // // //       hasMinLength: password.length >= 8,
// // // // // // //     });
// // // // // // //   };

// // // // // // //   // Function to handle wallet creation
// // // // // // //   const handleCreateWallet = () => {
// // // // // // //     const newErrors = {
// // // // // // //       walletName: "",
// // // // // // //       password: "",
// // // // // // //       confirmPassword: "",
// // // // // // //     };

// // // // // // //     if (!walletName.trim()) {
// // // // // // //       newErrors.walletName = "Enter a valid Name";
// // // // // // //     }
// // // // // // //     if (!password) {
// // // // // // //       newErrors.password = "Enter the password";
// // // // // // //     } else if (
// // // // // // //       !criteria.hasUppercase ||
// // // // // // //       !criteria.hasLowercase ||
// // // // // // //       !criteria.hasNumber ||
// // // // // // //       !criteria.hasMinLength
// // // // // // //     ) {
// // // // // // //       newErrors.password = "Password not meeting criteria";
// // // // // // //     }
// // // // // // //     if (!confirmPassword) {
// // // // // // //       newErrors.confirmPassword = "Re-enter the password";
// // // // // // //     } else if (password !== confirmPassword) {
// // // // // // //       newErrors.confirmPassword = "Password didn't match";
// // // // // // //     }

// // // // // // //     setErrors(newErrors);

// // // // // // //     if (!newErrors.walletName && !newErrors.password && !newErrors.confirmPassword) {
// // // // // // //       const hashedPassword = CryptoJS.SHA256(password).toString();
// // // // // // //       localStorage.setItem(walletName, hashedPassword);

// // // // // // //       console.log("Wallet created successfully with name:", walletName);
// // // // // // //       console.log("Hashed Password saved:", hashedPassword);
// // // // // // //       return true;
// // // // // // //     }

// // // // // // //     return false;
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// // // // // // //       {/* Top Section */}
// // // // // // //       <div className="w-full flex items-center justify-center py-2 relative">
// // // // // // //         <button
// // // // // // //           onClick={() => navigate(-1)}
// // // // // // //           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// // // // // // //         >
// // // // // // //           <img src="/arrow-left.svg" alt="Go Back" />
// // // // // // //         </button>
// // // // // // //         <h1 className="text-lg font-semibold">Create Wallet</h1>
// // // // // // //       </div>

// // // // // // //       {/* Input Section: Wallet Name */}
// // // // // // //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// // // // // // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             value={walletName}
// // // // // // //             onChange={(e) => {
// // // // // // //               setWalletName(e.target.value);
// // // // // // //               setErrors({ ...errors, walletName: "" });
// // // // // // //             }}
// // // // // // //             placeholder="Enter your wallet name"
// // // // // // //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// // // // // // //           />
// // // // // // //           {errors.walletName && (
// // // // // // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.walletName}</p>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Input Section: Password */}
// // // // // // //       <div className="flex flex-col items-center mt-8 w-full bg-black">
// // // // // // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // // // // // //           <input
// // // // // // //             type={isPasswordVisible ? "text" : "password"}
// // // // // // //             value={password}
// // // // // // //             onChange={(e) => {
// // // // // // //               setPassword(e.target.value);
// // // // // // //               setErrors({ ...errors, password: "" });
// // // // // // //               validatePassword(e.target.value);
// // // // // // //             }}
// // // // // // //             placeholder="Set your password"
// // // // // // //             className="w-full h-full text-white text-sm bg-transparent border-none placeholder-neutral-400 focus:outline-none"
// // // // // // //           />
// // // // // // //           <button
// // // // // // //             type="button"
// // // // // // //             onClick={() => setIsPasswordVisible(!isPasswordVisible)}
// // // // // // //             className="absolute top-4 right-4 text-white text-lg"
// // // // // // //           >
// // // // // // //             {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// // // // // // //           </button>
// // // // // // //           {errors.password && (
// // // // // // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.password}</p>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Password Criteria */}
// // // // // // //       <div className="grid grid-cols-2 gap-2 px-1 text-sm text-white mt-8">
// // // // // // //         <div className={`flex items-center ${criteria.hasUppercase ? "text-green-400" : ""}`}>
// // // // // // //           {criteria.hasUppercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Uppercase
// // // // // // //         </div>
// // // // // // //         <div className={`flex items-center ${criteria.hasLowercase ? "text-green-400" : ""}`}>
// // // // // // //           {criteria.hasLowercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Lowercase
// // // // // // //         </div>
// // // // // // //         <div className={`flex items-center ${criteria.hasNumber ? "text-green-400" : ""}`}>
// // // // // // //           {criteria.hasNumber ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Number
// // // // // // //         </div>
// // // // // // //         <div className={`flex items-center ${criteria.hasMinLength ? "text-green-400" : ""}`}>
// // // // // // //           {criteria.hasMinLength ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; At least 8 characters
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Confirm Password */}
// // // // // // //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// // // // // // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // // // // // //           <input
// // // // // // //             type={isConfirmPasswordVisible ? "text" : "password"}
// // // // // // //             value={confirmPassword}
// // // // // // //             onChange={(e) => {
// // // // // // //               setConfirmPassword(e.target.value);
// // // // // // //               setErrors({ ...errors, confirmPassword: "" });
// // // // // // //             }}
// // // // // // //             placeholder="Re-enter your password"
// // // // // // //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// // // // // // //           />
// // // // // // //           <button
// // // // // // //             type="button"
// // // // // // //             onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
// // // // // // //             className="absolute top-4 right-4 text-white text-lg"
// // // // // // //           >
// // // // // // //             {isConfirmPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// // // // // // //           </button>
// // // // // // //           {errors.confirmPassword && (
// // // // // // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.confirmPassword}</p>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Create Wallet Button */}
// // // // // // //       <div className="flex items-center justify-center mt-[84px] w-full">
// // // // // // //         <Link
// // // // // // //           to="/backupmnemonics"
// // // // // // //           onClick={(e) => {
// // // // // // //             if (!handleCreateWallet()) {
// // // // // // //               e.preventDefault();
// // // // // // //             }
// // // // // // //           }}
// // // // // // //           className="flex items-center justify-center mt-12 py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// // // // // // //           style={{
// // // // // // //             boxShadow:
// // // // // // //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Create Wallet
// // // // // // //         </Link>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CreateWallet;



// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// // // // // // import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import CryptoJS from "crypto-js";

// // // // // // // Type for errors state
// // // // // // const CreateWallet = () => {
// // // // // //   const [walletName, setWalletName] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// // // // // //   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
// // // // // //   const [errors, setErrors] = useState({
// // // // // //     walletName: "",
// // // // // //     password: "",
// // // // // //     confirmPassword: "",
// // // // // //   });

// // // // // //   const [criteria, setCriteria] = useState({
// // // // // //     hasUppercase: false,
// // // // // //     hasLowercase: false,
// // // // // //     hasNumber: false,
// // // // // //     hasMinLength: false,
// // // // // //   });

// // // // // //   const navigate = useNavigate();

// // // // // //   // Function to validate the password
// // // // // //   const validatePassword = (password) => {
// // // // // //     setCriteria({
// // // // // //       hasUppercase: /[A-Z]/.test(password),
// // // // // //       hasLowercase: /[a-z]/.test(password),
// // // // // //       hasNumber: /[0-9]/.test(password),
// // // // // //       hasMinLength: password.length >= 8,
// // // // // //     });
// // // // // //   };

// // // // // //   // Function to handle wallet creation
// // // // // //   const handleCreateWallet = () => {
// // // // // //     const newErrors = {
// // // // // //       walletName: "",
// // // // // //       password: "",
// // // // // //       confirmPassword: "",
// // // // // //     };

// // // // // //     if (!walletName.trim()) {
// // // // // //       newErrors.walletName = "Enter a valid Name";
// // // // // //     }
// // // // // //     if (!password) {
// // // // // //       newErrors.password = "Enter the password";
// // // // // //     } else if (
// // // // // //       !criteria.hasUppercase ||
// // // // // //       !criteria.hasLowercase ||
// // // // // //       !criteria.hasNumber ||
// // // // // //       !criteria.hasMinLength
// // // // // //     ) {
// // // // // //       newErrors.password = "Password not meeting criteria";
// // // // // //     }
// // // // // //     if (!confirmPassword) {
// // // // // //       newErrors.confirmPassword = "Re-enter the password";
// // // // // //     } else if (password !== confirmPassword) {
// // // // // //       newErrors.confirmPassword = "Password didn't match";
// // // // // //     }

// // // // // //     setErrors(newErrors);

// // // // // //     if (!newErrors.walletName && !newErrors.password && !newErrors.confirmPassword) {
// // // // // //       const hashedPassword = CryptoJS.SHA256(password).toString();
// // // // // //       localStorage.setItem(walletName, hashedPassword);

// // // // // //       console.log("Wallet created successfully with name:", walletName);
// // // // // //       console.log("Hashed Password saved:", hashedPassword);
// // // // // //       return true;
// // // // // //     }

// // // // // //     return false;
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
// // // // // //       {/* Top Section */}
// // // // // //       <div className="w-full flex items-center justify-center py-2 relative">
// // // // // //         <button
// // // // // //           onClick={() => navigate(-1)}
// // // // // //           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
// // // // // //         >
// // // // // //           <img src="/arrow-left.svg" alt="Go Back" />
// // // // // //         </button>
// // // // // //         <h1 className="text-lg font-semibold">Create Wallet</h1>
// // // // // //       </div>

// // // // // //       {/* Input Section: Wallet Name */}
// // // // // //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// // // // // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             value={walletName}
// // // // // //             onChange={(e) => {
// // // // // //               setWalletName(e.target.value);
// // // // // //               setErrors({ ...errors, walletName: "" });
// // // // // //             }}
// // // // // //             placeholder="Enter your wallet name"
// // // // // //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// // // // // //           />
// // // // // //           {errors.walletName && (
// // // // // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.walletName}</p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Input Section: Password */}
// // // // // //       <div className="flex flex-col items-center mt-8 w-full bg-black">
// // // // // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // // // // //           <input
// // // // // //             type={isPasswordVisible ? "text" : "password"}
// // // // // //             value={password}
// // // // // //             onChange={(e) => {
// // // // // //               setPassword(e.target.value);
// // // // // //               setErrors({ ...errors, password: "" });
// // // // // //               validatePassword(e.target.value);
// // // // // //             }}
// // // // // //             placeholder="Set your password"
// // // // // //             className="w-full h-full text-white text-sm bg-transparent border-none placeholder-neutral-400 focus:outline-none"
// // // // // //           />
// // // // // //           <button
// // // // // //             type="button"
// // // // // //             onClick={() => setIsPasswordVisible(!isPasswordVisible)}
// // // // // //             className="absolute top-4 right-4 text-white text-lg"
// // // // // //           >
// // // // // //             {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// // // // // //           </button>
// // // // // //           {errors.password && (
// // // // // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.password}</p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Password Criteria */}
// // // // // //       <div className="grid grid-cols-2 gap-2 px-1 text-sm text-white mt-8">
// // // // // //         <div className={`flex items-center ${criteria.hasUppercase ? "text-green-400" : ""}`}>
// // // // // //           {criteria.hasUppercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Uppercase
// // // // // //         </div>
// // // // // //         <div className={`flex items-center ${criteria.hasLowercase ? "text-green-400" : ""}`}>
// // // // // //           {criteria.hasLowercase ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Lowercase
// // // // // //         </div>
// // // // // //         <div className={`flex items-center ${criteria.hasNumber ? "text-green-400" : ""}`}>
// // // // // //           {criteria.hasNumber ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; Number
// // // // // //         </div>
// // // // // //         <div className={`flex items-center ${criteria.hasMinLength ? "text-green-400" : ""}`}>
// // // // // //           {criteria.hasMinLength ? <FaCheckCircle /> : <FaTimesCircle />} &nbsp; At least 8 characters
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Confirm Password */}
// // // // // //       <div className="flex flex-col items-center mt-4 w-full bg-black">
// // // // // //         <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
// // // // // //           <input
// // // // // //             type={isConfirmPasswordVisible ? "text" : "password"}
// // // // // //             value={confirmPassword}
// // // // // //             onChange={(e) => {
// // // // // //               setConfirmPassword(e.target.value);
// // // // // //               setErrors({ ...errors, confirmPassword: "" });
// // // // // //             }}
// // // // // //             placeholder="Re-enter your password"
// // // // // //             className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
// // // // // //           />
// // // // // //           <button
// // // // // //             type="button"
// // // // // //             onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
// // // // // //             className="absolute top-4 right-4 text-white text-lg"
// // // // // //           >
// // // // // //             {isConfirmPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
// // // // // //           </button>
// // // // // //           {errors.confirmPassword && (
// // // // // //             <p className="absolute text-red-500 text-xs mt-1 top-full left-2">{errors.confirmPassword}</p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Create Wallet Button */}
// // // // // //       <div className="flex items-center justify-center mt-[84px] w-full">
// // // // // //         <Link
// // // // // //           to="/backupmnemonics"
// // // // // //           onClick={(e) => {
// // // // // //             if (!handleCreateWallet()) {
// // // // // //               e.preventDefault();
// // // // // //             }
// // // // // //           }}
// // // // // //           className="flex items-center justify-center mt-12 py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
// // // // // //           style={{
// // // // // //             boxShadow:
// // // // // //               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
// // // // // //           }}
// // // // // //         >
// // // // // //           Create Wallet
// // // // // //         </Link>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CreateWallet;


// // // // // // import React, { useState, useEffect } from "react";







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
            } 
            // else {
             
            //   localStorage.setItem("walletVerified", "true");
            // }
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








// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { IoIosArrowBack } from "react-icons/io";
// import { toast } from "react-toastify";

// // Define or import the generateKeys function
// const generateKeys = () => {
//   // Your implementation of generateKeys
//   return {
//     // Example data
//     privateKey: "examplePrivateKey",
//     publicKey: "examplePublicKey",
//     poxAddressHex: "examplePoxAddressHex",
//     poxAddressBase58: "examplePoxAddressBase58",
//   };
// };

// const CreateWallet = () => {
//   const [walletName, setWalletName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log({ location });
//   const { dataObj } = location.state || {};

//   // Password validation criteria
//   const hasUppercase = /[A-Z]/.test(password);
//   const hasLowercase = /[a-z]/.test(password);
//   const hasNumber = /\d/.test(password);
//   const hasMinLength = password.length >= 8;

//   const allValid = hasUppercase && hasLowercase && hasNumber && hasMinLength;
//   const passwordsMatch = password === confirmPassword;

//   // Calculate password strength progress
//   const passwordStrength = [
//     hasUppercase,
//     hasLowercase,
//     hasNumber,
//     hasMinLength,
//   ].filter(Boolean).length;

//   // Toggle password visibility
//   const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);
//   const toggleConfirmPasswordVisibility = () =>
//     setIsConfirmPasswordVisible((prev) => !prev);

//   // Generate wallet keys
//   const data = dataObj?.data || generateKeys();
//   console.log({ data });
//   const newDataObj = {
//     WalletName: walletName, // Corrected from 'name' to 'walletName'
//     password: password,
//     data: data,
//   };

//   // Handle wallet creation
//   const handleCreateWallet = () => {
//     try {
//       if (!walletName.trim() || !password || !confirmPassword) {
//         toast.error("All fields are required!");
//         return;
//       }
//       if (!passwordsMatch) {
//         toast.error("Passwords do not match!");
//         return;
//       }

//       if (!allValid) {
//         toast.error("Password does not meet the criteria!");
//         return;
//       }

//       const walletData = {
//         walletName,
//         password,
//       };

//       navigate("/backup-mnemonic", { state: { dataObj: newDataObj } });
//     } catch (error) {
//       // Log and display error
//       console.error("Error creating wallet:", error);
//       toast.error("Please try again.");
//     }
//   };

//   return (
//     <div className="relative h-full w-full text-white py-6 px-4">
//       {/* Header */}
//       <div className="flex items-center space-x-20 mb-8">
//         <IoIosArrowBack
//           size={25}
//           className="cursor-pointer hover:scale-110 transition-transform"
//           onClick={() => navigate(-1)}
//         />
//         <p className="text-xl font-bold">Create Wallet</p>
//       </div>

//       {/* Wallet Name */}
//       <div className="mb-6">
//         <input
//           type="text"
//           className="border border-[#252118] rounded-xl w-full py-3 px-4 placeholder:text-[#B0B0B0] bg-transparent outline-none focus:border-[#FFBD00] transition-all"
//           placeholder="Enter Wallet Name"
//           value={walletName}
//           onChange={(e) => setWalletName(e.target.value)}
//         />
//       </div>

//       {/* Password */}
//       <div className="mb-6">
//         <div className="relative">
//           <input
//             type={isPasswordVisible ? "text" : "password"}
//             className="border border-[#252118] rounded-xl w-full py-3 px-4 placeholder:text-[#B0B0B0] bg-transparent outline-none pr-12 focus:border-[#FFBD00] transition-all"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {isPasswordVisible ? (
//             <FiEyeOff
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:text-[#FFBD00]"
//               onClick={togglePasswordVisibility}
//             />
//           ) : (
//             <FiEye
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:text-[#FFBD00]"
//               onClick={togglePasswordVisibility}
//             />
//           )}
//         </div>
//         <p className="text-sm text-[#B0B0B0] mt-2">
//           POX does not store your password. Please keep it safe.
//         </p>
//       </div>

//       {/* Password Strength */}
//       <div className="mb-6">
//         <div className="bg-[#252118] h-2 w-full rounded-full">
//           <div
//             className={`h-full rounded-full ${
//               passwordStrength === 1
//                 ? "bg-red-500"
//                 : passwordStrength === 2
//                 ? "bg-yellow-500"
//                 : passwordStrength === 3
//                 ? "bg-blue-500"
//                 : "bg-green-500"
//             }`}
//             style={{ width: `${(passwordStrength / 4) * 100}%` }}
//           ></div>
//         </div>
//         <p className="text-sm mt-2 text-[#B0B0B0]">Password Strength</p>
//       </div>

//       {/* Password Criteria */}
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <p
//           className={`text-sm flex items-center ${
//             hasUppercase ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; Uppercase
//         </p>
//         <p
//           className={`text-sm flex items-center ${
//             hasLowercase ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; Lowercase
//         </p>
//         <p
//           className={`text-sm flex items-center ${
//             hasNumber ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; Number
//         </p>
//         <p
//           className={`text-sm flex items-center ${
//             hasMinLength ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; At least 8 characters
//         </p>
//       </div>

//       {/* Confirm Password */}
//       <div className="mb-12">
//         <div className="relative">
//           <input
//             type={isConfirmPasswordVisible ? "text" : "password"}
//             className="border border-[#252118] rounded-xl w-full py-3 px-4 placeholder:text-[#B0B0B0] bg-transparent outline-none pr-12 focus:border-[#FFBD00] transition-all"
//             placeholder="Re-enter Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           {isConfirmPasswordVisible ? (
//             <FiEyeOff
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:text-[#FFBD00]"
//               onClick={toggleConfirmPasswordVisibility}
//             />
//           ) : (
//             <FiEye
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:text-[#FFBD00]"
//               onClick={toggleConfirmPasswordVisibility}
//             />
//           )}
//         </div>
//         {!passwordsMatch && confirmPassword.length > 0 && (
//           <p className="text-sm mt-2 text-red-500">Passwords do not match</p>
//         )}
//       </div>

//       {/* Create Wallet Button */}
//       <button
//         className={`text-center text-black font-bold text-lg rounded-2xl bg-gradient-to-l from-[#FFBD00] to-[#FFBABA] py-3 cursor-pointer w-full hover:scale-105 transition-transform ${
//           !allValid || !passwordsMatch ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         disabled={!allValid || !passwordsMatch}
//         onClick={handleCreateWallet}
//       >
//         Create Wallet
//       </button>
//     </div>
//   );
// };

// export default CreateWallet;





// import { useEffect, useState } from "react";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { IoIosArrowBack } from "react-icons/io";
// import { useLocation, useNavigate } from "react-router-dom";
// import { generateKeys } from "../../utils/keyHelpers";
// import { toast } from "react-toastify";

// const CreateWallet = () => {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
//   const [password, setPassword] = useState("");
//   const [rePassword, setRePassword] = useState("");
//   const [name, setName] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log({location});
//   const { dataObj } = location.state || {};

//   console.log({dataObj});
//   useEffect(()=>{
//     if(dataObj){
//       setName(dataObj?.WalletName);
//       setPassword(dataObj?.password);
//       setRePassword(dataObj?.password);
//     }
//   },[])

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible((prev) => !prev);
//   };

//   const toggleRePasswordVisibility = () => {
//     setIsRePasswordVisible((prev) => !prev);
//   };

//   // Password validation criteria
//   const hasUppercase = /[A-Z]/.test(password);
//   const hasLowercase = /[a-z]/.test(password);
//   const hasNumber = /\d/.test(password);
//   const hasMinLength = password.length >= 8;

//   const allValid = hasUppercase && hasLowercase && hasNumber && hasMinLength;
//   const passwordsMatch = password === rePassword;

//   // Calculate password strength progress
//   const passwordStrength = [
//     hasUppercase,
//     hasLowercase,
//     hasNumber,
//     hasMinLength,
//   ].filter(Boolean).length;

//   const handleCreateWallet = async () => {
//     try {
//       // Check if all input fields are filled
//       if (!name || !password || !rePassword) {
//         toast.error("Please fill all the input fields.");
//         return;
//       }
  
//       // Check if passwords match
//       if (password !== rePassword) {
//         toast.error("Passwords do not match.");
//         return;
//       }
  
//       // Generate wallet keys
//       const data = dataObj?.data || generateKeys();
//       console.log({data});
//       const newDataObj  = {
//         WalletName:name,
//         password:password,
//         data:data,
//       }
  
//       // Navigate to the backup mnemonic page with wallet data
//       navigate("/backupmnemonic", { state: { dataObj: newDataObj  } });
//     } catch (error) {
//       // Log and display error
//       console.error("Error creating wallet:", error);
//       toast.error("Please try again.");
//     }
//   };
  

//   return (
//     <div className="relative h-full w-full text-white py-6 px-4">
//       {/* Header */}
//       <div className="flex flex-row items-center space-x-20 mb-8">
//         <IoIosArrowBack
//           size={25}
//           className="cursor-pointer hover:scale-110 transition-transform"
//           onClick={() => navigate(-1)}
//         />
//         <p className="text-white font-bold text-xl text-left">Create Wallet</p>
//       </div>

//       {/* Wallet Name */}
//       <div className="mb-6">
//         <input
//           type="text"
//           className="border border-[#252118] rounded-xl w-full py-3 px-4 placeholder:text-[#B0B0B0] bg-transparent outline-none text-white focus:border-[#FFBD00] transition-all"
//           placeholder="Enter Wallet Name"
//           value={name}
//           onChange={(e)=>setName(e.target.value)}
//         />
//       </div>

//       {/* Password */}
//       <div className="mb-6">
//         <div className="relative">
//           <input
//             type={isPasswordVisible ? "text" : "password"}
//             className="border border-[#252118] rounded-xl w-full py-3 px-4 placeholder:text-[#B0B0B0] bg-transparent outline-none text-white pr-12 focus:border-[#FFBD00] transition-all"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {isPasswordVisible ? (
//             <FiEyeOff
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#B0B0B0] cursor-pointer hover:text-[#FFBD00]"
//               onClick={togglePasswordVisibility}
//             />
//           ) : (
//             <FiEye
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#B0B0B0] cursor-pointer hover:text-[#FFBD00]"
//               onClick={togglePasswordVisibility}
//             />
//           )}
//         </div>
//         <p className="text-[#B0B0B0] mt-2 text-sm">
//           Please note that POX does not store the password and cannot retrieve
//           it for you.
//         </p>
//       </div>

//       {/* Password Strength Bar */}
//       <div className="mb-6">
//         <div className="bg-[#252118] h-2 w-full rounded-full">
//           <div
//             className={`h-full rounded-full ${
//               passwordStrength === 1
//                 ? "bg-red-500"
//                 : passwordStrength === 2
//                 ? "bg-yellow-500"
//                 : passwordStrength === 3
//                 ? "bg-blue-500"
//                 : "bg-green-500"
//             }`}
//             style={{ width: `${(passwordStrength / 4) * 100}%` }}
//           ></div>
//         </div>
//         <p className="text-sm mt-2 text-[#B0B0B0]">Password Strength</p>
//       </div>

//       {/* Password Criteria */}
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <p
//           className={`text-sm flex items-center ${
//             hasUppercase ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; Uppercase
//         </p>
//         <p
//           className={`text-sm flex items-center ${
//             hasLowercase ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; Lowercase
//         </p>
//         <p
//           className={`text-sm flex items-center ${
//             hasNumber ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; Number
//         </p>
//         <p
//           className={`text-sm flex items-center ${
//             hasMinLength ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; At least 8 characters
//         </p>
//       </div>

//       {/* Re-enter Password */}
//       <div className="mb-12">
//         <div className="relative">
//           <input
//             type={isRePasswordVisible ? "text" : "password"}
//             className="border border-[#252118] rounded-xl w-full py-3 px-4 placeholder:text-[#B0B0B0] bg-transparent outline-none text-white pr-12 focus:border-[#FFBD00] transition-all"
//             placeholder="Re-enter Password"
//             value={rePassword}
//             onChange={(e) => setRePassword(e.target.value)}
//           />
//           {isRePasswordVisible ? (
//             <FiEyeOff
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#B0B0B0] cursor-pointer hover:text-[#FFBD00]"
//               onClick={toggleRePasswordVisibility}
//             />
//           ) : (
//             <FiEye
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#B0B0B0] cursor-pointer hover:text-[#FFBD00]"
//               onClick={toggleRePasswordVisibility}
//             />
//           )}
//         </div>
//         {!passwordsMatch && rePassword.length > 0 && (
//           <p className="text-sm mt-2 text-red-500">Passwords do not match</p>
//         )}
//       </div>

//       {/* Create Wallet Button */}
//       <div className="absolute bottom-10 w-full">
//         <button
//           className={`text-center text-black font-bold text-lg rounded-2xl bg-gradient-to-l from-[#FFBD00] to-[#FFBABA] py-3 cursor-pointer w-[90%] block hover:scale-105 transition-transform ${
//             !allValid || !passwordsMatch ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={!allValid || !passwordsMatch}
//           onClick={handleCreateWallet}
//         >
//           Create Wallet
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateWallet;


// import { useEffect, useState } from "react";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { IoIosArrowBack } from "react-icons/io";
// import { useLocation, useNavigate } from "react-router-dom";
// import { generateKeys } from "../../utils/keyHelpers";
// import { toast } from "react-toastify";

// const CreateWallet = () => {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
//   const [password, setPassword] = useState("");
//   const [rePassword, setRePassword] = useState("");
//   const [name, setName] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log({location});
//   const { dataObj } = location.state || {};

//   console.log({dataObj});
//   useEffect(()=>{
//     if(dataObj){
//       setName(dataObj?.WalletName);
//       setPassword(dataObj?.password);
//       setRePassword(dataObj?.password);
//     }
//   },[])

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible((prev) => !prev);
//   };

//   const toggleRePasswordVisibility = () => {
//     setIsRePasswordVisible((prev) => !prev);
//   };

//   // Password validation criteria
//   const hasUppercase = /[A-Z]/.test(password);
//   const hasLowercase = /[a-z]/.test(password);
//   const hasNumber = /\d/.test(password);
//   const hasMinLength = password.length >= 8;

//   const allValid = hasUppercase && hasLowercase && hasNumber && hasMinLength;
//   const passwordsMatch = password === rePassword;

//   // Calculate password strength progress
//   const passwordStrength = [
//     hasUppercase,
//     hasLowercase,
//     hasNumber,
//     hasMinLength,
//   ].filter(Boolean).length;

//   const handleCreateWallet = async () => {
//     try {
//       // Check if all input fields are filled
//       if (!name || !password || !rePassword) {
//         toast.error("Please fill all the input fields.");
//         return;
//       }
  
//       // Check if passwords match
//       if (password !== rePassword) {
//         toast.error("Passwords do not match.");
//         return;
//       }
  
//       // Generate wallet keys
//       const data = dataObj?.data || generateKeys();
//       console.log({data});
//       const newDataObj  = {
//         WalletName:name,
//         password:password,
//         data:data,
//       }
  
//       // Navigate to the backup mnemonic page with wallet data
//       navigate("/backupmnemonics", { state: { dataObj: newDataObj  } });
//     } catch (error) {
//       // Log and display error
//       console.error("Error creating wallet:", error);
//       toast.error("Please try again.");
//     }
//   };
  

//   return (
//     <div className="relative h-full w-full text-white py-6 px-4">
//       {/* Header */}
//       <div className="flex flex-row items-center space-x-20 mb-8">
//         <IoIosArrowBack
//           size={25}
//           className="cursor-pointer hover:scale-110 transition-transform"
//           onClick={() => navigate(-1)}
//         />
//         <p className="text-white font-bold text-xl text-left">Create Wallet</p>
//       </div>

//       {/* Wallet Name */}
//       <div className="mb-6">
//         <input
//           type="text"
//           className="border border-[#252118] rounded-xl w-full py-3 px-4 placeholder:text-[#B0B0B0] bg-transparent outline-none text-white focus:border-[#FFBD00] transition-all"
//           placeholder="Enter Wallet Name"
//           value={name}
//           onChange={(e)=>setName(e.target.value)}
//         />
//       </div>

//       {/* Password */}
//       <div className="mb-6">
//         <div className="relative">
//           <input
//             type={isPasswordVisible ? "text" : "password"}
//             className="border border-[#252118] rounded-xl w-full py-3 px-4 placeholder:text-[#B0B0B0] bg-transparent outline-none text-white pr-12 focus:border-[#FFBD00] transition-all"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {isPasswordVisible ? (
//             <FiEyeOff
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#B0B0B0] cursor-pointer hover:text-[#FFBD00]"
//               onClick={togglePasswordVisibility}
//             />
//           ) : (
//             <FiEye
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#B0B0B0] cursor-pointer hover:text-[#FFBD00]"
//               onClick={togglePasswordVisibility}
//             />
//           )}
//         </div>
//         <p className="text-[#B0B0B0] mt-2 text-sm">
//           Please note that POX does not store the password and cannot retrieve
//           it for you.
//         </p>
//       </div>

//       {/* Password Strength Bar */}
//       <div className="mb-6">
//         <div className="bg-[#252118] h-2 w-full rounded-full">
//           <div
//             className={`h-full rounded-full ${
//               passwordStrength === 1
//                 ? "bg-red-500"
//                 : passwordStrength === 2
//                 ? "bg-yellow-500"
//                 : passwordStrength === 3
//                 ? "bg-blue-500"
//                 : "bg-green-500"
//             }`}
//             style={{ width: `${(passwordStrength / 4) * 100}%` }}
//           ></div>
//         </div>
//         <p className="text-sm mt-2 text-[#B0B0B0]">Password Strength</p>
//       </div>

//       {/* Password Criteria */}
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <p
//           className={`text-sm flex items-center ${
//             hasUppercase ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; Uppercase
//         </p>
//         <p
//           className={`text-sm flex items-center ${
//             hasLowercase ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; Lowercase
//         </p>
//         <p
//           className={`text-sm flex items-center ${
//             hasNumber ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; Number
//         </p>
//         <p
//           className={`text-sm flex items-center ${
//             hasMinLength ? "text-[#95FE65B2]" : "text-[#B0B0B0]"
//           }`}
//         >
//           &#10003; At least 8 characters
//         </p>
//       </div>

//       {/* Re-enter Password */}
//       <div className="mb-12">
//         <div className="relative">
//           <input
//             type={isRePasswordVisible ? "text" : "password"}
//             className="border border-[#252118] rounded-xl w-full py-3 px-4 placeholder:text-[#B0B0B0] bg-transparent outline-none text-white pr-12 focus:border-[#FFBD00] transition-all"
//             placeholder="Re-enter Password"
//             value={rePassword}
//             onChange={(e) => setRePassword(e.target.value)}
//           />
//           {isRePasswordVisible ? (
//             <FiEyeOff
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#B0B0B0] cursor-pointer hover:text-[#FFBD00]"
//               onClick={toggleRePasswordVisibility}
//             />
//           ) : (
//             <FiEye
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#B0B0B0] cursor-pointer hover:text-[#FFBD00]"
//               onClick={toggleRePasswordVisibility}
//             />
//           )}
//         </div>
//         {!passwordsMatch && rePassword.length > 0 && (
//           <p className="text-sm mt-2 text-red-500">Passwords do not match</p>
//         )}
//       </div>

//       {/* Create Wallet Button */}
//       <div className="absolute bottom-10 w-full">
//         <button
//           className={`text-center text-black font-bold text-lg rounded-2xl bg-gradient-to-l from-[#FFBD00] to-[#FFBABA] py-3 cursor-pointer w-[90%] block hover:scale-105 transition-transform ${
//             !allValid || !passwordsMatch ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={!allValid || !passwordsMatch}
//           onClick={handleCreateWallet}
//         >
//           Create Wallet
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateWallet;



