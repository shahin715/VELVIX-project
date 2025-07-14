import React from "react";

const MarginX10 = ({ children, style = {}, className = "" }) => {
  return (
    <div
      style={{ marginLeft: "15px", marginRight: "15px", marginTop: "40px", ...style }}
      className={className}
    >
      {children}
    </div>
  );
};

export default MarginX10;
