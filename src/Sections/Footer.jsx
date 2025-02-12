const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  My Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Contact</h2>
            <address className="not-italic">
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:alstrand.travis@gmail.com"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    alstrand.travis@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/travis-alstrand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/TravisAlstrand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* Logo/Brand Section */}
          <div className="text-center md:text-left lg:text-right">
            <div className="mb-4 inline-flex items-center">
              <span aria-hidden="true">&lt;</span>
              <span className="mx-2 text-xl font-semibold italic">
                Travis Alstrand
              </span>
              <span aria-hidden="true">/&gt;</span>
            </div>
            <p className="text-sm text-gray-400">
              Web Developer based in Northern California
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Travis Alstrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
