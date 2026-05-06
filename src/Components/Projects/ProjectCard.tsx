import { Link } from 'react-router-dom';
import { Project } from './projectsData';
import { getTagColor, sortTags } from '../tagColors';
import { TagIcon } from '../tagIcons';

interface ProjectCardProps {
  project: Project;
}

const CARD_STYLE = {
  backgroundColor: 'var(--bg-card)',
  border: '2px solid var(--border)',
  borderRadius: '12px',
  overflow: 'hidden',
} as const;

const IMAGE_STYLE = {
  width: '200px',
  minHeight: '160px',
  objectFit: 'cover' as const,
  flexShrink: 0,
} as const;

const TITLE_STYLE = { color: 'var(--text-heading)' } as const;
const BODY_STYLE  = { color: 'var(--text-body)' } as const;
const BTN_BLUE    = { backgroundColor: 'var(--btn-blue)', color: '#fff' } as const;

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card" style={CARD_STYLE}>
      <div className="d-flex flex-column flex-md-row">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={IMAGE_STYLE}
          />
        ) : (
          <div
            style={{
              backgroundColor: project.placeholderColor,
              width: '200px',
              minHeight: '160px',
              flexShrink: 0,
            }}
          />
        )}
        <div className="card-body">
          <h2 className="card-title fs-4" style={TITLE_STYLE}>
            {project.title}
          </h2>
          <p className="card-text" style={BODY_STYLE}>
            {project.description}
          </p>
          <div className="d-flex flex-wrap gap-1 mb-3">
            {sortTags(project.tags).map((tag) => (
              <Link
                key={tag}
                to={{ pathname: '/projects', search: `?tag=${encodeURIComponent(tag)}` }}
                className="badge"
                style={{ backgroundColor: getTagColor(tag), textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
                <TagIcon tag={tag} />
                {tag}
              </Link>
            ))}
          </div>
          <div className="d-flex gap-2">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm"
                style={BTN_BLUE}
              >
                View Project
              </a>
            )}
            {project.blogPostId && (
              <Link to={`/blog/${project.blogPostId}`} className="btn btn-sm btn-outline-secondary">
                View Blog Post
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
