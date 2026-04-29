import { Project } from "./projectsData";
import { getTagColor } from "../tagColors";

interface ProjectCardProps {
  project: Project;
  onBlogPostClick: (postId: string) => void;
}

function ProjectCard({ project, onBlogPostClick }: ProjectCardProps) {
  return (
    <div
      className="card"
      style={{ backgroundColor: "#1A1D24", border: "2px solid #2A2F3A", borderRadius: "12px", overflow: "hidden" }}
    >
      <div className="d-flex flex-column flex-md-row">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "200px",
              minHeight: "160px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ) : (
          <div
            style={{
              backgroundColor: project.placeholderColor,
              width: "200px",
              minHeight: "160px",
              flexShrink: 0,
            }}
          />
        )}
        <div className="card-body">
          <h4 className="card-title" style={{ color: "#E6E8EE" }}>
            {project.title}
          </h4>
          <p className="card-text" style={{ color: "#C9CCD6" }}>
            {project.description}
          </p>
          <div className="d-flex flex-wrap gap-1 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="badge"
                style={{ backgroundColor: getTagColor(tag) }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="d-flex gap-2">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{ backgroundColor: "#3B82F6", color: "#fff" }}
            >
              View Project
            </a>
            {project.blogPostId && (
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => onBlogPostClick(project.blogPostId!)}
              >
                View Blog Post
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
