import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PROJECT_BY_ID } from '../queries/projectQuery';
import LoadingSpinner from '../components/LoadingSpinner';
import ClientTableInfo from '../components/ClientTableInfo';
import ButtonToDeleteProject from '../components/ButtonToDeleteProject';
import EditButton from '../components/EditButton';

export default function OneProject() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id },
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error</p>;
  return (
    <>
      {!loading && !error && (
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h2>{data.project.name}</h2>
            <EditButton project={data.project} />
          </div>
          <div className="card-body">
            <p className="card-text">{data.project.description}</p>
            <h3 className="card-text">
              <span className="fw-bold">Status:</span> {data.project.status}
            </h3>
            <ClientTableInfo client={data.project.clientId} />
            <div className="d-flex justify-content-between mt-4">
              <Link className="btn btn-dark mt-2" to="/">
                Back
              </Link>
              <ButtonToDeleteProject id={id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
