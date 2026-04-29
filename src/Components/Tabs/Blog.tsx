import BlogList from "../Blog/BlogList";
import BlogPostDetail from "../Blog/BlogPostDetail";
import { blogPosts } from "../Blog/blogPostsData";

interface BlogProps {
  selectedPostId: string | null;
  onSelectPost: (postId: string) => void;
  onClearPost: () => void;
}

function Blog({ selectedPostId, onSelectPost, onClearPost }: BlogProps) {
  const post = selectedPostId
    ? blogPosts.find((p) => p.id === selectedPostId) ?? null
    : null;

  return post ? (
    <BlogPostDetail post={post} onBack={onClearPost} />
  ) : (
    <BlogList posts={blogPosts} onPostSelect={onSelectPost} />
  );
}

export default Blog;
