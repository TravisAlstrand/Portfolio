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
    <header className="fixed top-0 right-0 left-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <span className="text-gray-900" aria-hidden="true">
            &lt;
          </span>
          <span className="mx-2 text-xl font-semibold text-gray-900 italic">
            Travis Alstrand
          </span>
          <span className="text-gray-900" aria-hidden="true">
            /&gt;
          </span>
        </div>

        <div className="flex items-center">
          {/* Mobile Nav Button */}
          <button
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FiX className="text-2xl" aria-hidden="true" />
            ) : (
              <FiMenu className="text-2xl" aria-hidden="true" />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden space-x-8 lg:flex" role="navigation">
            <a
              href="#about"
              className="text-lg text-gray-700 hover:text-gray-900"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-lg text-gray-700 hover:text-gray-900"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="text-lg text-gray-700 hover:text-gray-900"
            >
              Contact Me
            </a>
          </nav>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            role="navigation"
            className="absolute top-16 right-0 left-0 bg-white px-4 py-4 shadow-lg lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                ref={firstLinkRef}
                className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                About Me
              </a>
              <a
                href="#projects"
                className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                My Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Contact Me
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
