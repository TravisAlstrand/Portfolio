const AboutMe = () => {
  const handleToggle = (e) => {
    // Update aria-expanded based on the open property of the details element
    e.target.setAttribute("aria-expanded", e.target.open);
  };

  return (
    <section
      id="about"
      className="bg-gray-50 py-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="about-heading"
          className="mb-12 text-center text-3xl font-bold text-gray-900"
        >
          About Me
        </h2>

        <div className="grid items-start gap-8 md:grid-cols-[300px_1fr]">
          <img
            src="/path-to-image.jpg"
            alt="Travis Alstrand - Professional headshot"
            className="mx-auto w-full max-w-[300px] rounded-lg shadow-md"
          />

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Hi! I&apos;m Travis, a Web Developer based in Northern California.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Since 2021, I&apos;ve built a strong foundation in web development
              through hands-on projects and certifications in front-end,
              full-stack JavaScript, Python, data analysis, and Java.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              For the past few years, I&apos;ve worked at Team Treehouse helping
              hundreds of students learn to code - an experience that sharpened
              my own expertise and communication skills.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Now, I&apos;m ready to take the next step: applying my knowledge,
              problem-solving ability, and passion for building into a developer
              role.
            </p>
            <a
              href="https://www.credential.net/profile/travisalstrand88911/wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center rounded-lg bg-gray-900 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-gray-800"
              aria-label="View my certifications"
            >
              View My Certifications
            </a>

            <details
              className="group mt-8 rounded-lg bg-white p-6 shadow-sm"
              aria-expanded="false"
              role="group"
              aria-label="Expandable skills section"
              onToggle={handleToggle}
            >
              <summary
                className="flex cursor-pointer items-center justify-between"
                role="button"
                aria-controls="skills-content"
                aria-label="Show my technical skills and expertise"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  What I Bring to the Table
                </h3>
                <span
                  className="ml-4 shrink-0 text-gray-700 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  ▼
                </span>
              </summary>

              <div
                id="skills-content"
                className="mt-6 grid gap-6 sm:grid-cols-2"
                role="region"
                aria-labelledby="skills-heading"
              >
                <div>
                  <h4
                    id="languages-heading"
                    className="mb-3 font-medium text-gray-900"
                  >
                    Languages
                  </h4>
                  <ul
                    className="list-inside list-disc space-y-2 text-gray-700"
                    aria-labelledby="languages-heading"
                  >
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>C# (Unity)</li>
                    <li>Java</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </div>

                <div>
                  <h4
                    id="frameworks-heading"
                    className="mb-3 font-medium text-gray-900"
                  >
                    Frameworks & Libraries
                  </h4>
                  <ul
                    className="list-inside list-disc space-y-2 text-gray-700"
                    aria-labelledby="frameworks-heading"
                  >
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Sequelize</li>
                    <li>TailwindCSS</li>
                    <li>Flask</li>
                    <li>SQLAlchemy</li>
                    <li>SASS</li>
                  </ul>
                </div>

                <div>
                  <h4
                    id="tools-heading"
                    className="mb-3 font-medium text-gray-900"
                  >
                    Tools & Platforms
                  </h4>
                  <ul
                    className="list-inside list-disc space-y-2 text-gray-700"
                    aria-labelledby="tools-heading"
                  >
                    <li>Git & GitHub</li>
                    <li>Postman</li>
                    <li>VS Code</li>
                    <li>IntelliJ</li>
                  </ul>
                </div>

                <div>
                  <h4
                    id="other-heading"
                    className="mb-3 font-medium text-gray-900"
                  >
                    Other Skills
                  </h4>
                  <ul
                    className="list-inside list-disc space-y-2 text-gray-700"
                    aria-labelledby="other-heading"
                  >
                    <li>Responsive Design</li>
                    <li>RESTful APIs</li>
                    <li>Team Player</li>
                    <li>Fast Learner</li>
                  </ul>
                </div>
              </div>
            </details>

            <p className="text-lg leading-relaxed text-gray-700">
              When I&apos;m not helping others, you can find me creating 2D
              games in Unity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
