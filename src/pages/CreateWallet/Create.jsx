import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const CreateWallet = () => {
  const [walletName, setWalletName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const isPasswordValid = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };

  const handleCreateWallet = () => {
    if (!walletName.trim()) {
      alert("Please enter a wallet name.");
      return;
    }
    if (!isPasswordValid(password)) {
      alert("Password does not meet the required criteria.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    navigate("/ready"); // Redirect after successful wallet creation
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
      <h2 className="text-sm font-normal text-left mt-4 px-1">Wallet Name</h2>
      <div className="flex flex-col items-center mt-2 w-full bg-black">
        <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
          <input
            type="text"
            value={walletName}
            onChange={(e) => setWalletName(e.target.value)}
            placeholder="Enter your wallet name"
            className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Input Section: Password */}
      <h2 className="text-sm font-normal text-left mt-4 px-1">Set Password</h2>
      <div className="flex flex-col items-center mt-2 w-full bg-black">
        <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Set your password"
            className="w-full h-full text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute top-4 right-4 text-white text-lg"
          >
            {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
        {/* Password Recommendations */}
        <div className="grid grid-cols-2 gap-2 text-sm text-green-400 mt-2">
            <p>Uppercase</p>
            <p>Lowercase</p>
            <p>Number</p>
            <p>At least 8 characters</p>
          </div>
        
      </div>

      {/* Input Section: Confirm Password */}
      <h2 className="text-sm font-normal text-left mt-4 px-1">Re-enter Password</h2>
      <div className="flex flex-col items-center mt-2 w-full bg-black">
        <div className="relative w-full h-16 p-4 border border-[1px] border-[#252118] rounded-xl">
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        </div>
      </div>

      {/* Create Wallet Button */}
      <div className="flex items-center justify-center mt-12 w-full">
        <button
          onClick={handleCreateWallet}
          className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
          style={{
            boxShadow:
              "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
          }}
        >
          Create Wallet
        </button>
      </div>
    </div>
  );
};

export default CreateWallet;
