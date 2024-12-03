// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const WalletOptionsPage = () => {
// //   return (
// //     <div className="wallet-options-page">
// //       <div className="logo-container">
// //         <img src="/logo.png" alt="Wallet Logo" className="logo" />
// //       </div>
// //       <div className="options">
// //         <Link to="/create-wallet">
// //           <button className="option-button">Create Wallet</button>
// //         </Link>
// //         <Link to="/import-wallet">
// //           <button className="option-button">Import Wallet</button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default WalletOptionsPage;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const WalletOptionsPage = () => {
//   return (
//     <div className="wallet-options-page flex flex-col items-center justify-center h-screen bg-gray-100">
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
    <div className="wallet-options-page flex flex-col items-center justify-center h-screen bg-transparent">
      <div className="logo-container mb-8">
        <img src="/logo.png" alt="Wallet Logo" className="logo w-20 h-20" />
      </div>
      <div className="options flex flex-col gap-4">
        <Link to="/create-wallet">
          <button className="option-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Create Wallet
          </button>
        </Link>
        <Link to="/import-wallet">
          <button className="option-button px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Import Wallet
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WalletOptionsPage;

