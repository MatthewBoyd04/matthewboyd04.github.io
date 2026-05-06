import { Link } from 'react-router-dom';
import { TAG_CATEGORIES, getTagColor } from '../tagColors';
import { TagIcon } from '../tagIcons';
import ContactForm from '../Misc/ContactForm';
import { EXPERIENCE } from './About';
import { projects } from '../Projects/projectsData';
import { blogPosts } from '../Blog/blogPostsData';

const allEvidencedTags = new Set([
  ...EXPERIENCE.flatMap((e) => e.tags),
  ...projects.flatMap((p) => p.tags),
  ...blogPosts.flatMap((b) => b.tags),
]);

const SKILLS = Object.entries(TAG_CATEGORIES)
  .map(([category, { tags }]) => ({
    category,
    items: tags.filter((tag) => allEvidencedTags.has(tag)).sort(),
  }))
  .filter(({ items }) => items.length > 0);

const ROLE_STYLE = { color: 'var(--accent)' } as const;
const CATEGORY_LABEL_STYLE = {
  color: 'var(--text-label)',
  fontSize: '0.75rem',
  letterSpacing: '0.08em',
} as const;
const DIVIDER_STYLE = { borderColor: 'var(--border)' } as const;

function Home() {
  return (
    <div className="container py-5">
      {/* Hero */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold">Matthew Boyd</h1>
          <p className="fs-5 fw-semibold mt-1" style={ROLE_STYLE}>
            Software Developer · Incoming L4 @ Amazon
          </p>
          <p className="lead mt-3">
            MEng Computer Systems Engineering student at the University of Sheffield, with a
            dissertation in Multi-Agent Reinforcement Learning for Search and Rescue. Ex-SDE Intern
            at Amazon, Junior Developer at Digital CNC. I enjoy tackling hard problems and
            developing projects across the full stack, both for fun (such as my soveriegn chess
            variant and gamejam appearances) and for more pratical applications (such as my CNC
            control software and my work on MARL research).
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <a
              href="https://github.com/MatthewBoyd04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Matthew Boyd on GitHub"
              className="btn btn-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matthewboyd04/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Matthew Boyd on LinkedIn"
              className="btn btn-primary"
            >
              LinkedIn
            </a>
            <a href="mailto:matthewboydd04@gmail.com" className="btn btn-outline-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="mb-4">Skills</h2>
          <div className="d-flex flex-column gap-4">
            {SKILLS.map(({ category, items }) => (
              <div key={category}>
                <p className="mb-2 text-uppercase fw-semibold" style={CATEGORY_LABEL_STYLE}>
                  {category}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Link
                      key={skill}
                      to={{ pathname: '/projects', search: `?tag=${encodeURIComponent(skill)}` }}
                      className="badge fs-6 fw-normal py-2 px-3"
                      style={{
                        backgroundColor: getTagColor(skill),
                        color: 'var(--text-heading)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      <TagIcon tag={skill} />
                      {skill}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About teaser */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">About</h2>
          <p>
            Fourth-year MEng student, incoming Amazon L4, and hobbyist game developer. I work across
            the full stack — from RL research and CNC control software to web games created with
            React and hosted with Cloudflare.
          </p>
          <Link to="/about" className="btn btn-outline-secondary btn-sm">
            Full profile →
          </Link>
        </div>
      </div>

      <hr style={DIVIDER_STYLE} />

      {/* Contact */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="mb-3">Get In Touch</h2>
          <p>I'm always open to interesting projects and conversations.</p>
          <ContactForm />
          <p className="mt-3" style={{ fontSize: '0.9rem' }}>
            Or reach me directly:{' '}
            <a href="mailto:matthewboydd04@gmail.com" style={{ color: 'var(--accent)' }}>
              matthewboydd04@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
