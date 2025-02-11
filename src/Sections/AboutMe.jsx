const AboutMe = () => {
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
              I specialize in JavaScript but have a good grasp on numerous
              programming languages.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              With [X] years of experience in the field, I&apos;m passionate
              about [What You&apos;re Passionate About]. My approach to [Your
              Field] combines [Your Unique Qualities or Methodologies].
            </p>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                What I Bring to the Table:
              </h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Strong expertise in [Skill/Technology 1]</li>
                <li>Experience with [Skill/Technology 2]</li>
                <li>Background in [Relevant Background]</li>
                <li>Passionate about [Interest/Specialty]</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-lg leading-relaxed text-gray-700">
                When I&apos;m not [Your Professional Activity], you can find me
                [Your Hobbies/Interests]. I believe in [Your Personal Philosophy
                or Professional Motto].
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
