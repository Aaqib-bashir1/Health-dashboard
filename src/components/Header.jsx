// import React from 'react';
// import '../styles/Header.css';
// import { FaBell, FaPlus } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-left">

//         <div className="search-bar">
          
//           <input type="text" placeholder="Search here..." disabled />
//         </div>
//       </div>
//       <div className="header-right">
//         <button className="add-btn">
//           <FaPlus />
//         </button>
//         <FaBell className="icon notification-icon" />
//         <div className="user-profile">
//           <img src="/avatar.jpg" alt="User Avatar" className="avatar" />
          
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import '../styles/Header.css';
import avatar from '../assets/avatar.png';
import { FaBell, FaPlus, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo" id='logo'><span>Health</span>care.</h2>
      <div className="header-left">
        
        <div className="search-bar">
         
        <input type="text" placeholder= " Search..." />
        <FaSearch className="search-icon" />
        </div>
        <div className="notification">
          <FaBell />
        </div>
      </div>

      <div className="header-right">
        

        

        <div className="profile">
          <img src={avatar} alt="User Avatar" className="avatar" />
        </div>
        
        <button className="add-button">
          <FaPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;
