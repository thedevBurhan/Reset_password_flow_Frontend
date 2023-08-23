import React from "react";

const Base = ({ title, children }) => {
  return (
    <div className="main-component base-component">
      <h1 className="app-heading">Reset Password Flow</h1>
      <header>
        <h2 className="heading">{title}</h2>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Base;
