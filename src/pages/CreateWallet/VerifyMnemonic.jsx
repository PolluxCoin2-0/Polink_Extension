



// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

// // import { ToastContainer, toast } from "react-toastify";

// const VerifyMnemonic = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { mnemonic } = location.state || {};

//     const [randomPositions, setRandomPositions] = useState([]);
//     const [mnemonicOptions, setMnemonicOptions] = useState([]);
//     const [selectedWords, setSelectedWords] = useState({});
//     const [,setIsVerified] = useState(null); // null indicates no attempt yet

//     // const [isVerified, setIsVerified] = useState(null);



//     useEffect(() => {
//         if (!mnemonic) {
//             navigate("/backup-mnemonic");
//             return;
//         }

//         const generateRandomPositions = () => {
//             const positions = [];
//             while (positions.length < 3) {
//                 const random = Math.floor(Math.random() * 12) + 1;
//                 if (!positions.includes(random)) {
//                     positions.push(random);
//                 }
//             }
//             return positions.sort((a, b) => a - b);
//         };

//         const shuffleArray = (array) => {
//             return array
//                 .map((value) => ({ value, sort: Math.random() }))
//                 .sort((a, b) => a.sort - b.sort)
//                 .map(({ value }) => value);
//         };

//         const mnemonicWords = mnemonic.split(" ");
//         const positions = generateRandomPositions();

//         const options = positions.map((position) => {
//             const correctWord = mnemonicWords[position - 1];
//             const incorrectWords = mnemonicWords
//                 .filter((word) => word !== correctWord)
//                 .sort(() => 0.5 - Math.random())
//                 .slice(0, 2); // Only 2 incorrect words
//             return shuffleArray([correctWord, ...incorrectWords]);
//         });

//         setRandomPositions(positions);
//         setMnemonicOptions(options);
//     }, [mnemonic, navigate]);

//     const handleWordSelect = (position, word) => {
//         setSelectedWords((prev) => ({ ...prev, [position]: word }));
//     };

//     const verifySelection = () => {
//         const mnemonicWords = mnemonic.split(" ");
//         const isValid = randomPositions.every(
//             (pos) => mnemonicWords[pos - 1] === selectedWords[pos]
//         );

//         setIsVerified(isValid);

//         if (isValid) {
//             toast.success("successful Lets Go!");
//             setTimeout(() => navigate("/dashboard"), 1000); // Navigate after 2 seconds
//         } else {
//             toast.error("Mnemonic verification failed!");
//         }
//     };

//     return (
//         <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
//             {/* Top Section */}
//             <div className="w-full flex items-center justify-center py-2 relative">
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
//                 >
//                     <img src="/arrow-left.svg" alt="Go Back" />
//                 </button>
//                 <h1 className="text-lg font-semibold">Verify Mnemonic</h1>
//             </div>

//             {/* Instruction */}
//             <p className="px-8 text-xs text-white text-center leading-relaxed">
//                 Ensuring Security: Validate Your Mnemonic Order with Confidence
//             </p>

//             {/* Positions Section */}
//             <div className="grid grid-cols-3 gap-4 mt-2 flex flex-col w-full bg-[#121212] px-4 py-3 rounded-xl border border-[#252118]">
//                 {Array.from({ length: 12 }, (_, i) => (
//                     <div
//                         key={i + 1}
//                         className={`text-center text-xs py-2 w-20 rounded-md ${
//                             randomPositions.includes(i + 1)
//                                 ? "bg-[#FFBC44] text-black"
//                                 : "bg-[#29271F]  text-white"
//                         }`}
//                     >
//                         {i + 1}
//                     </div>
//                 ))}
//             </div>

//             {/* Mnemonic Options */}
//             <div className="mt-2 bg-[#121212] px-4 py-2 rounded-xl border border-[#252118]">
//                 {randomPositions.map((position, index) => (
//                     <div key={index} className="mb-2">
//                         <p className="text-sm text-center mb-1">
//                             Choose the {position} No. word
//                         </p>
//                         <div className="grid grid-cols-3 gap-4">
//                             {mnemonicOptions[index]?.map((word, idx) => (
//                                 <button
//                                     key={idx}
//                                     onClick={() => handleWordSelect(position, word)}
//                                     className={`py-[6px] px-3 rounded-lg text-xs ${
//                                         selectedWords[position] === word
//                                             ? "bg-[#FFBC44] text-black"
//                                             : "bg-[#29271F] text-white"
//                                     }`}
//                                 >
//                                     {word}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Complete Button */}
//             <button
//                 onClick={verifySelection}
//                 className="py-3 px-4 bg-gradient-to-r from-yellow-400 to-red-200 mt-[12px] text-black font-semibold rounded-xl hover:brightness-110"
//             >
//                 Complete
//             </button>

         

            
//         </div>
//     );
// };

