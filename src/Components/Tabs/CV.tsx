import ProjectCard from "../Projects/ProjectCard";
import { projects } from "../Projects/projectsData";

interface CVProps {
  onBlogPostClick: (postId: string) => void;
}

function CV({ onBlogPostClick }: CVProps) {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Projects</h1>
      <div className="d-flex flex-column gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onBlogPostClick={onBlogPostClick}
          />
        ))}
      </div>
    </div>
  );
}

export default CV;
