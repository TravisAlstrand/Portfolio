import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// import OpenNavBtn from "../Components/OpenNavBtn";
// import CloseNavBtn from "../Components/CloseNavBtn";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick() {
    // Toggle menu open state
    setMenuOpen(!menuOpen);
    // Show / Hide Nav menu
    console.log("button clicked");
  }

  return (
    <header className="flex p-2">
      <div className="flex w-1/2 items-center">
        <span aria-hidden="true">&lt;</span>
        <span className="mr-2">Travis Alstrand</span>
        <span aria-hidden="true">/&gt;</span>
      </div>
      <div className="flex w-1/2 items-center justify-end">
        <button
          className="hover:cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={handleNavClick}
        >
          {menuOpen ? (
            <FiX className="text-2xl" aria-hidden="true" />
          ) : (
            <FiMenu className="text-2xl" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
