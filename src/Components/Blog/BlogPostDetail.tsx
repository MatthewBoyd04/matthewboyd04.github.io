import { BlogPost } from "./blogPostsData";
import { getTagColor } from "../tagColors";

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

function BlogPostDetail({ post, onBack }: BlogPostDetailProps) {
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="container py-5">
      <button
        className="btn btn-link p-0 mb-4"
        style={{ color: "#8B5CF6", textDecoration: "none" }}
        onClick={onBack}
      >
        ← Back to Blog
      </button>
      <h1 style={{ color: "#E6E8EE" }}>{post.title}</h1>
      <small style={{ color: "#C9CCD6" }}>{formatDate(post.date)}</small>
      <div className="d-flex flex-wrap gap-1 my-3">
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
      <div style={{ color: "#C9CCD6", lineHeight: "1.8" }}>{post.content}</div>
    </div>
  );
}

export default BlogPostDetail;
