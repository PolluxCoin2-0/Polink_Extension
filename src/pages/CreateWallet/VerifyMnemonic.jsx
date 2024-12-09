import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyMnemonic = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const mnemonicWords = location.state?.mnemonic.split(" ") || [];
    const [selectedIndices, setSelectedIndices] = useState([]);
    const [options, setOptions] = useState([[], [], []]);
    const [userSelections, setUserSelections] = useState(["", "", ""]);

    useEffect(() => {
        // Generate 3 random unique indices
        const indices = Array.from({ length: 12 }, (_, i) => i);
        indices.sort(() => Math.random() - 0.5);
        const selected = indices.slice(0, 3);
        setSelectedIndices(selected);

        // Generate options for each selected index
        const newOptions = selected.map((index) => {
            const correctWord = mnemonicWords[index];
            const shuffled = [...mnemonicWords].sort(() => Math.random() - 0.5);
            const choices = [correctWord];
            for (const word of shuffled) {
                if (choices.length === 3) break;
                if (!choices.includes(word)) choices.push(word);
            }
            return choices.sort(() => Math.random() - 0.5);
        });
        setOptions(newOptions);
    }, [mnemonicWords]);

    const verifyMnemonic = () => {
        const isCorrect = selectedIndices.every(
            (index, i) => mnemonicWords[index] === userSelections[i]
        );
        if (isCorrect) {
            alert("Verification Successful!");
            navigate("/dashboard");
        } else {
            alert("Verification Failed!");
        }
    };

    return (
        <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
            <h1 className="text-lg font-semibold mb-4">Verify Mnemonic</h1>
            <div className="flex flex-col gap-4">
                {selectedIndices.map((index, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <p className="text-sm">
                            Select the word for position <b>{index + 1}</b>
                        </p>
                        <select
                            value={userSelections[i]}
                            onChange={(e) =>
                                setUserSelections((prev) => {
                                    const updated = [...prev];
                                    updated[i] = e.target.value;
                                    return updated;
                                })
                            }
                            className="bg-[#1e1e1e] text-white p-2 rounded"
                        >
                            <option value="">Select a word</option>
                            {options[i].map((word, j) => (
                                <option key={j} value={word}>
                                    {word}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            <button
                onClick={verifyMnemonic}
                className="mt-6 px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold rounded-lg"
            >
                Verify
            </button>
        </div>
    );
};

export default VerifyMnemonic;