// export default VerifyMnemonic;



import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyMnemonic = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { mnemonic } = location.state || {};

    const [randomPositions, setRandomPositions] = useState([]);
    const [mnemonicOptions, setMnemonicOptions] = useState([]);
    const [selectedWords, setSelectedWords] = useState({});
    const [, setIsVerified] = useState(null);

    useEffect(() => {
        if (!mnemonic) {
            navigate("/backup-mnemonic");
            return;
        }

        const generateRandomPositions = () => {
            const positions = [];
            while (positions.length < 3) {
                const random = Math.floor(Math.random() * 12) + 1;
                if (!positions.includes(random)) {
                    positions.push(random);
                }
            }
            return positions.sort((a, b) => a - b);
        };

        const shuffleArray = (array) => {
            return array
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
        };

        const mnemonicWords = mnemonic.split(" ");
        const positions = generateRandomPositions();

        const options = positions.map((position) => {
            const correctWord = mnemonicWords[position - 1];
            const incorrectWords = mnemonicWords
                .filter((word) => word !== correctWord)
                .sort(() => 0.5 - Math.random())
                .slice(0, 2);
            return shuffleArray([correctWord, ...incorrectWords]);
        });

        setRandomPositions(positions);
        setMnemonicOptions(options);
    }, [mnemonic, navigate]);

    const handleWordSelect = (position, word) => {
        setSelectedWords((prev) => ({ ...prev, [position]: word }));
    };

    const verifySelection = () => {
        const mnemonicWords = mnemonic.split(" ");
        const isValid = randomPositions.every(
            (pos) => mnemonicWords[pos - 1] === selectedWords[pos]
        );

        setIsVerified(isValid);

        if (isValid) {
            localStorage.setItem("walletVerified", "true"); // Save verification state
            toast.success("Verification successful! Redirecting...");
            setTimeout(() => navigate("/dashboard"), 1000); // Navigate after 1 second
        } else {
            toast.error("Mnemonic verification failed!");
        }
    };

    return (
        <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
            <div className="w-full flex items-center justify-center py-2 relative">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
                >
                    <img src="/arrow-left.svg" alt="Go Back" />
                </button>
                <h1 className="text-lg font-semibold">Verify Mnemonic</h1>
            </div>
            <p className="px-8 text-xs text-white text-center leading-relaxed">
                Ensuring Security: Validate Your Mnemonic Order with Confidence
            </p>
            <div className="grid grid-cols-3 gap-4 mt-2 flex flex-col w-full bg-[#121212] px-4 py-3 rounded-xl border border-[#252118]">
                {Array.from({ length: 12 }, (_, i) => (
                    <div
                        key={i + 1}
                        className={`text-center text-xs py-2 w-20 rounded-md ${
                            randomPositions.includes(i + 1)
                                ? "bg-[#FFBC44] text-black"
                                : "bg-[#29271F]  text-white"
                        }`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
            <div className="mt-2 bg-[#121212] px-4 py-2 rounded-xl border border-[#252118]">
                {randomPositions.map((position, index) => (
                    <div key={index} className="mb-2">
                        <p className="text-sm text-center mb-1">
                            Choose the {position} No. word
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            {mnemonicOptions[index]?.map((word, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleWordSelect(position, word)}
                                    className={`py-[6px] px-3 rounded-lg text-xs ${
                                        selectedWords[position] === word
                                            ? "bg-[#FFBC44] text-black"
                                            : "bg-[#29271F] text-white"
                                    }`}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={verifySelection}
                className="py-3 px-4 bg-gradient-to-r from-yellow-400 to-red-200 mt-[12px] text-black font-semibold rounded-xl hover:brightness-110"
            >
                Complete
            </button>
        </div>
    );
};

export default VerifyMnemonic;

