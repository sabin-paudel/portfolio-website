import { ArrowUpRight } from "lucide-react";

import { getProjects } from "@/app/types/project";
import OptimizedImage from "@/app/components/ui/OptimizedImage";

export default function Projects() {
  const allProjects = getProjects();
  const siteUrl = "https://sabinpaudel.com.np";

  // Main projects (01 - 04) and Experiments (05)
  const mainProjects = allProjects.filter((p) => p.id !== "5");
  const experimentProject = allProjects.find((p) => p.id === "5");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sabin Paudel Projects",
    description:
      "Selected web applications, platforms, and frontend experiments built by Sabin Paudel.",
    itemListElement: allProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: `${siteUrl}${project.image}`,
        ...(project.liveUrl ? { url: project.liveUrl } : {}),
        ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
      },
    })),
  };

  return (
    <div className="relative min-h-screen px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://sabinpaudel.com.np",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: "https://sabinpaudel.com.np/projects",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      <main className="mx-auto max-w-6xl space-y-20 lg:space-y-28">
        {/* Header Section */}
        <header className="max-w-2xl space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.24em] text-zinc-400">
            Work
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100">
            Things I&rsquo;ve built.
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">
            A selection of web applications, platforms, and digital tools
            focused on performance, clean interfaces, and practical utility.
          </p>
        </header>

        {/* Main Projects Showcase */}
        <section aria-label="Main Projects" className="space-y-12">
          <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2 lg:gap-y-20">
            {mainProjects.map((project, index) => {
              const projectNumber = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={project.id}
                  className="group flex flex-col space-y-5"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-1 flex-col space-y-3">
                    {/* Number and Role */}
                    <div className="flex items-center justify-between gap-4 font-mono text-xs text-zinc-400">
                      <span className="tabular-nums text-zinc-300 font-medium">
                        {projectNumber}
                      </span>
                      <span className="uppercase tracking-wider">
                        {project.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-100">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-200" />
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h2>

                    {/* Short Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies - Visually Secondary */}
                    <p className="pt-1 font-mono text-xs text-zinc-400">
                      {project.tags.join(" · ")}
                    </p>

                    {/* Actions */}
                    <div className="mt-auto flex items-center gap-5 pt-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                        >
                          <span>Live demo</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
                        >
                          <span>Source code</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Experiments Section */}
        {experimentProject && (
          <section
            aria-label="Experiments"
            className="pt-16 sm:pt-20 border-t border-zinc-900 space-y-12"
          >
            {/* Experiments Header */}
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-zinc-300 tabular-nums font-medium">
                  05
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-400">
                  Experiments
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
                {experimentProject.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {experimentProject.description}
              </p>
              <p className="font-mono text-xs text-zinc-400">
                {experimentProject.tags.join(" · ")}
              </p>
            </div>

            {/* Individual Experiment Showcases */}
            {experimentProject.experiments && (
              <div className="grid gap-x-10 gap-y-12 lg:grid-cols-2">
                {experimentProject.experiments.map((sub, subIndex) => (
                  <article
                    key={sub.title}
                    className="group flex flex-col space-y-4"
                  >
                    {/* Experiment Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                      <OptimizedImage
                        src={sub.image || experimentProject.image}
                        alt={sub.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                      />
                    </div>

                    {/* Experiment Info */}
                    <div className="flex flex-1 flex-col space-y-2">
                      <div className="font-mono text-xs text-zinc-400">
                        05.{subIndex + 1}
                      </div>

                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-100">
                        <a
                          href={sub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                        >
                          <span>{sub.title}</span>
                          <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-200" />
                        </a>
                      </h3>

                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {sub.description}
                      </p>

                      <div className="pt-2">
                        <a
                          href={sub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                        >
                          <span>Visit experiment</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Visually Secondary GitHub Footer Line */}
        <footer className="pt-12 pb-6 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-400">
          <p>More prototypes, experiments, and older code live on GitHub.</p>
          <a
            href="https://github.com/sabin-paudel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <span>github.com/sabin-paudel</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </footer>
      </main>
    </div>
  );
}
