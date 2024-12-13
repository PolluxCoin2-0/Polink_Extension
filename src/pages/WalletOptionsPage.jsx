
// import React from "react";
// import { Link } from "react-router-dom";

// const WalletOptionsPage = () => {
//   return (
//     <div className="wallet-options-page flex flex-col items-center justify-center h-screen bg-transparent">
//       <div className="logo-container mb-8">
//         <img src="/logo.png" alt="Wallet Logo" className="logo w-20 h-20" />
//       </div>
//       <div className="options flex flex-col gap-4">
//         <Link to="/create-wallet">
//           <button className="option-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//             Create Wallet
//           </button>
//         </Link>
//         <Link to="/import-wallet">
//           <button className="option-button px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//             Import Wallet
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default WalletOptionsPage;

import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider"; 
import ImportWallet from "./ImportWallet/Import";
import CreateWallet from "./CreateWallet/Create";

import { Routes, Route } from "react-router-dom";

<Routes>
  {/* Other Routes */}
  <Route path="/importwallet" element={<ImportWallet />} />
  <Route path="/createwallet" element={<CreateWallet />} />
</Routes>



const WalletOptionsPage = () => {
  return (
    <div className="wallet-options-page flex flex-col items-center justify-between w-[350px] h-[600px] mx-auto py-6 px-4 bg-transparent">
      {/* Top Logo */}
      <div className="top-logo flex justify-center pt-6">
        <img
          src="/PolinkWallettext.svg"
          alt="Polink Wallet Logo"
          className="logo w-32 h-auto"
        />
      </div>

      
       {/* Image Slider */}
       <ImageSlider />

      
  

      {/* Text */}
      <div className="text-container text-center  pt-8">
        <h2 className="text-2xl font-bold">
          <span className="text-yellow-500">Unlocking</span>
          <span className="text-white"> Potential</span>
        </h2>
        <h3 className="text-xs font-semibold px-4 py-6">
        <span className="text-white"> Seamlessly Empowering Mainnet Tokens with POX's Full Support</span>
        </h3>
        
      </div>

      {/* Buttons */}
      <div className="buttons flex justify-between w-full">
      <Link to="/createwallet">
  <button
    className="option-button flex items-center justify-center rounded-xl w-36 h-12 bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
    style={{
      boxShadow: "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
    }}
  >
    <img src="/createico.svg" alt="Create Icon" className="w-5 h-5 mr-2" />
    Create Wallet
  </button>
</Link>
<Link to="/importwallet">
  <button
    className="option-button flex  items-center justify-center rounded-xl w-36 h-12 bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
    style={{
      boxShadow: "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
    }}
  >
    <img src="/importico.svg" alt="Import Icon" className="w-5 h-5 mr-2" />
    Import Wallet
  </button>
</Link>

      </div>
      
    </div>
  );
};

export default WalletOptionsPage;



