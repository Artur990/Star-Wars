import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-black px-1 dark:bg-white">
        <nav className="py-1 max-w-full h-16 mb-1 flex justify-between ">
          <Link href="/" className="text-4xl font-extrabold text-cyan-600 ">
            Star Wars
          </Link>
          <ul className="flex items-center w-60 justify-around ">
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-red-800"
              >
                Dark
              </button>
            </li>
            <li>
              <Link
                href="/films"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg md-8 "
              >
                Films
              </Link>
            </li>
            <li>
              <Link
                href="/characters"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg md-8 "
              >
                Characters
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
