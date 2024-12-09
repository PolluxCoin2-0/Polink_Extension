import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateMnemonic } from "bip39";
import { QRCodeCanvas } from "qrcode.react";
import { Buffer } from "buffer";
import { FiCopy } from "react-icons/fi";
import { BsQrCodeScan } from "react-icons/bs";


// Polyfill Buffer for Webpack 5+
window.Buffer = Buffer;

const BackupMnemonic = () => {
  const [mnemonic, setMnemonic] = useState(generateMnemonic());
  const [isQrVisible, setIsQrVisible] = useState(false);
  const navigate = useNavigate();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mnemonic).then(() => {
      alert("Mnemonic copied to clipboard!");
    });
  };

  return (
    <div className="bg-transparent text-white flex flex-col w-[350px] h-[600px] mx-auto py-6 px-4">
      {/* Top Section */}
      <div className="w-full flex items-center justify-center py-2 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8"
        >
          <img src="/arrow-left.svg" alt="Go Back" />
        </button>
        <h1 className="text-lg font-semibold">Backup Mnemonic</h1>
      </div>

      {/* Mnemonic Section */}
      <div className="flex flex-col items-center mt-8 w-full bg-black p-4 rounded-xl border border-[#252118]">
        <p className="text-sm font-semibold mb-4">Your Mnemonic:</p>
        <div className="bg-[#1a1a1a] text-center p-4 rounded-md w-full text-sm text-white">
          {mnemonic}
        </div>
        <button
  onClick={copyToClipboard}
  className="mt-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold rounded-lg hover:brightness-110 flex items-center gap-2"
>
  <FiCopy className="text-lg" />
  Copy Mnemonic
</button>

        
      </div>

      {/* QR Code Section */}
      <button
        onClick={() => setIsQrVisible(true)}
        className="mt-6 px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold rounded-lg hover:brightness-110"
      >
        Mnemonic QR Code
      </button>

      {isQrVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg relative w-[300px] text-center">
            <h2 className="text-lg font-semibold mb-4">Mnemonic QR Code</h2>
            <QRCodeCanvas value={mnemonic} size={200} />
            <button
              onClick={() => setIsQrVisible(false)}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-red-400 to-yellow-200 text-black font-semibold rounded-lg hover:brightness-110"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Already Backup Button */}
      <div className="flex items-center justify-center mt-[80px] w-full">
        <button
          onClick={() => navigate("/verify-mnemonic")}
          className="flex items-center justify-center py-3 rounded-xl w-full bg-gradient-to-r from-yellow-400 to-red-200 text-black font-semibold hover:brightness-110"
          style={{
            boxShadow:
              "6px 0px 8px 0px #FFFFFF40 inset, -6px 0px 8px 0px #00000040 inset",
          }}
        >
          Already Backup
        </button>
      </div>
    </div>
  );
};

export default BackupMnemonic;
