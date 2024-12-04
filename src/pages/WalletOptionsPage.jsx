
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

const WalletOptionsPage = () => {
  return (
    <div className="wallet-options-page flex flex-col items-center justify-between h-screen bg-transparent p-6">
      {/* Top Logo */}
      <div className="top-logo flex justify-center">
        <img
          src="/PolinkWallettext.svg"
          alt="Polink Wallet Logo"
          className="logo w-32 h-auto"
        />
      </div>

      {/* Image Slider */}
      <div className="slider flex flex-col items-center">
        <div className="slider-images flex overflow-hidden w-64 h-40 mb-4">
          <img
            src="/slider1.svg"
            alt="Slider 1"
            className="w-full h-full object-cover animate-slide"
          />
          <img
            src="/slider2.svg"
            alt="Slider 2"
            className="w-full h-full object-cover animate-slide"
          />
          <img
            src="/slider3.svg"
            alt="Slider 3"
            className="w-full h-full object-cover animate-slide"
          />
        </div>
        {/* Slider Dots */}
        <div className="slider-dots flex gap-2">
          <div className="dot w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="dot w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="dot w-3 h-3 bg-yellow-500 rounded-full"></div>
        </div>
      </div>

      {/* Text */}
      <div className="text-container text-center mb-2">
        <h2 className="text-2xl font-bold">
          <span className="text-yellow-500">Unlocking</span>
          <span className="text-white"> Potential</span>
        </h2>
        <h3 className="text-xs font-bold">
        <span className="text-white"> Semessly Emp=</span>

        </h3>
        
      </div>

      {/* Buttons */}
      <div className="buttons flex justify-between gap-4 w-full max-w-xs">
      <Link to="/create-wallet">
  <button
    className="option-button flex items-center justify-center px-2 py-4 rounded-xl w-30 h-12 bg-gradient-to-r from-yellow-400 to-red-200 text-black font-medium hover:brightness-110"
    style={{
      boxShadow: "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
    }}
  >
    <img src="/createico.svg" alt="Create Icon" className="w-5 h-5 mr-2" />
    Create Wallet
  </button>
</Link>
<Link to="/import-wallet">
  <button
    className="option-button flex  items-center justify-center px-2 py-2 rounded-xl w-30 h-12 bg-gradient-to-r from-yellow-400 to-red-200 text-black font-medium hover:brightness-110"
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

/* Tailwind Styles */
/* Add this to your global CSS or component-specific CSS */
/*
.animate-slide {
  animation: slide 5s infinite;
}

@keyframes slide {
  0%, 100% {
    transform: translateX(0);
  }
  33% {
    transform: translateX(-100%);
  }
  66% {
    transform: translateX(-200%);
  }
}
*/

