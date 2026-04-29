import { BlogPost } from "./blogPostsData";
import { getTagColor } from "../tagColors";

interface BlogListProps {
  posts: BlogPost[];
  onPostSelect: (id: string) => void;
}

function BlogList({ posts, onPostSelect }: BlogListProps) {
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="container py-5">
      <h1 className="mb-4">Blog</h1>
      <div className="d-flex flex-column gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card"
            style={{ backgroundColor: "#1A1D24", border: "1px solid #2A2F3A" }}
          >
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#E6E8EE" }}>
                {post.title}
              </h4>
              <small style={{ color: "#C9CCD6" }}>{formatDate(post.date)}</small>
              <p className="card-text mt-2" style={{ color: "#C9CCD6" }}>
                {post.summary}
              </p>
              <div className="d-flex flex-wrap gap-1 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge"
                    style={{ backgroundColor: getTagColor(tag) }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="btn btn-sm"
                style={{ backgroundColor: "#3B82F6", color: "#fff" }}
                onClick={() => onPostSelect(post.id)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
