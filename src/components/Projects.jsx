import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQuery';
import LoadingSpinner from './LoadingSpinner';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>{error || 'something went wrong'}</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects found</p>
      )}
    </>
  );
}
