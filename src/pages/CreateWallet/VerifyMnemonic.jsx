


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyMnemonic = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { mnemonic } = location.state || {};

    const [randomPositions, setRandomPositions] = useState([]);
    const [mnemonicOptions, setMnemonicOptions] = useState([]);
    const [selectedWords, setSelectedWords] = useState({});
    const [isVerified, setIsVerified] = useState(false);

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
                .slice(0, 3);
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
            alert("Mnemonic verified successfully!");
        } else {
            alert("Mnemonic verification failed. Please try again.");
        }
    };

    return (
        <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
            {/* Top Section */}
            <div className="w-full flex items-center justify-between py-2">
                <button
                    onClick={() => navigate(-1)}
                    className="text-yellow-400 text-sm"
                >
                    &lt; Back
                </button>
                <h1 className="text-lg font-semibold text-center flex-1">
                    Verify Mnemonic
                </h1>
                <button className="text-yellow-400 text-sm">Revisit</button>
            </div>

            {/* Instruction */}
            <p className="px-4 text-sm text-white text-center leading-relaxed mt-4">
                Ensuring Security: Validate Your Mnemonic Order with Confidence
            </p>

            {/* Positions Section */}
            <div className="grid grid-cols-4 gap-2 mt-6">
                {Array.from({ length: 12 }, (_, i) => (
                    <div
                        key={i + 1}
                        className={`text-center py-2 rounded-md border border-gray-600 ${
                            randomPositions.includes(i + 1)
                                ? "bg-yellow-400 text-black"
                                : "bg-gray-800 text-white"
                        }`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>

            {/* Mnemonic Options */}
            <div className="mt-6">
                {randomPositions.map((position, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-sm mb-2">
                            Choose the {position} No. word
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            {mnemonicOptions[index]?.map((word, idx) => (
                                <button
                                    key={idx}
                                    onClick={() =>
                                        handleWordSelect(position, word)
                                    }
                                    className={`py-2 px-4 rounded-lg ${
                                        selectedWords[position] === word
                                            ? "bg-yellow-400 text-black"
                                            : "bg-gray-800 text-white"
                                    }`}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Complete Button */}
            <button
                onClick={verifySelection}
                className="mt-auto py-3 px-4 bg-gradient-to-r from-yellow-400 to-red-400 text-black font-semibold rounded-lg hover:brightness-110"
            >
                Complete
            </button>

            {/* Verification Result */}
            {isVerified && (
                <p className="text-center text-green-400 mt-4">
                    Mnemonic verified successfully!
                </p>
            )}
        </div>
    );
};

export default VerifyMnemonic;
