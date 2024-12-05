import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImportWallet = () => {
  const [mnemonic, setMnemonic] = useState("");
  const navigate = useNavigate();

  const handleClear = () => {
    setMnemonic("");
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setMnemonic(text);
    } catch (error) {
      console.error("Failed to paste text from clipboard:", error);
      alert("Unable to access clipboard. Please try manually pasting your keys.");
    }
  };

  const handleImport = () => {
    // Navigate to the next page or handle import logic
    console.log("Imported keys:", mnemonic);
    if (mnemonic.trim()) {
      navigate("/next-page"); // Replace '/next-page' with the correct route
    } else {
      alert("Please enter valid keys to proceed.");
    }
  };

  return (
    <div className="min-h bg-transparent text-white flex flex-col ">
      {/* Top Section */}
      <div className="w-full flex items-center justify-between mb-6 py-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="flex items-center text-yellow-400 font-medium hover:underline"
        >
          <img src="/arrow-left.svg" alt="Go Back" className="w-5 h-5 mr-2" />
         
        </button>
        <h1 className="text-xl font-semibold text-center flex-grow ">
          Import Wallet
        </h1>
        <div className="w-12" />
      </div>

      

      <h2 className="text-2xs font-normal text-left flex-grow">
          Input
        </h2>
      {/* Input Section */}

      <div className="flex flex-col items-center mt-12 w-64 max-w-md">
           
        <label htmlFor="mnemonic-input" className="sr-only">
          Enter your keys
        </label>
        <div className="relative w-ful h-40">
          <input
            id="mnemonic-input"
            type="text"
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
            placeholder="Enter your keys"
            className="w-full h-32 px-4 text-white text-lg rounded-md bg-black border border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={handleClear}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 text-yellow-400 text-sm font-medium hover:underline"
          >
            Clear
          </button>
          <button
            onClick={handlePaste}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm font-medium hover:underline"
          >
            Paste
          </button>
        </div>
      </div>

      {/* Import Button */}
      <div className="flex items-center justify-center mt-16">
        <button
          onClick={handleImport}
          className="flex items-center justify-center px-6 py-3 rounded-xl w-40 h-12 bg-gradient-to-r from-yellow-400 to-red-200 text-black font-medium hover:brightness-110"
          style={{
            boxShadow:
              "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
          }}
        >
          Import
        </button>
      </div>
    </div>
  );
};

export default ImportWallet;
