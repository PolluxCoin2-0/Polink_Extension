// import React from "react";
// import Button from "../components/Button/Button";

// const HomePage = () => {
//   const handleCreateClick = () => {
//     alert("Create button clicked!");
//   };

//   return (
//     <div className="page home-page">
//       <Button label="Create" onClick={handleCreateClick} />
//     </div>
//   );
// };

// export default HomePage;



import React from 'react';
import Logo from '../components/Logo/Logo';

const HomePage = () => {
  return (
    <div className="home-page">
      <Logo />
    </div>
  );
};

export default HomePage;
