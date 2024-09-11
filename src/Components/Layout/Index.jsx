import React from "react";
//import Header from "./Header";
import "../../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <main>
      {/*<Header />*/}
      {children}
    </main>
  );
};

export default Layout;
