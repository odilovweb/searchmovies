import React from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../hooks/useContextGlobal";

function Navbar() {
  const colors = ["rgb(148, 163, 184)", "#A6FF96", "#FFF8C9", "#555843"];
  const { changeTheme, changeColor } = useContextGlobal();
  const { color, theme } = useContextGlobal().state;
  const handleMode = () => {
    theme === "dark" ? changeTheme("light") : changeTheme("dark");
  };
  return (
    <nav className="align-element flex items-center py-2">
      <Link
        to="/"
        className="
      mr-auto cursor-pointer font-bold tablet:text-xl laptop:text-2xl desktop:text-3xl"
      >
        Search<span className="text-red-900">Movies</span>
      </Link>
      <div className="mr-3 flex gap-3">
        {colors.map((col) => {
          return (
            <div
              key={col}
              className="cursor-pointer rounded-full border-element w-4 h-4 desktop:w-5 desktop:h-5"
              style={{ backgroundColor: col }}
              onClick={() => {
                changeColor(col);
              }}
            ></div>
          );
        })}
      </div>
      <button
        className="cursor-pointer tablet:text-xl laptop:text-2xl desktop:text-3xl"
        onClick={handleMode}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default Navbar;
