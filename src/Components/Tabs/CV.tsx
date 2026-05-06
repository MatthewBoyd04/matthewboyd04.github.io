import { useLocation, Link } from 'react-router-dom';
import ProjectCard from '../Projects/ProjectCard';
import { projects } from '../Projects/projectsData';
import { getTagColor, sortTags } from '../tagColors';
import { TagIcon } from '../tagIcons';

const ALL_TAGS = sortTags(Array.from(new Set(projects.flatMap((p) => p.tags))));

const CHIP_BASE: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '4px 10px',
  borderRadius: '20px',
  fontSize: '0.82rem',
  cursor: 'pointer',
  textDecoration: 'none',
  border: '1px solid transparent',
  fontWeight: 500,
};

function CV() {
  const { search } = useLocation();
  const activeTag = new URLSearchParams(search).get('tag');
  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div className="container py-5">
      <h1 className="mb-3">Projects</h1>

      {/* Tag filter cloud */}
      <div className="d-flex flex-wrap gap-2 mb-4 no-print">
        {ALL_TAGS.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <Link
              key={tag}
              to={isActive ? '/projects' : { pathname: '/projects', search: `?tag=${encodeURIComponent(tag)}` }}
              aria-pressed={isActive}
              style={{
                ...CHIP_BASE,
                backgroundColor: isActive ? getTagColor(tag) : 'var(--bg-deep)',
                color: isActive ? '#fff' : 'var(--text-body)',
                borderColor: isActive ? getTagColor(tag) : 'var(--border)',
              }}
            >
              <TagIcon tag={tag} />
              {tag}
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="py-5 text-center">
          <p style={{ color: 'var(--text-muted)' }}>
            No projects found for &ldquo;{activeTag}&rdquo;.
          </p>
          <Link to="/projects" className="btn btn-outline-secondary btn-sm">
            Show all projects
          </Link>
        </div>
      ) : (
        <div className="d-flex flex-column gap-4">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CV;
