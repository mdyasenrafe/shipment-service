import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-[#f8f9fd]">
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
