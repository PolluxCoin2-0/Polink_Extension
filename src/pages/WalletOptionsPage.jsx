
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
      <div className="text-container text-center mb-6">
        <h2 className="text-lg font-bold">
          <span className="text-yellow-500">Unlocking</span>
          <span className="text-white"> Potential</span>
        </h2>
      </div>

      {/* Buttons */}
      <div className="buttons flex justify-between w-full max-w-xs">
        <Link to="/create-wallet">
          <button className="option-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-32">
            Create Wallet
          </button>
        </Link>
        <Link to="/import-wallet">
          <button className="option-button px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-32">
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

