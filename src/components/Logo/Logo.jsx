// // // // import React from 'react';

// // // // const Logo = () => {
// // // //   return (
// // // //     <div className="flex justify-center items-center bg-transparent mt-[-100px]">
// // // //       <p className="animate-ping text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">
// // // //   Polink
// // // // </p>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default Logo;


// // // import React, { useState, useEffect } from 'react';

// // // const Logo = () => {
// // //   const [text, setText] = useState(''); // State to hold the visible text
// // //   const fullText = 'Polink'; // The full text for the typewriter effect
// // //   const typingSpeed = 150; // Speed in milliseconds

// // //   useEffect(() => {
// // //     let currentIndex = 0;

// // //     const typewriter = setInterval(() => {
// // //       if (currentIndex < fullText.length) {
// // //         setText((prev) => prev + fullText[currentIndex]);
// // //         currentIndex++;
// // //       } else {
// // //         clearInterval(typewriter); // Clear interval when the text is fully displayed
// // //       }
// // //     }, typingSpeed);

// // //     return () => clearInterval(typewriter); // Cleanup the interval on component unmount
// // //   }, []);

// // //   return (
// // //     <div className="flex justify-center items-center bg-transparent mt-[-100px]">
// // //       <p className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">
// // //         {text}
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default Logo;


// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Logo = () => {
// //   const [text, setText] = useState(''); // State to manage typed text
// //   const fullText = 'Polink'; // Text for the typewriter effect
// //   const typingSpeed = 150; // Speed of typing in milliseconds
// //   const navigate = useNavigate(); // React Router's navigation hook

// //   useEffect(() => {
// //     let currentIndex = 0;

// //     const typewriterInterval = setInterval(() => {
// //       if (currentIndex < fullText.length) {
// //         setText((prev) => prev + fullText[currentIndex]);
// //         currentIndex++;
// //       } else {
// //         clearInterval(typewriterInterval); // Stop typing when complete
// //         setTimeout(() => {
// //           navigate('/wallet-options'); // Redirect to WalletOptionsPage
// //         }, 1000); // Delay before navigation
// //       }
// //     }, typingSpeed);

// //     return () => clearInterval(typewriterInterval); // Cleanup on unmount
// //   }, [navigate]);

// //   return (
// //     <div className="flex justify-center items-center h-screen bg-transparent">
// //       <p className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">
// //         {text}
// //       </p>
// //     </div>
// //   );
// // };

// // export default Logo;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Logo = () => {
//   const [text, setText] = useState("");
//   const fullText = "Polink"; // Text to animate
//   const typingSpeed = 150; // Typing speed in ms
//   const navigate = useNavigate();

//   useEffect(() => {
//     let index = 0;

//     const typewriter = setInterval(() => {
//       if (index < fullText.length) {
//         setText((prev) => prev + fullText[index]);
//         index++;
//       } else {
//         clearInterval(typewriter); // Stop typing
//         setTimeout(() => {
//           navigate("/wallet-options"); // Redirect after animation
//         }, 1000); // Delay before navigation
//       }
//     }, typingSpeed);

//     return () => clearInterval(typewriter); // Cleanup on unmount
//   }, [navigate]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-transparent">
//       <p className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">
//         {text}
//       </p>
//     </div>
//   );
// };

// export default Logo;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const [text, setText] = useState("");
  const fullText = "Polink"; // Text to animate
  const typingSpeed = 150; // Typing speed in ms
  const navigate = useNavigate();

  useEffect(() => {
    const isWalletCreated = localStorage.getItem("walletPasswordHash");

    if (isWalletCreated) {
      // If wallet is already created, redirect to the dashboard
      navigate("/dashboard");
      return;
    }

    let index = 0;

    const typewriter = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typewriter); // Stop typing
        setTimeout(() => {
          navigate("/wallet-options"); // Redirect after animation
        }, 1000); // Delay before navigation
      }
    }, typingSpeed);

    return () => clearInterval(typewriter); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <p className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">
        {text}
      </p>
    </div>
  );
};

export default Logo;
