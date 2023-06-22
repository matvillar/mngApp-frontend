import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/projectQuery';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from './mutations/mutationProjects';

export default function ButtonToDeleteProject({ id }) {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id },
    onCompleted: () => {
      navigate('/');
    },
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex ms-auto">
        <button className="btn btn-primary m-2" onClick={deleteProject}>
          <FaTrash className="icon" /> Delete Project
        </button>
      </div>
    </>
  );
}
