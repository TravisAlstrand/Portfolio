const Projects = () => {
  const projects = {
    JavaScript: [
      {
        title: "Trappenstein's Movie Vault",
        description: "Website to search, save and rate movies.",
        image: "./trappensteinScreenshot.png",
        technologies: ["React", "Supabase", "TailwindCSS"],
        liveLink: "https://trappenstein.com",
        githubLink:
          "https://github.com/TravisAlstrand/trappenstein_movie_crypt",
      },
      {
        title: "Schaut Construction",
        description: "Single page website for local construction business.",
        image: "./schautScreenshot.png",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        liveLink: "https://schautconstruction.com",
        githubLink: "https://github.com/TravisAlstrand/schaut_construction",
      },
      {
        title: "Serene and Clean",
        description: "Single page website for local cleaning business.",
        image: "./sereneScreenshot.png",
        technologies: ["React", "JavaScript", "TailwindCSS"],
        liveLink: "https://sereneandclean.net",
        githubLink: "https://github.com/TravisAlstrand/serene_and_clean",
      },
    ],
    // python: [
    //   {
    //     title: "Project Name",
    //     description:
    //       "Brief description of the project highlighting key features and technologies used.",
    //     image: "/path-to-project-image.jpg",
    //     technologies: ["Flask", "SQLAlchemy", "PostgreSQL"],
    //     liveLink: "https://project-url.com",
    //     githubLink: "https://github.com/username/project",
    //   },
    // ],
    Unity: [
      {
        title: "Robot Runner",
        description: "2D Endless Runner submitted as a 10-day Game Jam Entry.",
        image: "./robotRunner.png",
        technologies: ["Unity", "C#", "2D Game Development"],
        liveLink: "https://trappenstein-games.itch.io/robot-runner",
        githubLink: "",
      },
      {
        title: "Pomodojo",
        description: "2D Platformer for a 'Pomodoro App' challenge.",
        image: "./pomodojoScreenshot.png",
        technologies: ["Unity", "C#", "2D Game Development"],
        liveLink: "https://travisalstrand.github.io/PomoDojoLive/",
        githubLink: "https://github.com/TravisAlstrand/PomoDojo",
      },
      {
        title: "Night at the Art Gallery",
        description: "2D Stealth Game for an 'Art Gallery App' challenge.",
        image: "./artGalleryScreenshot.png",
        technologies: ["Unity", "C#", "2D Game Development"],
        liveLink: "https://travisalstrand.github.io/ArtGalleryLive/",
        githubLink: "https://github.com/TravisAlstrand/ArtGallery",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="bg-gray-50 py-16 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="mb-12 text-center text-3xl font-bold text-gray-900 lg:mb-16 lg:text-4xl"
        >
          My Projects
        </h2>

        <div className="space-y-16 lg:space-y-24">
          {Object.entries(projects).map(([category, categoryProjects]) => (
            <div key={category} className="space-y-8 lg:space-y-12">
              <h3 className="text-2xl font-semibold text-gray-900 lg:text-3xl">
                {category} Projects
              </h3>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                {categoryProjects.map((project, index) => (
                  <article
                    key={index}
                    className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6 lg:p-8">
                      <h4 className="mb-2 text-xl font-semibold text-gray-900 lg:text-2xl">
                        {project.title}
                      </h4>

                      <p className="mb-4 text-gray-700 lg:mb-6 lg:text-lg">
                        {project.description}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-2 lg:mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 lg:px-4 lg:py-1.5 lg:text-base"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 md:px-5 md:py-2.5 lg:text-base"
                        >
                          {category === "Unity" ? "Play Game" : "View Live"}
                        </a>
                        {project.githubLink.length ? (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 md:px-5 md:py-2.5 lg:text-base"
                          >
                            View Code
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
