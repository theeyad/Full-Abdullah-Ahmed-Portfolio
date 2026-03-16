import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Loader2, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { fetchProjects, type Project } from "../../lib/api";
import { useTheme } from "../../hooks/useTheme";

function ProjectCard({
  project,
  isDark,
}: {
  project: Project;
  isDark: boolean;
}) {
  const previewUrl = project.liveUrl ?? project.sourceUrl;
  const [showAllTech, setShowAllTech] = useState(false);
  const visibleTech = showAllTech ? project.techStack : project.techStack.slice(0, 4);

  return (
    <article
      className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        isDark
          ? "bg-bg-surface border-white/5 hover:border-mint/20 hover:shadow-mint/5"
          : "bg-white border-gray-200 hover:border-mint/30 hover:shadow-mint/10 shadow-sm"
      }`}
    >
      {/* Image */}
      <a
        href={previewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-48 overflow-hidden cursor-pointer"
        aria-label={`Preview ${project.title}`}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main/85 via-bg-main/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-900 shadow-lg">
            View Project
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-mint text-white text-xs font-bold" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>
          {project.badge}
        </div>
      </a>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className={`font-bold text-lg leading-tight ${isDark ? "text-text-main" : "text-gray-900"}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed line-clamp-3 ${isDark ? "text-text-muted" : "text-gray-600"}`}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
          {project.techStack.length > 4 && !showAllTech && (
            <button
              type="button"
              onClick={() => setShowAllTech(true)}
              className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                isDark
                  ? "border-white/10 text-text-muted hover:border-mint/30 hover:text-mint"
                  : "border-gray-200 text-gray-500 hover:border-mint/30 hover:text-mint"
              }`}
            >
              Show all tech
            </button>
          )}
          {project.techStack.length > 4 && showAllTech && (
            <button
              type="button"
              onClick={() => setShowAllTech(false)}
              className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                isDark
                  ? "border-white/10 text-text-muted hover:border-mint/30 hover:text-mint"
                  : "border-gray-200 text-gray-500 hover:border-mint/30 hover:text-mint"
              }`}
            >
              Show less
            </button>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2"
              aria-label={`Live demo of ${project.title}`}
            >
              Live Demo
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ${
              isDark ? "text-text-muted hover:text-mint" : "text-gray-500 hover:text-mint"
            }`}
            aria-label={`Source code of ${project.title}`}
          >
            <Github className="w-3.5 h-3.5" />
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { isDark } = useTheme();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => setError("Could not load projects. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  const projectsPerPage = 6;
  const orderedProjects = [...projects].reverse();
  const totalPages = Math.ceil(orderedProjects.length / projectsPerPage);
  const paginatedProjects = orderedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const goToPage = (page: number) => {
    const nextPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(nextPage);
    window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`relative ${isDark ? "section-soft-gradient--dark" : "section-soft-gradient--light"}`}
    >
      <div className="section-wrapper">
        <div className="text-center mb-12">
          <p className="section-label">Projects</p>
          <h2 className={`section-title ${isDark ? "" : "text-text-light-main"}`}>
            Selected Work <span className="gradient-text">I'm Proud Of</span>
          </h2>
          <div className="glow-line mx-auto" />
          <p className={`section-subtitle mt-6 max-w-xl mx-auto ${isDark ? "" : "text-text-light-muted"}`}>
            A collection of projects showcasing what I have built across different technologies and use cases.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-mint animate-spin" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 justify-center py-16 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isDark={isDark} />
            ))}
          </div>
        )}

        {!loading && !error && totalPages > 1 && (
          <div className="mt-10 flex justify-center">
            <div
              className={`flex max-w-full items-center gap-2 overflow-x-auto rounded-2xl border px-3 py-3 ${
                isDark ? "border-white/10 bg-bg-surface/80" : "border-gray-200 bg-white/90 shadow-sm"
              }`}
            >
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl border transition-all duration-200 ${
                  currentPage === 1
                    ? isDark
                      ? "cursor-not-allowed border-white/5 text-text-muted/40"
                      : "cursor-not-allowed border-gray-200 text-gray-300"
                    : isDark
                    ? "border-white/10 text-text-muted hover:border-mint/30 hover:bg-white/5 hover:text-mint"
                    : "border-gray-200 text-gray-600 hover:border-mint/30 hover:bg-gray-100 hover:text-mint"
                }`}
                aria-label="Previous project page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`h-10 min-w-10 rounded-xl px-3 text-sm font-semibold transition-all duration-200 ${
                      currentPage === page
                        ? "bg-mint text-white shadow-lg shadow-mint/25"
                        : isDark
                        ? "text-text-muted hover:bg-white/5 hover:text-mint"
                        : "text-gray-600 hover:bg-gray-100 hover:text-mint"
                    }`}
                    aria-label={`Go to project page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl border transition-all duration-200 ${
                  currentPage === totalPages
                    ? isDark
                      ? "cursor-not-allowed border-white/5 text-text-muted/40"
                      : "cursor-not-allowed border-gray-200 text-gray-300"
                    : isDark
                    ? "border-white/10 text-text-muted hover:border-mint/30 hover:bg-white/5 hover:text-mint"
                    : "border-gray-200 text-gray-600 hover:border-mint/30 hover:bg-gray-100 hover:text-mint"
                }`}
                aria-label="Next project page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <p className={`text-center py-16 ${isDark ? "text-text-muted" : "text-gray-500"}`}>
            No projects added yet.
          </p>
        )}
      </div>
    </section>
  );
}
