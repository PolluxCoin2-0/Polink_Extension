// import React from "react";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import NotFoundPage from "./pages/NotFoundPage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>  
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import WalletOptionsPage from "./pages/WalletOptionsPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Logo from "./components/Logo/Logo";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Initial Logo page with typewriter animation */}
        <Route path="/" element={<Logo />} />
        {/* Redirects to wallet options after the animation */}
        <Route path="/wallet-options" element={<WalletOptionsPage />} />
        {/* Other pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Fallback for unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;

