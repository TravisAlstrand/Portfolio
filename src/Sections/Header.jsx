import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Close navigation menu with Escape Key
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);

      // Move focus to the first link when navigation menu opens
      if (firstLinkRef.current) {
        firstLinkRef.current.focus();
      }
    }

    return () => {
      // Remove Escape key listener
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="flex h-8 bg-slate-800 p-2 text-indigo-100">
      <div className="flex w-1/2 items-center">
        <span aria-hidden="true">&lt;</span>
        <span className="mr-2 italic">Travis Alstrand</span>
        <span aria-hidden="true">/&gt;</span>
      </div>
      <div className="flex w-1/2 items-center justify-end">
        <button
          className="hover:cursor-pointer"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FiX className="text-2xl" aria-hidden="true" />
          ) : (
            <FiMenu className="text-2xl" aria-hidden="true" />
          )}
        </button>
      </div>
      {menuOpen ? (
        <nav
          role="navigation"
          className="fixed top-8 left-0 flex h-8 w-full items-center justify-evenly bg-slate-800"
        >
          <a href="#about" ref={firstLinkRef}>
            About Me
          </a>
          <a href="#projects">My Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
