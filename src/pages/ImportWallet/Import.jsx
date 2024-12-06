


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Ready from "./Ready";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

// <Routes>
//   {/* Other Routes */}
//   <Route path="/ready" element={<Ready />} />
// </Routes>


// const ImportWallet = () => {
//   const [mnemonic, setMnemonic] = useState("");
//   const [isMnemonicVisible, setIsMnemonicVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleClear = () => {
//     setMnemonic("");
//   };

//   const handlePaste = async () => {
//     try {
//       const text = await navigator.clipboard.readText();
//       setMnemonic(text);
//     } catch (error) {
//       console.error("Failed to paste text from clipboard:", error);
//       alert("Unable to access clipboard. Please try manually pasting your keys.");
//     }
//   };

//   const handleImport = () => {
//     console.log("Imported keys:", mnemonic);
//     if (mnemonic.trim()) {
//       navigate("/next-page"); // Replace '/next-page' with the correct route
//     } else {
//       alert("Please enter valid keys to proceed.");
//     }
//   };

//   console.log("mnenomic", mnemonic)

//   return (
//     <div className="bg-transparent text-white flex flex-col py-2 importwallet">
//       {/* Top Section */}
     
// <div className="w-full flex items-center justify-center py-2 relative">
//   <button 
//     onClick={() => navigate(-1)} 
//     className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-full -ml-2.5">
//     <img src="/arrow-left.svg" alt="Go Back"  />
//   </button>
//   <h1 className="text-x font-semibold text-center">Import Wallet</h1>
// </div>

// <h2 className="text-2xs font-normal text-left mt-4">Input</h2>

      
//       {/* Input Section */}
//       <div className="flex flex-col items-center mt-4 w-72 max-w-md bg-black">
//         <div className="relative w-full h-30 p-4 border border-[1px] border-[#252118] rounded-2xl">
//           <h3 className="text-sm font-medium text-neutral-400">Import Wallet</h3>
//           <label htmlFor="mnemonic-input" className="sr-only">Enter your keys</label>
//           <input
//           type={isMnemonicVisible? "text":"password"}
//   id="mnemonic-input"
//   value={ mnemonic}
//   onChange={(e) => setMnemonic(e.target.value)}
//   placeholder="Enter your keys"
//   className="w-full h-10 text-white text-sm rounded-2xl bg-black border-none placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-transparent resize-none"
//   style={{ lineHeight: "1.5" }}
// />

         

//           {/* Eye Icon */}
//           <button
//             type="button"
//             onClick={() => setIsMnemonicVisible(!isMnemonicVisible)}
//             className="absolute top-4 right-4 text-white text-lg"
//           >
//             {isMnemonicVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
//           </button>

//           <div className="relative w-full h-10 mt-2">
//             <button
//               onClick={handleClear}
//               className="absolute right-20 top-1/2 transform -translate-y-1/2 text-yellow-400 text-sm font-medium"
//             >
//               Clear
//             </button>
//             <button
//               onClick={handlePaste}
//               className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#bdb9ff] text-sm font-medium "
//             >
//               Paste
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Import Button */}

//       <div className="flex items-center justify-center mt-72">
//         <Link to ="/ready"
//           onClick={handleImport}
//           className="flex items-center justify-center py-3 rounded-xl w-full h-12 max-w-xs bg-gradient-to-r from-yellow-400 to-red-200 text-black font-medium hover:brightness-110"
//           style={{
//             boxShadow: "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
//           }}
//         >
//           Import
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ImportWallet;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const ImportWallet = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [isMnemonicVisible, setIsMnemonicVisible] = useState(false);
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
    if (mnemonic.trim()) {
      navigate("/ready");
    } else {
      alert("Please enter valid keys to proceed.");
    }
  };

  return (
    <div className="bg-transparent text-white flex flex-col items-center w-[350px] h-[600px] mx-auto py-6 px-4">
      {/* Top Section */}
      <div className="w-full flex items-center justify-center py-2 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
        >
          <img src="/arrow-left.svg" alt="Go Back" />
        </button>
        <h1 className="text-lg font-semibold">Import Wallet</h1>
      </div>

      {/* Input Section */}
      <h2 className="text-sm font-normal text-left mt-4">Input</h2>
      <div className="flex flex-col items-center mt-4 w-full bg-black">
        <div className="relative w-full h-32 p-4 border border-[1px] border-[#252118] rounded-xl">
          <h3 className="text-sm font-medium text-neutral-400">Import Wallet</h3>
          <input
            type={isMnemonicVisible ? "text" : "password"}
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
            placeholder="Enter your keys"
            className="w-full h-10 text-white text-sm bg-black border-none placeholder-neutral-400 focus:outline-none mt-2"
          />
          {/* Eye Icon */}
          <button
            type="button"
            onClick={() => setIsMnemonicVisible(!isMnemonicVisible)}
            className="absolute top-4 right-4 text-white text-lg"
          >
            {isMnemonicVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>

          <div className="flex justify-end space-x-4 mt-2">
            <button onClick={handleClear} className="text-yellow-400 text-sm font-medium">
              Clear
            </button>
            <button onClick={handlePaste} className="text-[#bdb9ff] text-sm font-medium">
              Paste
            </button>
          </div>
        </div>
      </div>

      {/* Import Button */}
      <div className="flex items-center justify-center mt-72 w-full">
        <button
          onClick={handleImport}
          className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-medium hover:brightness-110"
          style={{
            boxShadow: "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
          }}
        >
          Import
        </button>
      </div>
    </div>
  );
};

export default ImportWallet;
