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
// import Logo from '../components/Logo/Logo';
import Dashboard  from '../pages/Home/Dashboard';

const HomePage = () => {
  return (
    <div className="home-page">
  
      <Dashboard />
    </div>
  );
};

export default HomePage;
