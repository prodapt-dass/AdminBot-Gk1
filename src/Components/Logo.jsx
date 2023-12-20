
import React from "react";

const Logo = ({ isCollapsed }) => {
  return (
    <div className="logo-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
<path d="M0 0H37V37" fill="#EB262A"/>
</svg>
        
      {!isCollapsed && <span className="logo-text">GEN AI</span>}
    </div>
  );
};

export default Logo;
