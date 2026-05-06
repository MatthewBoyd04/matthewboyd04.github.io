import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from './blogPostsData';
import { getTagColor } from '../tagColors';
import { TagIcon } from '../tagIcons';

const BACK_BTN_STYLE = { color: 'var(--accent)', textDecoration: 'none' } as const;
const TITLE_STYLE    = { color: 'var(--text-heading)' } as const;
const META_STYLE     = { color: 'var(--text-body)' } as const;
const CONTENT_STYLE  = { color: 'var(--text-body)', lineHeight: '1.8' } as const;

function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  useEffect(() => {
    if (post) document.title = `${post.title} | Matthew Boyd`;
  }, [post]);

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h2>Post not found</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/blog')}>
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="container py-5">
      <button
        className="btn btn-link p-0 mb-4"
        style={BACK_BTN_STYLE}
        aria-label="Back to blog list"
        onClick={() => navigate('/blog')}
      >
        ← Back to Blog
      </button>
      <header>
        <h1 style={TITLE_STYLE}>{post.title}</h1>
        <small style={META_STYLE}>{formatDate(post.date)}</small>
        <div className="d-flex flex-wrap gap-1 my-3">
          {post.tags.map((tag) => (
            <span key={tag} className="badge" style={{ backgroundColor: getTagColor(tag), display: 'inline-flex', alignItems: 'center' }}>
              <TagIcon tag={tag} />
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="blog-content" style={CONTENT_STYLE}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}

export default BlogPostDetail;
