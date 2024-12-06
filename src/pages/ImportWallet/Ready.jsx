// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const Ready = () => {
//   const navigate = useNavigate();

//   const handleProceed = () => {
//     navigate("/next-page"); // Replace '/next-page' with the correct route
//   };

//   return (
//     <div className="bg-transparent text-white flex flex-col items-center w-full py-2">

//       {/* Image Section */}
//       <div className="w-full flex items-center justify-center mt-32">
//         <img
//           src="/images/readytick.png"
//           alt="Ready Tick"
//           className="w-24 h-24 object-contain"
//         />
//       </div>

//       {/* Heading Section */}
     
//       <h1 className="text-xl font-semibold text-center mt-4">
//         Your Wallet is 
//         <h2>Ready</h2>
//       </h1>
      

//       {/* Proceed Button */}
//       <div className="flex items-center justify-center mt-60 w-full">
        
//         <Link to="/"
//           onClick={handleProceed}
//           className="flex items-center justify-center px-6 py-3 rounded-xl w-full h-12 max-w-xs bg-gradient-to-r from-yellow-400 to-red-200 text-black font-medium hover:brightness-110"
//           style={{
//             boxShadow:
//               "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
//           }}
//         >
//           Proceed
//         </Link>
        
//       </div>
//     </div>
//   );
// };

// export default Ready;


import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Ready = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/next-page");
  };

  return (
    <div className="bg-transparent text-white flex flex-col items-center w-[350px] h-[600px] mx-auto py-6 px-4">
      {/* Image Section */}
      <div className="w-full flex items-center justify-center mt-16">
        <img
          src="/images/readytick.png"
          alt="Ready Tick"
          className="w-24 h-24 object-contain"
        />
      </div>

      {/* Heading Section */}
      <h1 className="text-xl font-semibold text-center mt-6">
        Your Wallet is <br /> <span className="text-yellow-400">Ready</span>
      </h1>

      {/* Proceed Button */}
      <div className="flex items-center justify-center mt-64 w-full">
        <Link to = "/"
          onClick={handleProceed}
          className="flex items-center justify-center mt-4 py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
          style={{
            boxShadow:
              "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
          }}
        >
          Proceed
        </Link>
      </div>
    </div>
  );
};

export default Ready;
