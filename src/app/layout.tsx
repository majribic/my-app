import React from "react";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("Rendering RootLayout");
  return (
    <html>
      <head>
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js app description" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="root-layout">
          <h1>Root Layout</h1>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
