import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BlogPost } from './blogPostsData';
import { getTagColor, sortTags } from '../tagColors';
import { TagIcon } from '../tagIcons';

interface BlogListProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 5;

const CARD_STYLE  = { backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' } as const;
const TITLE_STYLE = { color: 'var(--text-heading)' } as const;
const META_STYLE  = { color: 'var(--text-body)' } as const;
const BTN_BLUE    = { backgroundColor: 'var(--btn-blue)', color: '#fff' } as const;
const INPUT_STYLE = {
  backgroundColor: 'var(--bg-deep)',
  border: '1px solid var(--border)',
  color: 'var(--text-body)',
  borderRadius: '6px',
  maxWidth: '360px',
} as const;

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

function BlogList({ posts }: BlogListProps) {
  const { search } = useLocation();
  const activeTag = new URLSearchParams(search).get('tag');

  const ALL_TAGS = sortTags(Array.from(new Set(posts.flatMap((p) => p.tags))));

  const [query, setQuery] = useState('');
  const [page, setPage]   = useState(0);

  const q = query.toLowerCase().trim();
  const filtered = posts.filter((p) => {
    const matchesTag = !activeTag || p.tags.includes(activeTag);
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesTag && matchesQuery;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const visible    = filtered.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE);

  useEffect(() => { setPage(0); }, [query, activeTag]);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

  return (
    <div className="container py-5">
      <h1 className="mb-3">Blog</h1>

      {/* Tag filter cloud */}
      <div className="d-flex flex-wrap gap-2 mb-4 no-print">
        {ALL_TAGS.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <Link
              key={tag}
              to={isActive ? '/blog' : { pathname: '/blog', search: `?tag=${encodeURIComponent(tag)}` }}
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

      {/* Search */}
      <div className="mb-4 no-print">
        <input
          type="search"
          className="form-control"
          style={INPUT_STYLE}
          placeholder="Search posts…"
          aria-label="Search blog posts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {visible.length === 0 ? (
        <div className="py-5 text-center">
          <p style={{ color: 'var(--text-muted)' }}>
            No posts found{activeTag ? ` for "${activeTag}"` : query ? ` matching "${query}"` : ''}.
          </p>
          {activeTag && (
            <Link to="/blog" className="btn btn-outline-secondary btn-sm">
              Show all posts
            </Link>
          )}
        </div>
      ) : (
        <div className="d-flex flex-column gap-4">
          {visible.map((post) => (
            <article key={post.id} className="card" style={CARD_STYLE}>
              <div className="card-body">
                <header>
                  <h2 className="card-title fs-4" style={TITLE_STYLE}>
                    {post.title}
                  </h2>
                  <small style={META_STYLE}>{formatDate(post.date)}</small>
                </header>
                <p className="card-text mt-2" style={META_STYLE}>
                  {post.summary}
                </p>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {sortTags(post.tags).map((tag) => (
                    <Link
                      key={tag}
                      to={{ pathname: '/blog', search: `?tag=${encodeURIComponent(tag)}` }}
                      className="badge"
                      style={{ backgroundColor: getTagColor(tag), textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                    >
                      <TagIcon tag={tag} />
                      {tag}
                    </Link>
                  ))}
                </div>
                <Link to={`/blog/${post.id}`} className="btn btn-sm" style={BTN_BLUE}>
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center gap-3 mt-5 no-print">
          <button
            className="btn btn-outline-secondary btn-sm"
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
          >
            ← Previous
          </button>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Page {page + 1} of {totalPages}
          </span>
          <button
            className="btn btn-outline-secondary btn-sm"
            disabled={page === totalPages - 1}
            onClick={() => setPage((p) => p + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogList;
