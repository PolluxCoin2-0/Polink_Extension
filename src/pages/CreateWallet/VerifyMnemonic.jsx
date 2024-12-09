import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyMnemonic = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerifyMnemonic = () => {
    // Simple check for mnemonic validation; customize as needed
    if (mnemonic.trim().split(/\s+/).length < 12) {
      setError('Please enter a valid 12-word mnemonic phrase.');
      return;
    }

    // Clear error if mnemonic is valid
    setError('');

    // Proceed to next page if mnemonic is valid
    navigate('/next-page');
  };

  return (
    <div className="bg-transparent text-white flex flex-col items-center w-[350px] h-[600px] mx-auto py-6 px-4">
      {/* Heading Section */}
      <h1 className="text-2xl font-semibold text-center mt-4">
        Verify Your <span className="text-yellow-400">Mnemonic</span>
      </h1>

      {/* Input Section */}
      <div className="mt-6 w-full">
        <label htmlFor="mnemonic" className="block text-sm font-medium mb-2">
          Enter Your Mnemonic Phrase
        </label>
        <input
          type="text"
          id="mnemonic"
          placeholder="Enter 12-word phrase"
          value={mnemonic}
          onChange={(e) => setMnemonic(e.target.value)}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-yellow-400"
        />
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      </div>

      {/* Verify Button */}
      <div className="flex items-center justify-center mt-6 w-full">
        <button
          onClick={handleVerifyMnemonic}
          className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
          style={{
            boxShadow:
              '6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset',
          }}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyMnemonic;
