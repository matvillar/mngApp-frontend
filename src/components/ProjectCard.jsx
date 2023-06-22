export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>
            <a className="btn btn-dark" href={`/project/${project.id}`}>
              View
            </a>
          </div>
          <p className="small">
            Status: <span className="fw-bold">{project.status}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
