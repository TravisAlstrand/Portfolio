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
    <header className="h-12 bg-slate-800 p-2 text-indigo-100 md:text-xl lg:h-16 lg:p-4">
      <div className="mx-auto flex h-full max-w-[1440px]">
        <div className="flex w-1/2 items-center">
          <span aria-hidden="true">&lt;</span>
          <span className="mr-2 italic">Travis Alstrand</span>
          <span aria-hidden="true">/&gt;</span>
        </div>
        <div className="flex w-1/2 items-center justify-end">
          {/* Mobile Nav Button */}
          <button
            className="hover:cursor-pointer lg:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FiX className="text-2xl md:text-3xl" aria-hidden="true" />
            ) : (
              <FiMenu className="text-2xl md:text-3xl" aria-hidden="true" />
            )}
          </button>
          {/* Desktop Nav */}
          <nav
            className="hidden w-full justify-end gap-8 lg:flex"
            role="navigation"
          >
            <a href="#about">About Me</a>
            <a href="#projects">My Projects</a>
            <a href="#contact">Contact Me</a>
          </nav>
        </div>
        {/* Mobile Nav Menu */}
        {menuOpen ? (
          <nav
            id="mobile-navigation"
            role="navigation"
            className="fixed top-8 left-0 flex h-12 w-full items-center justify-evenly bg-slate-800 lg:hidden"
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
      </div>
    </header>
  );
};

export default Header;
