import React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <h2>Inner layout</h2>
      {children}
    </div>
  );
};

export default AuthLayout;
