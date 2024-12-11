

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import WalletOptionsPage from "./pages/WalletOptionsPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Logo from "./components/Logo/Logo";
import ImportWallet from "./pages/ImportWallet/Import";
import Ready from "./pages/ImportWallet/Ready";
import CreateWallet from "./pages/CreateWallet/Create";
import Backupmnemonic from "./pages/CreateWallet/Backupmnemonic";
import VerifyMnemonic from "./pages/CreateWallet/VerifyMnemonic";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Home/Dashboard";

const App = () => {
  return (
    <Router>
      <ToastContainer
            position="top-center"
            autoClose={1000}
            theme="light"
            newestOnTop={true}
            pauseOnFocusLoss
            toastClassName="custom-toast"
            
          />
      <Routes>
        {/* Initial Logo page with typewriter animation */}
        <Route path="/" element={<Logo />} />
        {/* Redirects to wallet options after the animation */}
        <Route path="/wallet-options" element={<WalletOptionsPage />} />
        {/* Other pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/importwallet" element={<ImportWallet />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/createwallet" element={<CreateWallet />} />
        <Route path="/backupmnemonics" element={<Backupmnemonic />} />
        <Route path="/verify-mnemonic" element={<VerifyMnemonic />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Fallback for unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;

