import React from "react";


function NavBar({ handleAddClick }) {
    const handleClick = () => {
        handleAddClick();
    };
    return (
      <div className="navbar">
        <div>
          <span onClick={handleClick} className="loginicon">
            Join RoboFriends
          </span>
        </div>
      </div>
    );
  }

  export default NavBar;
