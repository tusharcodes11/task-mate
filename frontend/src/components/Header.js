// components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md mb-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">📝 Task Mate</h1>
        {/* Future buttons can go here */}
        {/* <button className="bg-white text-blue-600 px-3 py-1 rounded">Login</button> */}
      </div>
    </header>
  );
};

export default Header;
