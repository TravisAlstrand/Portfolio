const Hero = () => {
  return (
    <section
      className="relative bg-white pt-32 pb-24 sm:pt-40 sm:pb-32"
      aria-label="Hero section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-600">
            Hi there! I&apos;m
          </p>

          <h1 className="mt-2 mb-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Travis Alstrand
          </h1>

          <p className="text-lg text-gray-700 sm:text-xl">
            <em>
              Developer who&apos;s taught hundreds to code - now ready to build
              real-world solutions.
            </em>
          </p>

          <div className="mt-8 flex justify-center gap-4 sm:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-gray-900 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-gray-800"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border-2 border-gray-900 px-6 py-3 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
